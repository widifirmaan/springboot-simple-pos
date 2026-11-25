package com.primaelectronic.pos.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.primaelectronic.pos.model.Invoice;
import com.primaelectronic.pos.model.Stock;
import com.primaelectronic.pos.model.Transaction;
import com.primaelectronic.pos.payload.TransactionItemDTO;
import com.primaelectronic.pos.payload.TransactionRequest;
import com.primaelectronic.pos.repository.InvoiceRepository;
import com.primaelectronic.pos.repository.StockRepository;
import com.primaelectronic.pos.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public List<Transaction> getTransactionsByStore(int storeId) {
        return transactionRepository.findByToko(storeId);
    }

    @Override
    public List<Transaction> getTransactionsByDate(LocalDateTime start, LocalDateTime end) {
        return transactionRepository.findByDateBetween(start, end);
    }

    @Override
    public Transaction createTransaction(Transaction transaction) {
        transaction.setId(sequenceGeneratorService.generateSequence(Transaction.SEQUENCE_NAME));
        if (transaction.getDate() == null) {
            transaction.setDate(LocalDateTime.now());
        }
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction updateTransaction(long id, Transaction details) {
        return transactionRepository.findById(id).map(transaction -> {
            transaction.setAmount(details.getAmount());
            transaction.setProduct(details.getProduct());
            transaction.setToko(details.getToko());
            transaction.setPayment(details.getPayment());
            return transactionRepository.save(transaction);
        }).orElse(null);
    }

    @Override
    public void deleteTransaction(long id) {
        transactionRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void processTransaction(TransactionRequest request, String username, Integer toko) throws Exception {
        if (request == null || request.getDataBarang() == null || request.getDataBarang().isEmpty()) {
            throw new IllegalArgumentException("Daftar barang transaksi tidak boleh kosong");
        }
        if (username == null) {
            username = "system";
        }
        if (toko == null || toko <= 0) {
            toko = 1;
        }

        // 1. Pre-validate every item and snapshot original stock quantities before any writes
        List<Map.Entry<Stock, Integer>> stockSnapshots = new ArrayList<>();
        List<String> productLabels = new ArrayList<>();

        for (TransactionItemDTO item : request.getDataBarang()) {
            if (item == null || item.getQty() <= 0) {
                throw new IllegalArgumentException("Jumlah barang harus lebih dari 0");
            }

            long stockId;
            boolean numericId = true;
            try {
                stockId = Long.parseLong(item.getIdbarang());
            } catch (NumberFormatException e) {
                numericId = false;
                stockId = -1;
            }

            if (!numericId) {
                productLabels.add(item.getIdbarang() + " (" + item.getQty() + ")");
                continue;
            }

            Stock stock = stockRepository.findById(stockId).orElse(null);
            if (stock != null) {
                int currentQty = stock.getQty();
                int buyQty = item.getQty();
                if (currentQty < buyQty) {
                    throw new IllegalArgumentException(
                            "Stok tidak mencukupi untuk " + stock.getName() + " (tersedia: " + currentQty + ")");
                }
                stockSnapshots.add(new AbstractMap.SimpleEntry<>(stock, currentQty));
                stock.setQty(currentQty - buyQty);
                stock.setModifiedAt(LocalDateTime.now());
                productLabels.add(stock.getName() + " (" + buyQty + ")");
            } else {
                productLabels.add("ID:" + stockId + " (" + item.getQty() + ")");
            }
        }

        String productSummary = String.join(", ", productLabels);
        String itemsJson = new ObjectMapper().writeValueAsString(request.getDataBarang());

        // 2. Persist stock updates, invoice, and transaction with compensating rollback for standalone MongoDB
        List<Map.Entry<Stock, Integer>> updatedStocks = new ArrayList<>();
        Invoice savedInvoice = null;
        Transaction savedTransaction = null;

        try {
            for (Map.Entry<Stock, Integer> entry : stockSnapshots) {
                stockRepository.save(entry.getKey());
                updatedStocks.add(entry);
            }

            Invoice invoice = new Invoice();
            invoice.setDatabarang(itemsJson);
            invoice.setNota(request.getDataHTML());
            invoice.setMoney(request.getDataTrans());
            invoice.setToko(toko);
            invoice.setTgl(LocalDateTime.now());
            invoice.setUsername(username);
            invoice.setPayment(request.getDataPayment());
            savedInvoice = invoiceRepository.save(invoice);

            Transaction transaction = new Transaction();
            transaction.setId(sequenceGeneratorService.generateSequence(Transaction.SEQUENCE_NAME));
            transaction.setDate(LocalDateTime.now());
            transaction.setAmount((int) request.getDataTrans());
            transaction.setProduct(productSummary);
            transaction.setUserId(username);
            transaction.setToko(toko);
            transaction.setPayment(request.getDataPayment());
            savedTransaction = transactionRepository.save(transaction);
        } catch (Exception ex) {
            if (savedTransaction != null) {
                transactionRepository.deleteById(savedTransaction.getId());
            }
            if (savedInvoice != null && savedInvoice.getId() != null) {
                invoiceRepository.deleteById(savedInvoice.getId());
            }
            for (Map.Entry<Stock, Integer> updated : updatedStocks) {
                Stock stock = updated.getKey();
                stock.setQty(updated.getValue());
                stockRepository.save(stock);
            }
            throw ex;
        }
    }
}
