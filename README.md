# Simpos

> Retail point-of-sale (POS) and inventory management web application built with Spring Boot 3, MongoDB, and Thymeleaf.

[![Engine](https://img.shields.io/badge/Spring_Boot-3.2.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17_LTS-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Database](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Template Engine](https://img.shields.io/badge/Thymeleaf-3-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)](https://www.thymeleaf.org/)
[![Container](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Build Tool](https://img.shields.io/badge/Maven-3.9-C71A36?style=flat-square&logo=apachemaven&logoColor=white)](https://maven.apache.org/)

---

## Live URL

- **Deployment Mode**: On-premise / local deployment powered by Java Spring Boot and MongoDB.
- **Local URL**: [http://localhost:8081](http://localhost:8081)

---

## Screenshots

### Authentication & Public Catalog

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Authentication Gateway (Role-Based)**<br>![POS Login Screen Desktop](screenshots/POS%20Login%20Screen%20Desktop.png) | **Authentication Gateway (Role-Based)**<br>![POS Login Screen Mobile](screenshots/POS%20Login%20Screen%20Mobile.png) |
| **Invalid Credential Warning (Inline Alert)**<br>![POS Login Alert Invalid Credentials Desktop](screenshots/POS%20Login%20Alert%20Invalid%20Credentials%20Desktop.png) | **Invalid Credential Warning (Inline Alert)**<br>![POS Login Alert Invalid Credentials Mobile](screenshots/POS%20Login%20Alert%20Invalid%20Credentials%20Mobile.png) |
| **Public Product Catalog (Unauthenticated)**<br>![POS Public Stock Catalog Desktop](screenshots/POS%20Public%20Stock%20Catalog%20Desktop.png) | **Public Product Catalog (Unauthenticated)**<br>![POS Public Stock Catalog Mobile](screenshots/POS%20Public%20Stock%20Catalog%20Mobile.png) |

---

### Cashier Register & Checkout Terminal (`/kasir`)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Cashier Terminal & Change Calculation**<br>![POS Cashier Terminal Desktop](screenshots/POS%20Cashier%20Terminal%20Desktop.png) | **Cashier Terminal & Change Calculation**<br>![POS Cashier Terminal Mobile](screenshots/POS%20Cashier%20Terminal%20Mobile.png) |
| **Cashier Cart & Checkout Summary**<br>![POS Cashier Checkout Summary Desktop](screenshots/POS%20Cashier%20Checkout%20Summary%20Desktop.png) | **Cashier Cart & Checkout Summary**<br>![POS Cashier Checkout Summary Mobile](screenshots/POS%20Cashier%20Checkout%20Summary%20Mobile.png) |
| **Printable Sales Receipt**<br>![POS Cashier Receipt Desktop](screenshots/POS%20Cashier%20Receipt%20Desktop.png) | **Printable Sales Receipt**<br>![POS Cashier Receipt Mobile](screenshots/POS%20Cashier%20Receipt%20Mobile.png) |

---

### Executive Analytics & Dashboard (`/dashboard`)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Executive Operations Dashboard**<br>![POS Analytics Dashboard Desktop](screenshots/POS%20Analytics%20Dashboard%20Desktop.png) | **Executive Operations Dashboard**<br>![POS Analytics Dashboard Mobile](screenshots/POS%20Analytics%20Dashboard%20Mobile.png) |
| **Transaction Payment Confirmation (Modal)**<br>![POS Dashboard Modal Payment Confirmation Desktop](screenshots/POS%20Dashboard%20Modal%20Payment%20Confirmation%20Desktop.png) | **Transaction Payment Confirmation (Modal)**<br>![POS Dashboard Modal Payment Confirmation Mobile](screenshots/POS%20Dashboard%20Modal%20Payment%20Confirmation%20Mobile.png) |

---

### Product Inventory & Barcode Management (`/stock-barang`)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Product Inventory & SVG Barcodes**<br>![POS Stock Inventory Catalog Desktop](screenshots/POS%20Stock%20Inventory%20Catalog%20Desktop.png) | **Product Inventory & SVG Barcodes**<br>![POS Stock Inventory Catalog Mobile](screenshots/POS%20Stock%20Inventory%20Catalog%20Mobile.png) |
| **Product Registration (Add Item Modal)**<br>![POS Stock Modal Add Item Desktop](screenshots/POS%20Stock%20Modal%20Add%20Item%20Desktop.png) | **Product Registration (Add Item Modal)**<br>![POS Stock Modal Add Item Mobile](screenshots/POS%20Stock%20Modal%20Add%20Item%20Mobile.png) |
| **Product Record Amendment (Edit Item Modal)**<br>![POS Stock Modal Edit Item Desktop](screenshots/POS%20Stock%20Modal%20Edit%20Item%20Desktop.png) | **Product Record Amendment (Edit Item Modal)**<br>![POS Stock Modal Edit Item Mobile](screenshots/POS%20Stock%20Modal%20Edit%20Item%20Mobile.png) |
| **Product Removal Gate (Delete Confirmation)**<br>![POS Stock Modal Delete Confirmation Desktop](screenshots/POS%20Stock%20Modal%20Delete%20Confirmation%20Desktop.png) | **Product Removal Gate (Delete Confirmation)**<br>![POS Stock Modal Delete Confirmation Mobile](screenshots/POS%20Stock%20Modal%20Delete%20Confirmation%20Mobile.png) |

---

### Financial Ledger & Vendor Payables (`/finance`, `/bill`)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Financial Ledger & Gross Profit Reports**<br>![POS Finance Profit Ledger Desktop](screenshots/POS%20Finance%20Profit%20Ledger%20Desktop.png) | **Financial Ledger & Gross Profit Reports**<br>![POS Finance Profit Ledger Mobile](screenshots/POS%20Finance%20Profit%20Ledger%20Mobile.png) |
| **Transaction Print Confirmation (Modal)**<br>![POS Finance Modal Print Confirmation Desktop](screenshots/POS%20Finance%20Modal%20Print%20Confirmation%20Desktop.png) | **Transaction Print Confirmation (Modal)**<br>![POS Finance Modal Print Confirmation Mobile](screenshots/POS%20Finance%20Modal%20Print%20Confirmation%20Mobile.png) |
| **Ledger Transaction Amendment (Edit Modal)**<br>![POS Finance Modal Edit Transaction Desktop](screenshots/POS%20Finance%20Modal%20Edit%20Transaction%20Desktop.png) | **Ledger Transaction Amendment (Edit Modal)**<br>![POS Finance Modal Edit Transaction Mobile](screenshots/POS%20Finance%20Modal%20Edit%20Transaction%20Mobile.png) |
| **Accounts Payable & Vendor Billing**<br>![POS Vendor Bills Table Desktop](screenshots/POS%20Vendor%20Bills%20Table%20Desktop.png) | **Accounts Payable & Vendor Billing**<br>![POS Vendor Bills Table Mobile](screenshots/POS%20Vendor%20Bills%20Table%20Mobile.png) |
| **Vendor Invoice Registration (Add Bill Modal)**<br>![POS Bill Modal Add Bill Desktop](screenshots/POS%20Bill%20Modal%20Add%20Bill%20Desktop.png) | **Vendor Invoice Registration (Add Bill Modal)**<br>![POS Bill Modal Add Bill Mobile](screenshots/POS%20Bill%20Modal%20Add%20Bill%20Mobile.png) |
| **Vendor Invoice Amendment (Edit Bill Modal)**<br>![POS Bill Modal Edit Bill Desktop](screenshots/POS%20Bill%20Modal%20Edit%20Bill%20Desktop.png) | **Vendor Invoice Amendment (Edit Bill Modal)**<br>![POS Bill Modal Edit Bill Mobile](screenshots/POS%20Bill%20Modal%20Edit%20Bill%20Mobile.png) |

---

## Fitur

- **Role-Based Access Control (`/login`, `/`)**:
  - **Administrator (`hamam` / `123`, Access Level 1)**: Full access across executive Analytics Dashboard (`/dashboard`), Product Inventory (`/stock-barang`), Financial Ledger (`/finance`), Vendor Invoices (`/bill`), and Cashier Terminal (`/kasir`).
  - **Cashier (`kasir` / `123`, Access Level 2)**: Operational permissions for register checkout (`/kasir`), product stock catalog, and vendor billing entries. Non-admin users attempting to access `/dashboard` are automatically redirected to `/kasir`.
- **Cashier POS Register (`/kasir`)**: Real-time line-item addition, cart quantity adjustments, automatic subtotal calculation, instant cash change computation, and printable HTML receipt generation.
- **Inventory Stock & Barcode Engine (`/stock-barang`)**: Product SKU catalog tracking, purchase vs retail prices, dynamic SVG barcode generation powered by JsBarcode, dual-store location filtering (Store 1 & Store 2), and stock status alert pills.
- **Financial Profit Margin Reports (`/finance`)**: Real-time gross profit calculation, volume count of sold items, customizable date range filtering (`tgldari` & `tglsampai`), and 1-click Excel report export.
- **Accounts Payable Ledger (`/bill`)**: Vendor invoice tracking, due dates, payment status tags (*Lunas* / *Belum Dibayar* / *Belum Lunas*), and outstanding balance remainders.
- **Atomic Sequence Generator**: Incremental sequence counter collection (`database_sequences`) utilizing MongoDB `findAndModify` operations for collision-free transactional invoice numbers.
- **Database Seeder (`/seed`)**: Built-in HTTP endpoint to bootstrap demo administrator and cashier accounts, sample electronic products, and vendor billing records.

---

## Tech Stack

| Category | Technology | Description / Purpose |
| :--- | :--- | :--- |
| **Backend Framework** | Spring Boot `3.2.4` | Enterprise MVC application framework, inversion of control, and dependency injection |
| **Programming Language** | Java `17` LTS | Object-oriented business logic, records, and service layer implementations |
| **Database** | MongoDB `7.0` | NoSQL document database for product catalog, sales invoices, and atomic sequences |
| **Data Access** | Spring Data MongoDB | Repository abstractions and custom aggregation queries |
| **Template Engine** | Thymeleaf `3.x` | Server-side HTML template rendering with dynamic model binding |
| **UI & Theme** | Soft UI Dashboard (Bootstrap 5) | Responsive dashboard interface with card layouts and data tables |
| **Barcode Generator** | JsBarcode `3.11.5` | Client-side SVG barcode rendering per product identifier |
| **Productivity** | Project Lombok | Eliminates boilerplate getters, setters, and constructors in domain models |
| **Build System** | Apache Maven Wrapper (`./mvnw`) | Dependency management and executable JAR compilation |
| **Containerization** | Docker | Container runtime for local MongoDB instance |

## Tutorial Run Local & Setup

### 1. Prerequisites

- **Java Development Kit (JDK)**: Version `17` LTS (OpenJDK or Oracle JDK)
- **Docker**: For running a local MongoDB instance
- **Apache Maven**: Provided via the bundled Maven Wrapper (`./mvnw`)

### 2. Configuration & Environment

Database connection settings are configured in `src/main/resources/application.properties`:

```properties
spring.application.name=Simpos
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=simpos
server.port=8081
```

### 3. Database Architecture & Local MongoDB

Simpos structures data across 6 primary MongoDB document collections (`com.primaelectronic.pos.model`):

```json
// 1. user — User accounts and store assignment
{
  "_id": 1,
  "username": "hamam",
  "password": "123",
  "access": 1,              // 1: Admin, 2: Cashier
  "store": 1
}

// 2. stock — Product catalog and inventory
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

// 3. transaction — Cashier checkout records
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
  "status": 1,               // 1: Lunas, 2: Belum Dibayar, 3: Belum Lunas
  "nominalMinus": 0,
  "dueDate": "2026-12-01",
  "createdAt": "2026-11-17",
  "createdBy": "hamam"
}

// 6. database_sequences — Atomic auto-increment counters
{
  "_id": "transaction_sequence",
  "seq": 1
}
```

Start a local MongoDB container via Docker:

```bash
docker run -d --name simpos-mongo -p 27017:27017 mongo:7.0
```

### 4. Running the Spring Boot Application

```bash
# Clone the repository
git clone https://github.com/widifirmaan/springboot-simple-pos.git
cd springboot-simple-pos

# Run application using Maven Wrapper
./mvnw spring-boot:run
```

The server starts on port `8081`. Open [http://localhost:8081](http://localhost:8081) in your browser.

### 5. Seeding Demo Data & Auth Credentials

Once the server is running, trigger database seeding via browser or curl:

```bash
curl http://localhost:8081/seed
```

#### Pre-seeded Demo Accounts:
- **Administrator**: Username `hamam` / Password `123` (Full access to all modules)
- **Cashier**: Username `kasir` / Password `123` (Access to cashier terminal and bills)

---

## Author

Made with ❤️ by **Widi Firmansyah** / [widifirmaan.web.id](https://widifirmaan.web.id)
