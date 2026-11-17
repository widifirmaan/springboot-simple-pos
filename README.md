# Simpos

> Point-of-sale system and retail inventory tracking built with Spring Boot 3, MongoDB, and Thymeleaf.

Simpos is a point-of-sale (POS) and inventory management web application engineered with Spring Boot 3 and MongoDB. Designed for retail electronics merchants, the system provides role-based workflows for Administrators and Cashiers, multi-item register checkout with instant cash change calculations, real-time inventory tracking with dynamic barcode generation, multi-store filtering, accounts payable vendor billing tracking, and financial profit analytics.

[![Engine](https://img.shields.io/badge/Spring_Boot-3.2.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17_LTS-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Database](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Template Engine](https://img.shields.io/badge/Thymeleaf-3-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)](https://www.thymeleaf.org/)
[![Container](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Build Tool](https://img.shields.io/badge/Maven-3.9-C71A36?style=flat-square&logo=apachemaven&logoColor=white)](https://maven.apache.org/)

---

## Showcase

### 1. Executive Operations Dashboard & Authentication (`/login`, `/dashboard`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Authentication Portal (Role-Based Gateway)**<br>![POS Login Screen Desktop](screenshots/POS%20Login%20Screen%20Desktop.png) | **Authentication Portal (Role-Based Gateway)**<br>![POS Login Screen Mobile](screenshots/POS%20Login%20Screen%20Mobile.png) |
| **Executive Analytics Dashboard (Gross Revenue & Metrics)**<br>![POS Analytics Dashboard Desktop](screenshots/POS%20Analytics%20Dashboard%20Desktop.png) | **Executive Analytics Dashboard (Gross Revenue & Metrics)**<br>![POS Analytics Dashboard Mobile](screenshots/POS%20Analytics%20Dashboard%20Mobile.png) |

### 2. Cashier POS Register & Checkout Workflows (`/kasir`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Cashier Point-of-Sale Register Terminal**<br>![POS Cashier Register Desktop](screenshots/POS%20Cashier%20Register%20Terminal%20Desktop.png) | **Cashier Point-of-Sale Register Terminal**<br>![POS Cashier Register Mobile](screenshots/POS%20Cashier%20Register%20Terminal%20Mobile.png) |
| **Cashier Checkout & Instant Change Calculation**<br>![POS Checkout Desktop](screenshots/POS%20Checkout%20&%20Change%20Calculation%20Desktop.png) | **Cashier Checkout & Instant Change Calculation**<br>![POS Checkout Mobile](screenshots/POS%20Checkout%20&%20Change%20Calculation%20Mobile.png) |

### 3. Inventory Stock, Barcodes & SKU Provisioning (`/stock-barang`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Stock Inventory Catalog with Dynamic SVG Barcodes**<br>![POS Stock Inventory Desktop](screenshots/POS%20Stock%20Inventory%20Catalog%20Desktop.png) | **Stock Inventory Catalog with Dynamic SVG Barcodes**<br>![POS Stock Inventory Mobile](screenshots/POS%20Stock%20Inventory%20Catalog%20Mobile.png) |
| **Add Electronic Stock SKU Modal**<br>![POS Add Stock SKU Modal Desktop](screenshots/POS%20Add%20Stock%20SKU%20Modal%20Desktop.png) | **Add Electronic Stock SKU Modal**<br>![POS Add Stock SKU Modal Mobile](screenshots/POS%20Add%20Stock%20SKU%20Modal%20Mobile.png) |

### 4. Accounts Payable & Vendor Invoices (`/bill`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Accounts Payable & Vendor Billing Ledger**<br>![POS Vendor Invoices Desktop](screenshots/POS%20Vendor%20Invoices%20Table%20Desktop.png) | **Accounts Payable & Vendor Billing Ledger**<br>![POS Vendor Invoices Mobile](screenshots/POS%20Vendor%20Invoices%20Table%20Mobile.png) |
| **Add Vendor Bill Modal**<br>![POS Add Vendor Bill Modal Desktop](screenshots/POS%20Add%20Vendor%20Bill%20Modal%20Desktop.png) | **Add Vendor Bill Modal**<br>![POS Add Vendor Bill Modal Mobile](screenshots/POS%20Add%20Vendor%20Bill%20Modal%20Mobile.png) |

### 5. Financial Ledger & Profit Margin Reports (`/finance`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Financial Ledger & Gross Profit Analytics**<br>![POS Financial Profit Desktop](screenshots/POS%20Financial%20Profit%20Ledger%20Desktop.png) | **Financial Ledger & Gross Profit Analytics**<br>![POS Financial Profit Mobile](screenshots/POS%20Financial%20Profit%20Ledger%20Mobile.png) |

---

## Features

- **Role-Based Authentication & Workflows (`/login`, `/`)**:
  - **Admin (`hamam` / `123`, Access Level 1)**: Full permissions across executive Analytics Dashboard (`/dashboard`), Stock Inventory (`/stock-barang`), Financial Ledger (`/finance`), Vendor Billing (`/bill`), and Cashier Register (`/kasir`).
  - **Cashier (`kasir` / `123`, Access Level 2)**: Dedicated register checkout permissions on `/kasir` and billing records (`/bill`), automatically restricted from sensitive administrative financial ledgers and executive analytics.
- **Cashier POS Register (`/kasir`)**: Real-time line-item addition, cart quantity adjustments, automatic subtotal calculation, instant cash exchange computation, and modal printable invoice generation.
- **Inventory Stock & Barcode Engine (`/stock-barang`)**: SKU catalog tracking, dynamic SVG barcode generation powered by JsBarcode (`JsBarcode("#barcode" + id)`), dual-store location filtering (Store 1 & Store 2), and stock limit thresholds (`< 5` low-stock alert and `>= 5` safe inventory).
- **Financial Profit Margin Reports (`/finance`)**: Real-time calculation of gross revenue, volume tallying of sold items via regex transaction parsing, customizable date-range filtering (`tgldari` & `tglsampai`), and store-level breakdown.
- **Vendor Billing & Invoices (`/bill`)**: Accounts payable ledger tracking vendor invoices, due dates (`dueDate`), person in charge (PIC), payment statuses (`Lunas` / `Belum Lunas`), balance remainders (`nominalMinus`), and search filters.
- **Executive Analytics Dashboard (`/dashboard`)**: Daily gross revenue summaries, transaction volume count, store switcher, and active inventory status cards.
- **Atomic Invoicing & Sequence Generator**: Auto-incrementing numerical identifier sequence collection (`DatabaseSequence`) utilizing MongoDB `findAndModify` operations for consistent transactional concurrency across transactions, stock, and bills.
- **Bootstrap Database Seeding (`/seed`)**: Development endpoint to initialize default admin (`hamam`), cashier (`kasir`), electronic product stock catalog, and vendor billing records.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Backend Framework** | Spring Boot `3.2.4` | Application runtime, inversion of control, and Spring MVC controllers |
| **Language** | Java `17` LTS | Object-oriented business logic, records, and service layer implementations |
| **Database** | MongoDB `7.0` | NoSQL document database for catalog records, historical invoices, and atomic sequences |
| **Data Access** | Spring Data MongoDB | Repository abstractions and custom aggregation queries |
| **UI Rendering** | Thymeleaf `3.x` | Server-rendered HTML templates with dynamic model binding |
| **Theme & UI** | Soft UI Dashboard (Bootstrap 5) | Creative Tim dashboard interface, responsive tables, and card layouts |
| **Iconography & Fonts** | Font Awesome 6.7.2 & Inter Font | Vector icons and modern typography via Google Fonts & CDNJS |
| **Barcode Generator** | JsBarcode `3.11.5` | Client-side SVG barcode generation per item identifier |
| **Productivity** | Project Lombok | Eliminates boilerplate getters, setters, and constructors |
| **Containerization** | Docker & Docker Compose | Multi-stage production container build and MongoDB container orchestration |
| **Build System** | Apache Maven `3.9` | Dependency resolution, testing, and executable JAR packaging via `./mvnw` |

---

## Database Architecture

Simpos utilizes MongoDB for flexible document storage with atomic sequence counters. Data is structured across 6 primary collections (`com.primaelectronic.pos.model`):

```json
// 1. user — User accounts & store assignment
{
  "_id": 1,
  "username": "hamam",
  "password": "123",
  "access": 1,              // 1: Admin, 2: Cashier
  "store": 1
}

// 2. stock — Product catalog & inventory
{
  "_id": 1,
  "name": "Samsung Galaxy S23",
  "qty": 10,
  "priceInit": 12000000.0,   // Purchase price
  "priceFinal": 13000000.0,  // Retail selling price
  "store": 1,
  "pic": "admin",
  "createdAt": "2026-11-17T10:00:00",
  "modifiedAt": "2026-11-17T10:00:00",
  "modifiedBy": "admin"
}

// 3. transaction — POS checkout records
{
  "_id": 1,
  "date": "2026-11-17T10:15:00",
  "amount": 1,
  "product": "Samsung Galaxy S23",
  "userId": "kasir",
  "toko": 1,
  "payment": "CASH"
}

// 4. invoice — Sales receipts with printable HTML
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

// 5. bill — Accounts payable vendor invoices
{
  "_id": 1,
  "nama": "Supplier Elektronik Jaya",
  "nominal": "50000000",
  "ket": "Pengadaan Stok Smartphone Batch 1",
  "pic": "Widi Firmansyah",
  "status": 1,               // 1: Lunas, 0: Belum Lunas
  "nominalMinus": 0,
  "dueDate": "2026-12-01",
  "createdAt": "2026-11-17",
  "createdBy": "hamam"
}

// 6. database_sequences — Auto-increment identifier counter
{
  "_id": "stock_sequence",
  "seq": 4
}
```

---

## Project Structure

```bash
/
├── src/
│   ├── main/
│   │   ├── java/com/primaelectronic/pos/
│   │   │   ├── config/          # MongoConfig & custom converter beans
│   │   │   ├── controller/      # Auth, Bill, Stock, Transaction, View, and Seed controllers
│   │   │   ├── model/           # Bill, Invoice, Stock, Transaction, User, DatabaseSequence documents
│   │   │   ├── payload/         # TransactionItemDTO and TransactionRequest DTOs
│   │   │   ├── repository/      # Spring Data Mongo repositories
│   │   │   ├── service/         # Stock, Bill, Transaction, and Sequence business logic
│   │   │   └── PosApplication.java
│   │   └── resources/
│   │       ├── static/          # CSS, JS, fonts, and Soft UI dashboard assets
│   │       ├── templates/       # Thymeleaf HTML view templates (dashboard, kasir, stock, finance, bill)
│   │       └── application.properties
│   └── test/                    # Spring Boot integration and unit tests
├── screenshots/                 # Authentic MacBook Pro M4 & iPhone 16 Pro showcase mockups
├── Dockerfile                   # Multi-stage container build definition
├── compose.yaml                 # Docker Compose multi-service definition
├── pom.xml                      # Maven build definition
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

- **Java Development Kit (JDK)**: Version 17 or higher
- **Docker**: Version 20.10+ (for running MongoDB in a single container)
- **Apache Maven**: Version 3.8+ (or use the included `./mvnw` wrapper)

### Method 1: Single Container MongoDB + Local Maven (Recommended)

#### 1. Start MongoDB via Single Docker Container

Run a lightweight MongoDB container in a single command:

```bash
docker run -d \
  --name simpos-mongo \
  -p 27017:27017 \
  -v mongo_data:/data/db \
  mongo:7.0
```

#### 2. Configure Settings (Optional)

Verify database connection settings in `src/main/resources/application.properties`:

```properties
spring.application.name=Simpos
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=primaelectronic
server.port=8081
```

#### 3. Build & Run Application

```bash
# Clone the repository
git clone https://github.com/widifirmaan/springboot-simple-pos.git
cd springboot-simple-pos

# Run using Maven wrapper
./mvnw clean spring-boot:run
```

#### 4. Seed Database & Access Application

Trigger the seeder to populate default accounts and catalog items (see [Database Seeding](#database-seeding--demo-credentials) below):

```bash
curl -X GET http://localhost:8081/seed
```

Then navigate to `http://localhost:8081/` in your browser.

---

### Method 2: Full Docker Deployment (App + MongoDB)

To run the complete stack including the Spring Boot application and MongoDB via Docker:

```bash
# Build and start all services
docker compose up -d

# Check running containers
docker compose ps

# Seed the database
curl -X GET http://localhost:8081/seed
```

The application will be accessible at `http://localhost:8081/`.

---

### Database Seeding & Demo Credentials

Simpos includes a built-in bootstrap seeder endpoint (`/seed`) that creates required user roles, resets passwords, and populates the initial electronics catalog.

#### 1. Trigger the Seeder

Execute the seeder via terminal (`curl`) or directly in your browser:

```bash
# Trigger via cURL:
curl -X GET http://localhost:8081/seed

# Expected Output:
# Admin user created (hamam/123). <br/>Kasir user created (kasir/123). <br/>Dummy stocks created. <br/>Dummy bills created. <br/>
```

Or open in your web browser: `http://localhost:8081/seed`.

#### 2. Default Demo Accounts

| Role | Username | Password | Access Level | Default Route | Accessible Modules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Administrator** | `hamam` | `123` | Level 1 | `/dashboard` | Dashboard, Stock Barang, Keuangan, Tagihan, Kasir |
| **Cashier (Kasir)** | `kasir` | `123` | Level 2 | `/kasir` | Kasir POS Register, Tagihan Sales |

#### 3. Pre-Seeded Inventory Items

| Item ID | Product Name | Stock Qty | Purchase Price (Init) | Selling Price (Final) | Store ID |
| :---: | :--- | :---: | :---: | :---: | :---: |
| `1` | Samsung Galaxy S23 | 10 | Rp 12.000.000 | Rp 13.000.000 | Toko 1 |
| `2` | iPhone 15 Pro | 5 | Rp 18.000.000 | Rp 19.500.000 | Toko 1 |
| `3` | Xiaomi Redmi Note 12 | 20 | Rp 2.500.000 | Rp 2.800.000 | Toko 1 |
| `4` | Laptop Asus ROG | 3 | Rp 15.000.000 | Rp 16.500.000 | Toko 1 |

---

### 5. Panduan Uji Manual (Testing Checklist)

Lakukan verifikasi manual berikut di browser:

| No | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Database Seeder** | Akses `GET http://localhost:8081/seed` | Muncul pesan sukses: admin, kasir, dummy stocks, dan dummy bills terbuat |
| 2 | **Login Administrator** | Buka `/login`, login dengan `hamam` / `123` | Dialihkan otomatis ke executive dashboard `/dashboard` |
| 3 | **Katalog Stok & Barcode** | Buka menu `/stock-barang` | Menampilkan 4 produk elektronik dengan SVG barcode yang digenerate oleh JsBarcode |
| 4 | **Transaksi Kasir (POS)** | Buka `/kasir`, pilih produk, masukkan nominal bayar, submit | Transaksi sukses, kembalian terhitung, dan modal nota cetak (invoice) tampil |
| 5 | **Vendor Billing** | Buka `/bill` | Tampil daftar tagihan supplier dengan status pembayaran (*Lunas* / *Belum Lunas*) |
| 6 | **Role Cashier Isolation** | Logout, login dengan `kasir` / `123` | Otomatis diarahkan ke `/kasir`; akses ke data finansial sensitif `/finance` dibatasi |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
