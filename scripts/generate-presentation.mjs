import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');
const downloadsDir = '/home/widifirmaan/Downloads';

function encodeImage(filename) {
  const filePath = path.join(screenshotsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Screenshot tidak ditemukan: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Memproses screenshot Simpos POS...');

const images = {
  loginDesktop: encodeImage('POS Login Screen Desktop.png'),
  loginMobile: encodeImage('POS Login Screen Mobile.png'),
  cashierDesktop: encodeImage('POS Cashier Terminal Desktop.png'),
  cashierMobile: encodeImage('POS Cashier Terminal Mobile.png'),
  checkoutDesktop: encodeImage('POS Cashier Checkout Summary Desktop.png'),
  checkoutMobile: encodeImage('POS Cashier Checkout Summary Mobile.png'),
  receiptDesktop: encodeImage('POS Cashier Receipt Desktop.png'),
  receiptMobile: encodeImage('POS Cashier Receipt Mobile.png'),
  analyticsDesktop: encodeImage('POS Analytics Dashboard Desktop.png'),
  analyticsMobile: encodeImage('POS Analytics Dashboard Mobile.png'),
  stockDesktop: encodeImage('POS Stock Inventory Catalog Desktop.png'),
  stockMobile: encodeImage('POS Stock Inventory Catalog Mobile.png'),
  financeDesktop: encodeImage('POS Finance Profit Ledger Desktop.png'),
  financeMobile: encodeImage('POS Finance Profit Ledger Mobile.png'),
  billsDesktop: encodeImage('POS Vendor Bills Table Desktop.png'),
  billsMobile: encodeImage('POS Vendor Bills Table Mobile.png'),
};

console.log('Menyusun HTML dokumen presentasi Simpos POS...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Simpos - Spring Boot 3 & MongoDB Enterprise POS Architecture</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-spring: #0B1117;
      --bg-card: #121D24;
      --bg-surface: #182731;
      --border-card: #1F303C;
      --border-glow: #2D4658;
      --text-main: #F8FAFC;
      --text-muted: #94A3B8;
      --accent-green: #6DB33F;
      --accent-cyan: #00D2FF;
      --accent-emerald: #10B981;
      --accent-amber: #F59E0B;
      --accent-indigo: #6366F1;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #05080C;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-main);
      line-height: 1.4;
    }

    @page {
      size: 297mm 210mm;
      margin: 0;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      position: relative;
      background: var(--bg-spring);
      display: flex;
      flex-direction: column;
      padding: 16mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 100% 0%, rgba(109, 179, 63, 0.08) 0%, transparent 60%),
        radial-gradient(circle at 0% 100%, rgba(0, 210, 255, 0.05) 0%, transparent 50%),
        linear-gradient(to right, rgba(31, 48, 60, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(31, 48, 60, 0.2) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
    }

    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-green), var(--accent-cyan), var(--accent-emerald));
      z-index: 50;
    }

    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1px solid var(--border-card);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-badge {
      background: rgba(109, 179, 63, 0.12);
      border: 1px solid var(--accent-green);
      color: var(--accent-green);
      padding: 4px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 4px;
    }

    .slide-section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .slide-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-green);
    }

    .slide-body {
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 22px;
      flex: 1;
      min-height: 0;
    }

    .slide-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
    }

    .headline-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .slide-title {
      font-size: 24px;
      font-weight: 800;
      line-height: 1.2;
      color: #FFFFFF;
      letter-spacing: -0.02em;
    }

    .slide-desc {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .feature-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 10px 14px;
      border-left: 3px solid var(--accent-green);
    }

    .feature-card.cyan {
      border-left-color: var(--accent-cyan);
    }

    .feature-card.amber {
      border-left-color: var(--accent-amber);
    }

    .feature-card.emerald {
      border-left-color: var(--accent-emerald);
    }

    .feature-card-title {
      font-size: 12.5px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 3px;
      letter-spacing: -0.01em;
    }

    .feature-card-text {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 6px;
      padding: 8px 10px;
      text-align: center;
    }

    .metric-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      font-weight: 800;
      color: var(--accent-green);
    }

    .metric-lbl {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-top: 2px;
    }

    .visual-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .screenshot-desktop {
      max-width: 95%;
      max-height: 380px;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.7));
    }

    .screenshot-mobile {
      position: absolute;
      right: 0px;
      bottom: -8px;
      max-height: 280px;
      max-width: 28%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.8));
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      border-top: 1px solid var(--border-card);
      padding-top: 3mm;
    }

    .footer-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--text-muted);
    }

    .footer-url {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--accent-green);
    }

    /* Cover Styling */
    .cover-body {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 30px;
      align-items: center;
      flex: 1;
      min-height: 0;
    }

    .cover-tagline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: var(--accent-green);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .cover-title {
      font-size: 38px;
      font-weight: 900;
      color: #FFFFFF;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 14px;
    }

    .cover-desc {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .cover-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .spec-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 10px 14px;
    }

    .spec-k {
      font-size: 9px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .spec-v {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 2px;
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
      min-height: 0;
      margin-top: 10px;
    }

    .arch-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 10px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .arch-title {
      font-size: 14px;
      font-weight: 800;
      color: #FFFFFF;
      border-bottom: 1px solid var(--border-card);
      padding-bottom: 8px;
    }

    .arch-item {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .arch-item strong {
      color: #FFFFFF;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ENTERPRISE POS</span>
        <span class="slide-section-title">Dokumentasi Rekayasa Perangkat Lunak</span>
      </div>
      <div class="slide-number">01 / 10</div>
    </div>

    <div class="cover-body">
      <div>
        <div class="cover-tagline">Java Enterprise Architecture</div>
        <h1 class="cover-title">Simpos Sistem Kasir & Manajemen Retail</h1>
        <p class="cover-desc">
          Platform Point of Sale enterprise berbasis Spring Boot 3 dan MongoDB dengan otentikasi peran berjenjang (RBAC), terminal kasir interaktif, cetak struk thermal 58mm, inventaris stok otomatis, serta pencatatan laba rugi keuangan komprehensif.
        </p>

        <div class="cover-specs">
          <div class="spec-card">
            <div class="spec-k">Backend Framework</div>
            <div class="spec-v">Spring Boot 3 & Java 17</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Database Engine</div>
            <div class="spec-v">MongoDB NoSQL Replica</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Security & Access</div>
            <div class="spec-v">Spring Security 6 (RBAC)</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Printing System</div>
            <div class="spec-v">58mm Thermal ESC/POS</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.analyticsDesktop}" class="screenshot-desktop" alt="Simpos Cover">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Spring Boot 3 + Java 17 + MongoDB + Spring Security + Thymeleaf</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 2: ARSITEKTUR BACKEND -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ARCHITECTURE</span>
        <span class="slide-section-title">Fondasi Sistem & Struktur Enterprise</span>
      </div>
      <div class="slide-number">02 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 12px;">
      <h2 class="slide-title">Arsitektur Enterprise & Ketahanan Transaksi</h2>
      <p class="slide-desc">Desain berlapis berbasis Spring Boot yang menjamin integritas transaksi penjualan, konsistensi stok barang, dan keamanan akses data multi-pengguna.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-green);">Spring Core & MVC Services</div>
        <div class="arch-item"><strong>Layered Architecture:</strong> Pemisahan ketat antara Controller, Service Layer, dan Data Access Object (Repository).</div>
        <div class="arch-item"><strong>Atomic Stock Mutations:</strong> Mutasi jumlah stok barang secara atomik untuk mencegah overselling pada waktu transaksi bersamaan.</div>
        <div class="arch-item"><strong>Validasi Bean JSR-380:</strong> Pemeriksaan ketat tipe data, kuantitas harga, dan batas numerik sebelum data masuk ke database.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-cyan);">Persistensi Dokumen MongoDB</div>
        <div class="arch-item"><strong>Desain Skema Terdenormalisasi:</strong> Snapshot harga beli dan harga jual tersimpan dalam dokumen transaksi untuk integritas audit historis.</div>
        <div class="arch-item"><strong>Indeks Performa Tinggi:</strong> Pengindeksan pada barcode barang, tanggal transaksi, dan status tagihan vendor untuk query instan.</div>
        <div class="arch-item"><strong>Agregasi Laporan Keuangan:</strong> Pipeline agregasi MongoDB untuk kalkulasi omset, HPP, laba kotor, dan laba bersih secara seketika.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-emerald);">Keamanan & Multi-Role RBAC</div>
        <div class="arch-item"><strong>Spring Security 6:</strong> Manajemen sesi berbasis filter chain dengan enkripsi kata sandi BCrypt berkekuatan tinggi.</div>
        <div class="arch-item"><strong>Hak Akses Berjenjang:</strong> Pemisahan peran Admin (akses penuh & laporan laba) dan Kasir (khusus operasional terminal jual).</div>
        <div class="arch-item"><strong>Cetak Thermal Terisolasi:</strong> Driver cetak struk CSS print 58mm yang kompatibel dengan berbagai printer kasir USB/Bluetooth.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Simpos Architecture Blueprint</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 3: TERMINAL KASIR -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">CASHIER TERMINAL</span>
        <span class="slide-section-title">Terminal Kasir & Pemindaian Barcode</span>
      </div>
      <div class="slide-number">03 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Terminal Kasir & Pemrosesan Keranjang</h2>
          <p class="slide-desc">Antarmuka registrasi transaksi dengan pencarian cepat barcode barang, kalkulasi diskon otomatis, dan pengelolaan keranjang belanja belanja.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Dukungan Pemindai Barcode Cepat</div>
            <div class="feature-card-text">Input pemindai barcode otomatis menambahkan produk ke keranjang belanja tanpa perlu menyentuh mouse.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Kalkulasi Otomatis Seketika</div>
            <div class="feature-card-text">Perhitungan subtotal, kalkulasi pajak, diskon per item, dan total tagihan diperbarui secara langsung di sisi browser.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Validasi Stok Realtime</div>
            <div class="feature-card-text">Peringatan visual seketika jika kuantitas barang yang dimasukkan melebihi sisa stok fisik di gudang.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">&lt; 300ms</div>
            <div class="metric-lbl">Cart Add Latency</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Barcode</div>
            <div class="metric-lbl">Scanner Ready</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Atomic</div>
            <div class="metric-lbl">Stock Safety</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.cashierDesktop}" class="screenshot-desktop" alt="Cashier Desktop">
        <img src="${images.cashierMobile}" class="screenshot-mobile" alt="Cashier Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/main/resources/templates/cashier.html</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 4: CHECKOUT & STRUK THERMAL -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">RECEIPT PRINTING</span>
        <span class="slide-section-title">Ringkasan Checkout & Struk Thermal 58mm</span>
      </div>
      <div class="slide-number">04 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Ringkasan Pembayaran & Cetak Struk</h2>
          <p class="slide-desc">Alur penuntasan transaksi pembayaran tunai/non-tunai dengan penghitungan uang kembalian dan cetak struk format 58mm siap pakai.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Kalkulasi Kembalian Otomatis</div>
            <div class="feature-card-text">Input nominal uang tunai yang diterima langsung menampilkan jumlah kembalian secara akurat untuk kasir.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Format Struk Thermal 58mm Standar</div>
            <div class="feature-card-text">Pola layout CSS print yang dikalibrasi presisi untuk kertas struk thermal 58mm dengan font monospaced rapi.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Pencatatan Nomor Faktur Unik</div>
            <div class="feature-card-text">Generator nomor invoice unik berseri dengan stempel waktu dan identitas kasir yang bertugas.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">58mm</div>
            <div class="metric-lbl">Paper Width</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Auto Calc</div>
            <div class="metric-lbl">Cash Change</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">1-Click</div>
            <div class="metric-lbl">Direct Print</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.checkoutDesktop}" class="screenshot-desktop" alt="Checkout Summary Desktop">
        <img src="${images.receiptMobile}" class="screenshot-mobile" alt="Receipt Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Engine: ESC/POS Thermal CSS Print Stylesheet</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 5: DASHBOARD ANALITIK -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ANALYTICS</span>
        <span class="slide-section-title">Dashboard Analitik & Metrik Penjualan</span>
      </div>
      <div class="slide-number">05 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Dashboard Analisis Pendapatan & KPI</h2>
          <p class="slide-desc">Pusat kendali eksekutif dengan kartu metrik ringkasan omzet harian, total transaksi, rata-rata belanja (basket size), dan produk terlaris.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Agregasi Pendapatan Real-Time</div>
            <div class="feature-card-text">Kalkulasi total nilai transaksi hari ini yang diperbarui secara otomatis setiap kali pembayaran kasir selesai.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Pelacakan Produk Terlaris</div>
            <div class="feature-card-text">Daftar peringkat produk dengan volume penjualan tertinggi untuk mendukung keputusan pengadaan stok barang.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Ringkasan Arus Kas Masuk</div>
            <div class="feature-card-text">Pemisahan visual antara penerimaan tunai kasir dan transaksi non-tunai (transfer / e-wallet).</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Live</div>
            <div class="metric-lbl">Revenue Metric</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Top 10</div>
            <div class="metric-lbl">Fast Moving</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Visual</div>
            <div class="metric-lbl">Trend Cards</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.analyticsDesktop}" class="screenshot-desktop" alt="Analytics Dashboard Desktop">
        <img src="${images.analyticsMobile}" class="screenshot-mobile" alt="Analytics Dashboard Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/main/resources/templates/dashboard.html</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 6: MANAJEMEN STOK INVENTARIS -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">INVENTORY</span>
        <span class="slide-section-title">Katalog Inventaris & Ambang Batas Stok</span>
      </div>
      <div class="slide-number">06 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Manajemen Stok & Peringatan Habis</h2>
          <p class="slide-desc">Pencatatan data master barang mencakup kode SKU, nama produk, kategori, harga modal beli, harga eceran jual, dan batas stok menipis.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Peringatan Stok Menipis Otomatis</div>
            <div class="feature-card-text">Penanda badge merah pada produk yang jumlah stoknya telah menyentuh batas minimum pemesanan ulang.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Modal CRUD Produk Cepat</div>
            <div class="feature-card-text">Formulir penambahan, pengubahan data, dan penyesuaian stok fisik (stock opname) melalui dialog modal interaktif.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Katalog Publik Tersedia</div>
            <div class="feature-card-text">Tampilan daftar barang publik tanpa harga modal yang aman ditampilkan pada layar display pelanggan toko.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Alert</div>
            <div class="metric-lbl">Low Stock Warning</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">SKU/Barcode</div>
            <div class="metric-lbl">Unique Identifier</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-lbl">Modal Editor</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.stockDesktop}" class="screenshot-desktop" alt="Stock Catalog Desktop">
        <img src="${images.stockMobile}" class="screenshot-mobile" alt="Stock Catalog Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/main/resources/templates/stock.html</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 7: BUKU BESAR KEUANGAN -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">FINANCE</span>
        <span class="slide-section-title">Buku Besar Keuangan & Laba Bersih</span>
      </div>
      <div class="slide-number">07 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Buku Besar Finansial & Rekapitulasi Laba</h2>
          <p class="slide-desc">Pencatatan laba kotor per transaksi yang dihitung dari selisih riil harga jual dan harga modal beli produk pada waktu transaksi.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Kalkulasi Laba Kotor Akurat</div>
            <div class="feature-card-text">Perhitungan otomatis Gross Margin berdasarkan riwayat snapshot harga modal pembelian barang.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Filter Rentang Tanggal Laporan</div>
            <div class="feature-card-text">Kemudahan penarikan laporan omset dan laba bulanan atau mingguan untuk keperluan pembukuan pemilik usaha.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Audit Trail & Edit Transaksi</div>
            <div class="feature-card-text">Pencatatan riwayat penyesuaian transaksi dengan otorisasi khusus Administrator untuk mencegah manipulasi data.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Net Margin</div>
            <div class="metric-lbl">Realtime Profit</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Date Filter</div>
            <div class="metric-lbl">Custom Range</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Immutable</div>
            <div class="metric-lbl">Cost Snapshot</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.financeDesktop}" class="screenshot-desktop" alt="Finance Profit Desktop">
        <img src="${images.financeMobile}" class="screenshot-mobile" alt="Finance Profit Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/main/resources/templates/finance.html</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 8: TAGIHAN VENDOR -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ACCOUNTS PAYABLE</span>
        <span class="slide-section-title">Manajemen Tagihan Vendor & Pengeluaran</span>
      </div>
      <div class="slide-number">08 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Manajemen Hutang Tagihan Supplier</h2>
          <p class="slide-desc">Pencatatan faktur pembelian barang dari distributor pihak ketiga dengan status pelunasan (Lunas / Jatuh Tempo) dan pengingat tanggal pembayaran.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Pencatatan Faktur Supplier Terpusat</div>
            <div class="feature-card-text">Daftar tagihan mencakup nama distributor, nomor faktur pengiriman, total tagihan, dan tanggal jatuh tempo.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Status Pelunasan Visual</div>
            <div class="feature-card-text">Label warna pembeda antara tagihan yang sudah diselesaikan dan faktur yang mendekati batas waktu tempo.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Sinkronisasi Beban Operasional</div>
            <div class="feature-card-text">Tagihan yang telah dibayar otomatis mengurangi arus kas bersih toko pada laporan keuangan utama.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Due Date</div>
            <div class="metric-lbl">Reminder Alert</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Paid/Unpaid</div>
            <div class="metric-lbl">Status Badges</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Supplier</div>
            <div class="metric-lbl">Directory</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.billsDesktop}" class="screenshot-desktop" alt="Vendor Bills Desktop">
        <img src="${images.billsMobile}" class="screenshot-mobile" alt="Vendor Bills Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/main/resources/templates/bills.html</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 9: AUTENTIKASI KEAMANAN RBAC -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">SECURITY & AUTH</span>
        <span class="slide-section-title">Otentikasi Berperan & Gerbang Masuk</span>
      </div>
      <div class="slide-number">09 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Gerbang Autentikasi & Hak Akses RBAC</h2>
          <p class="slide-desc">Perlindungan antarmuka dan endpoint API dengan Spring Security 6, hashing kredensial BCrypt, dan isolasi hak akses kasir versus manajer.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Role-Based Access Control (RBAC)</div>
            <div class="feature-card-text">Kasir hanya memiliki wewenang terminal registrasi, sedangkan menu analitik dan laporan keuangan terkunci untuk Admin.</div>
          </div>
          <div class="feature-card cyan">
            <div class="feature-card-title">Pencegahan Brute-Force & Alert</div>
            <div class="feature-card-text">Pemberian feedback kesalahan kredensial yang jelas serta proteksi sesi peramban dari serangan session hijacking.</div>
          </div>
          <div class="feature-card amber">
            <div class="feature-card-title">Desain Login Profesional</div>
            <div class="feature-card-text">Antarmuka login elegan dengan brand Simpos dan pemilihan peran kerja yang intuitif.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Spring Sec 6</div>
            <div class="metric-lbl">Auth Engine</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">BCrypt</div>
            <div class="metric-lbl">Password Hash</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">2 Roles</div>
            <div class="metric-lbl">Admin & Cashier</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.loginDesktop}" class="screenshot-desktop" alt="Login Desktop">
        <img src="${images.loginMobile}" class="screenshot-mobile" alt="Login Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Security: Spring Security 6 Configuration</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 10: SPESIFIKASI PRODUKSI -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">SPECIFICATION</span>
        <span class="slide-section-title">Ringkasan Spesifikasi & Kesiapan Produksi</span>
      </div>
      <div class="slide-number">10 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 12px;">
      <h2 class="slide-title">Spesifikasi Teknis & Kesiapan Distribusi</h2>
      <p class="slide-desc">Ringkasan arsitektur Java Enterprise, metrik kehandalan database, dan standarisasi container Docker untuk implementasi produksi toko.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-green);">Metrik Performa & Audit Web</div>
        <div class="arch-item"><strong>Lighthouse Score:</strong> 97+ pada Best Practices, Accessibility, dan Performance.</div>
        <div class="arch-item"><strong>Respon Endpoint Cepat:</strong> Rata-rata waktu eksekusi query MongoDB di bawah 15ms berkat pengindeksan presisi.</div>
        <div class="arch-item"><strong>Ringan di RAM:</strong> Konsumsi memori JVM terkendali dengan runtime container OpenJDK 17 yang ramping.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-cyan);">Integritas Data & Audit</div>
        <div class="arch-item"><strong>ACID Transaction Support:</strong> Transaksi multi-dokumen MongoDB untuk memastikan mutasi stok dan kasir selalu konsisten.</div>
        <div class="arch-item"><strong>Backup Otomatis:</strong> Prosedur dump database berkala untuk mencegah kehilangan catatan riwayat penjualan.</div>
        <div class="arch-item"><strong>Kompatibilitas Hardware:</strong> Beroperasi lancar dengan barcode scanner USB, laci kasir RJ11, dan printer thermal.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-emerald);">Infrastruktur & Deployment</div>
        <div class="arch-item"><strong>Docker Containerized:</strong> Siap dijalankan dengan satu perintah via docker-compose (App + MongoDB).</div>
        <div class="arch-item"><strong>On-Premise / Cloud Ready:</strong> Dapat dipasang di komputer lokal toko secara offline maupun di server cloud VPS.</div>
        <div class="arch-item"><strong>Reliabilitas Tinggi:</strong> Ketersediaan operasional tanpa henti untuk menunjang transaksi kasir harian.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Simpos Production Specification Document</span>
      <span class="footer-url">simpos.widifirmaan.web.id</span>
    </div>
  </section>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

async function renderPDF() {
  console.log('Menjalankan Playwright Chromium untuk render PDF Simpos...');
  
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready');

  const slidePdfPath = path.join(downloadsDir, 'Simpos.pdf');
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    width: '297mm',
    height: '210mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background-color: #0B1117 !important;
      }
      .slide {
        page-break-after: unset !important;
        page-break-inside: avoid !important;
        margin-bottom: 0px !important;
        box-shadow: none !important;
      }
    `
  });

  await page.waitForTimeout(500);

  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const contPdfPath = path.join(downloadsDir, 'Simpos-Continuous.pdf');
  await page.pdf({
    path: contPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(contPdfPath);

  console.log('\nPDF Simpos berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${contPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Gagal membuat PDF:', err);
  process.exit(1);
});
