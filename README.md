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

| Desktop | Mobile |
| :---: | :---: |
| **Authentication Gateway (Role-Based)**<br>![Login](screenshots/Login%20Desktop.png) | **Authentication Gateway (Role-Based)**<br>![Login](screenshots/Login%20Mobile.png) |
| **Executive Operations Dashboard**<br>![Dashboard](screenshots/Dashboard%20Desktop.png) | **Executive Operations Dashboard**<br>![Dashboard](screenshots/Dashboard%20Mobile.png) |
| **Cashier Terminal & Change Calculation**<br>![Kasir](screenshots/Kasir%20Desktop.png) | **Cashier Terminal & Change Calculation**<br>![Kasir](screenshots/Kasir%20Mobile.png) |
| **Product Inventory & SVG Barcodes**<br>![Stok Barang](screenshots/Stok%20Barang%20Desktop.png) | **Product Inventory & SVG Barcodes**<br>![Stok Barang](screenshots/Stok%20Barang%20Mobile.png) |
| **Accounts Payable & Vendor Billing**<br>![Tagihan](screenshots/Tagihan%20Desktop.png) | **Accounts Payable & Vendor Billing**<br>![Tagihan](screenshots/Tagihan%20Mobile.png) |
| **Financial Ledger & Gross Profit Reports**<br>![Keuangan](screenshots/Keuangan%20Desktop.png) | **Financial Ledger & Gross Profit Reports**<br>![Keuangan](screenshots/Keuangan%20Mobile.png) |

---

## Features

- **Role-Based Access Control (`/login`, `/`)**:
  - **Administrator (`hamam` / `123`, Access Level 1)**: Full permissions across executive Analytics Dashboard (`/dashboard`), Product Inventory (`/stock-barang`), Financial Ledger (`/finance`), Vendor Invoices (`/bill`), and Cashier Terminal (`/kasir`).
  - **Cashier (`kasir` / `123`, Access Level 2)**: Operational permissions for register checkout (`/kasir`) and bill entries, automatically restricted from viewing executive financial profit margins and revenue analytics.
- **Cashier POS Register (`/kasir`)**: Real-time line-item addition, cart quantity adjustments, automatic subtotal calculation, instant cash change computation, and printable HTML receipt generation.
- **Inventory Stock & Barcode Engine (`/stock-barang`)**: Product SKU catalog tracking, purchase vs retail prices, dynamic SVG barcode generation powered by JsBarcode, dual-store location filtering (Store 1 & Store 2), and stock status alert pills.
- **Financial Profit Margin Reports (`/finance`)**: Real-time gross profit calculation, volume count of sold items, customizable date range filtering (`tgldari` & `tglsampai`), and 1-click Excel report export.
- **Accounts Payable Ledger (`/bill`)**: Vendor invoice tracking, due dates, payment status tags (*Lunas* / *Belum Dibayar*), and outstanding balance remainders.
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

---

## Database Architecture

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
  "status": 1,               // 1: Lunas, 0: Belum Dibayar
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

---

## Local Setup & Deployment

### 1. Prerequisites

- **Java Development Kit (JDK)**: Version `17` LTS (OpenJDK or Oracle JDK)
- **Docker**: For running a local MongoDB instance
- **Apache Maven**: Provided via the bundled Maven Wrapper (`./mvnw`)

### 2. Configuration & Environment

Database connection settings are configured in `src/main/resources/application.properties`:

```properties
spring.application.name=simpos
server.port=8081
spring.data.mongodb.uri=mongodb://localhost:27017/simpos
spring.data.mongodb.database=simpos
```

### 3. Running Local MongoDB Database

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

### 5. Seeding Demo Data

Once the server is running, trigger database seeding via browser or curl:

```bash
curl http://localhost:8081/seed
```

#### Pre-seeded Demo Accounts:
- **Administrator**: Username `hamam` / Password `123` (Full access to all modules)
- **Cashier**: Username `kasir` / Password `123` (Access to cashier terminal and bills)

### 6. Manual Testing Checklist

| No | Feature | Test Steps | Expected Result |
| :---: | :--- | :--- | :--- |
| 1 | **Admin Login** | Open `http://localhost:8081`, login with `hamam` / `123` | Authentication succeeds and redirects to Revenue Dashboard (`/dashboard`) |
| 2 | **Inventory Catalog** | Navigate to `/stock-barang` | Displays products with barcodes, retail prices, and stock status badges |
| 3 | **Add New Product** | Click *Tambah Barang*, fill in product details and stock, submit | Product appears in the table with an automatically generated SVG barcode |
| 4 | **Cashier Checkout** | Open `/kasir`, enter customer name, select items, enter cash paid, submit | Receipt generates, item stock decrements accordingly, and change is computed accurately |
| 5 | **Vendor Billing** | Navigate to `/bill` | Displays accounts payable records with status pills and edit modals |
| 6 | **Financial Reports** | Navigate to `/finance`, select date range, click *Cari* | Calculates gross revenue, sold item count, and gross profit margins |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
