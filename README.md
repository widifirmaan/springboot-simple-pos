# Simpos

> Sistem Point of Sale (POS) ritel elektronik dan manajemen stok inventaris berbasis Spring Boot 3, MongoDB, dan Thymeleaf.

[![Engine](https://img.shields.io/badge/Spring_Boot-3.2.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17_LTS-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Database](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Template Engine](https://img.shields.io/badge/Thymeleaf-3-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)](https://www.thymeleaf.org/)
[![Container](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Build Tool](https://img.shields.io/badge/Maven-3.9-C71A36?style=flat-square&logo=apachemaven&logoColor=white)](https://maven.apache.org/)

---

## Live URL

- **Deployment Mode**: Aplikasi web lokal / on-premise berbasis server Java Spring Boot dan basis data MongoDB.
- **Local URL**: [http://localhost:8081](http://localhost:8081)

---

## Screenshot

| Desktop | Mobile |
| :---: | :---: |
| **Login Gateway & Autentikasi Role**<br>![Login](screenshots/Login%20Desktop.png) | **Login Gateway & Autentikasi Role**<br>![Login](screenshots/Login%20Mobile.png) |
| **Dashboard Operasional & Ringkasan Omset**<br>![Dashboard](screenshots/Dashboard%20Desktop.png) | **Dashboard Operasional & Ringkasan Omset**<br>![Dashboard](screenshots/Dashboard%20Mobile.png) |
| **Terminal Kasir & Kalkulasi Kembalian**<br>![Kasir](screenshots/Kasir%20Desktop.png) | **Terminal Kasir & Kalkulasi Kembalian**<br>![Kasir](screenshots/Kasir%20Mobile.png) |
| **Katalog Stok Barang & Barcode SVG**<br>![Stok Barang](screenshots/Stok%20Barang%20Desktop.png) | **Katalog Stok Barang & Barcode SVG**<br>![Stok Barang](screenshots/Stok%20Barang%20Mobile.png) |
| **Daftar Tagihan Sales & Invoice Vendor**<br>![Tagihan](screenshots/Tagihan%20Desktop.png) | **Daftar Tagihan Sales & Invoice Vendor**<br>![Tagihan](screenshots/Tagihan%20Mobile.png) |
| **Laporan Keuangan & Laba Kotor**<br>![Keuangan](screenshots/Keuangan%20Desktop.png) | **Laporan Keuangan & Laba Kotor**<br>![Keuangan](screenshots/Keuangan%20Mobile.png) |

---

## Fitur

- **Autentikasi Berbasis Role (`/login`, `/`)**:
  - **Admin (`hamam` / `123`, Level Akses 1)**: Memiliki hak akses penuh mencakup Dashboard Omset (`/dashboard`), Manajemen Stok Barang (`/stock-barang`), Laporan Keuangan (`/finance`), Tagihan Vendor (`/bill`), dan Kasir Transaksi (`/kasir`).
  - **Kasir (`kasir` / `123`, Level Akses 2)**: Hak akses operasional terbatas untuk transaksi kasir (`/kasir`) dan pencatatan tagihan, secara otomatis dicegah mengakses data laba kotor dan analitik keuangan.
- **Terminal Kasir POS (`/kasir`)**: Penambahan item produk belanjaan, pengaturan jumlah kuantitas, kalkulasi subtotal instan, perhitungan otomatis uang kembalian tunai, dan cetak nota transaksi HTML.
- **Inventaris Stok & Generator Barcode (`/stock-barang`)**: Manajemen katalog barang elektronik, harga modal, harga jual, penanggung jawab (PIC), generator barcode SVG dinamis berbasis JsBarcode, serta filter lokasi toko (Toko 1 & Toko 2) dengan indikator badge stok aman / menipis.
- **Laporan Laba Kotor Keuangan (`/finance`)**: Perhitungan keuntungan kotor harian dan bulanan, rekapitulasi volume barang keluar, filter rentang tanggal (`tgldari` & `tglsampai`), serta ekspor laporan ke Excel.
- **Manajemen Tagihan Vendor (`/bill`)**: Buku pencatatan hutang dagang supplier, tanggal jatuh tempo (*due date*), status pembayaran (*Lunas* / *Belum Dibayar*), dan kalkulasi sisa tanggungan.
- **Sequence Generator Otomatis**: Pengelolaan ID inkremental unik melalui koleksi `database_sequences` berbasis operasi atomik `findAndModify` MongoDB untuk mencegah duplikasi nota transaksi.
- **Inisialisasi Data Demo (`/seed`)**: Endpoint otomatis untuk menginisialisasi akun pengguna awal, katalog sampel smartphone & laptop, serta data riwayat tagihan.

---

## Tech Stack

| Kategori | Teknologi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Backend Framework** | Spring Boot `3.2.4` | Framework MVC enterprise, Inversion of Control, dan dependency injection |
| **Bahasa Pemrograman** | Java `17` LTS | Logika bisnis berorientasi objek, service layer, dan controller |
| **Basis Data** | MongoDB `7.0` | Database dokumen NoSQL untuk penyimpanan katalog, faktur, dan sequence |
| **Akses Data** | Spring Data MongoDB | Abstraksi repository dan kueri dokumen dinamis |
| **Template Engine** | Thymeleaf `3.x` | Rendering HTML di sisi server dengan binding data model |
| **Tema & UI** | Soft UI Dashboard (Bootstrap 5) | Desain dashboard modern dengan tata letak kartu dan tabel responsif |
| **Generator Barcode** | JsBarcode `3.11.5` | Pembangkitan barcode SVG vektor per ID produk di browser |
| **Boilerplate Helper** | Project Lombok | Reduksi boilerplate getter, setter, dan konstruktor model Java |
| **Build & Tooling** | Maven Wrapper (`./mvnw`) | Manajemen dependensi dan kompilasi executable JAR |
| **Kontainerisasi** | Docker | Eksekusi instance database MongoDB lokal |

---

## Database Architecture

Simpos menggunakan basis data NoSQL MongoDB dengan 6 koleksi utama (`com.primaelectronic.pos.model`):

```json
// 1. user — Akun pengguna & penugasan toko
{
  "_id": 1,
  "username": "hamam",
  "password": "123",
  "access": 1,              // 1: Admin, 2: Kasir
  "store": 1
}

// 2. stock — Katalog barang & inventaris
{
  "_id": 1,
  "name": "Samsung Galaxy S23",
  "qty": 10,
  "priceInit": 12000000.0,   // Harga modal beli
  "priceFinal": 13000000.0,  // Harga jual ritel
  "store": 1,
  "pic": "admin",
  "createdAt": "2026-11-17T10:00:00",
  "modifiedAt": "2026-11-17T10:00:00",
  "modifiedBy": "admin"
}

// 3. transaction — Catatan transaksi kasir
{
  "_id": 1,
  "date": "2026-11-17T10:15:00",
  "amount": 1,
  "product": "Samsung Galaxy S23",
  "userId": "kasir",
  "toko": 1,
  "payment": "CASH"
}

// 4. invoice — Arsip nota belanja
{
  "_id": "6739...",
  "databarang": "[{\"name\":\"Samsung Galaxy S23\",\"qty\":1,\"price\":13000000}]",
  "nota": "<html>...</html>",
  "money": 13000000.0,
  "toko": 1,
  "tgl": "2026-11-17T10:15:00",
  "username": "kasir",
  "payment": "CASH"
}

// 5. bill — Tagihan hutang vendor / sales
{
  "_id": 1,
  "nama": "Supplier Elektronik Jaya",
  "nominal": "50000000",
  "ket": "Pengadaan Stok Smartphone Batch 1",
  "pic": "Widi Firmansyah",
  "status": 1,               // 1: Lunas, 0: Belum Dibayar
  "nominalMinus": 0,
  "dueDate": "2026-12-01",
  "createdAt": "2026-11-17",
  "createdBy": "hamam"
}

// 6. database_sequences — Auto-increment atomik
{
  "_id": "transaction_sequence",
  "seq": 1
}
```

---

## Panduan Setup & Menjalankan Lokal

### 1. Prasyarat Sistem

- **Java Development Kit (JDK)**: Versi `17` LTS (OpenJDK atau Oracle JDK)
- **Docker**: Untuk menjalankan instance MongoDB lokal
- **Apache Maven**: Disediakan melalui wrapper bawaan (`./mvnw`)

### 2. Environment & Konfigurasi Basis Data

Konfigurasi koneksi aplikasi terletak di `src/main/resources/application.properties`:

```properties
spring.application.name=simpos
server.port=8081
spring.data.mongodb.uri=mongodb://localhost:27017/simpos
spring.data.mongodb.database=simpos
```

### 3. Menjalankan Database MongoDB Lokal

Jalankan container database MongoDB lokal via Docker:

```bash
docker run -d --name simpos-mongo -p 27017:27017 mongo:7.0
```

### 4. Menjalankan Aplikasi Spring Boot

```bash
# Clone repository
git clone https://github.com/widifirmaan/springboot-simple-pos.git
cd springboot-simple-pos

# Jalankan server Spring Boot
./mvnw spring-boot:run
```

Aplikasi berjalan pada port `8081`. Buka [http://localhost:8081](http://localhost:8081) di browser Anda.

### 5. Inisialisasi Data Seeder

Setelah server berjalan, inisialisasi data awal dengan membuka URL seeder berikut di browser atau via curl:

```bash
curl http://localhost:8081/seed
```

#### Kredensial Akun Seeder:
- **Administrator**: Username `hamam` / Password `123` (Hak akses penuh semua modul)
- **Kasir**: Username `kasir` / Password `123` (Hak akses transaksi kasir dan tagihan)

### 6. Panduan Uji Manual (Testing Checklist)

| No | Fitur | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Login Admin** | Buka `http://localhost:8081`, login dengan `hamam` / `123` | Berhasil login dan diarahkan ke Dashboard Omset (`/dashboard`) |
| 2 | **Katalog Stok** | Buka menu `/stock-barang` | Tabel stok menampilkan item smartphone/laptop beserta barcode SVG dan pill status kuantitas |
| 3 | **Tambah Produk** | Klik tombol *Tambah Barang*, isi nama produk, harga modal, harga jual, kuantitas, simpan | Produk baru muncul di tabel dengan nomor barcode unik |
| 4 | **Transaksi Kasir** | Buka `/kasir`, masukkan nama pembeli, pilih produk, isi nominal uang bayar, klik *Cetak & Bayar* | Nota belanja tercetak, sisa stok produk otomatis terpotong, dan kembalian terhitung pas |
| 5 | **Buku Tagihan** | Buka `/bill` | Tabel tagihan menampilkan vendor, status lunas/belum lunas, dan tombol aksi edit |
| 6 | **Laporan Keuangan** | Buka `/finance`, atur filter tanggal dan klik *Cari* | Ringkasan laba kotor terhitung otomatis dari selisih harga jual dan harga modal |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
