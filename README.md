# Simpos

Retail point-of-sale and multi-store inventory management web application built with Spring Boot 3, MongoDB, and Thymeleaf.

![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-17_LTS-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.x-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)

## Features

- **Session Authentication & Store Switching (`/`, `/login`)**:
  - **Administrator (`hamam` / `123`, `access = 1`)**: Access to executive analytics and cashier checkout (`/dashboard`), stock catalog (`/stock-barang`), financial ledger (`/finance`), and vendor bills (`/bill`).
  - **Cashier (`kasir` / `123`, `access = 2`)**: Redirected from `/` or `/dashboard` to the dedicated register (`/kasir`), with access to stock catalog, finance, and vendor bills plus active branch switching (`Toko 1`, `Toko 2`, `Toko 3`).
- **Cashier Register & Barcode Scanning (`/kasir`, `/dashboard`)**: Product search by name/ID, camera barcode decoding via QuaggaJS (`0.12.1`), dynamic line-item cart totals, payment method selection (`CASH`, `QRIS`, `TRANSFER`), and printable receipt generation.
- **Inventory Stock & Barcode Labels (`/stock-barang`)**: Public read-only stock view when unauthenticated; full create/edit/delete CRUD when logged in, purchase vs selling price tracking, `Toko 1` to `Toko 3` branch filtering, low-stock filtering (`< 5` / `>= 5`), and SVG barcode generation with JsBarcode (`3.11.5`).
- **Financial Ledger & Excel Export (`/finance`)**: Gross revenue and unit sales summary, date-range and branch filters (`tgldari`, `tglsampai`, `pilihtoko`), recent saved HTML invoices, transaction editing/printing, and `.xlsx` export via SheetJS (`0.20.3`).
- **Accounts Payable Ledger (`/bill`)**: Supplier bill CRUD with live search, payment status badges (`Lunas`, `Belum Dibayar`, `Belum Lunas`), remaining balance (`nominalMinus`), due dates, and client-side compressed JPEG payment proof images.
- **Database Seeder (`/seed`)**: HTTP GET endpoint that creates or resets demo user credentials and seeds sample products and vendor bills when collections are empty.

## Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Backend** | Spring Boot `3.2.4` / Java `17` | MVC routing, REST APIs, and service layer |
| **Database** | MongoDB `7.0` + Spring Data MongoDB | Document persistence across 6 collections |
| **Templates & UI** | Thymeleaf + Soft UI Dashboard (Bootstrap 5) | Server-rendered dashboards and modals |
| **Client Libraries** | QuaggaJS `0.12.1`, JsBarcode `3.11.5`, SheetJS `0.20.3` | Camera barcode scanning, SVG barcodes, Excel export |
| **Containers** | Docker & Docker Compose | Local MongoDB container and containerized app build |

## Screenshots

### Authentication & Public Catalog

| Desktop | Mobile |
| :---: | :---: |
| **Login Screen**<br>![POS Login Screen Desktop](screenshots/POS%20Login%20Screen%20Desktop.png) | **Login Screen**<br>![POS Login Screen Mobile](screenshots/POS%20Login%20Screen%20Mobile.png) |
| **Invalid Credentials Alert**<br>![POS Login Alert Invalid Credentials Desktop](screenshots/POS%20Login%20Alert%20Invalid%20Credentials%20Desktop.png) | **Invalid Credentials Alert**<br>![POS Login Alert Invalid Credentials Mobile](screenshots/POS%20Login%20Alert%20Invalid%20Credentials%20Mobile.png) |
| **Public Stock Catalog (`/stock-barang`)**<br>![POS Public Stock Catalog Desktop](screenshots/POS%20Public%20Stock%20Catalog%20Desktop.png) | **Public Stock Catalog (`/stock-barang`)**<br>![POS Public Stock Catalog Mobile](screenshots/POS%20Public%20Stock%20Catalog%20Mobile.png) |

### Cashier Register (`/kasir`)

| Desktop | Mobile |
| :---: | :---: |
| **Cashier Terminal & Barcode Scanner**<br>![POS Cashier Terminal Desktop](screenshots/POS%20Cashier%20Terminal%20Desktop.png) | **Cashier Terminal & Barcode Scanner**<br>![POS Cashier Terminal Mobile](screenshots/POS%20Cashier%20Terminal%20Mobile.png) |
| **Cart & Checkout Summary**<br>![POS Cashier Checkout Summary Desktop](screenshots/POS%20Cashier%20Checkout%20Summary%20Desktop.png) | **Cart & Checkout Summary**<br>![POS Cashier Checkout Summary Mobile](screenshots/POS%20Cashier%20Checkout%20Summary%20Mobile.png) |
| **Printable Sales Receipt**<br>![POS Cashier Receipt Desktop](screenshots/POS%20Cashier%20Receipt%20Desktop.png) | **Printable Sales Receipt**<br>![POS Cashier Receipt Mobile](screenshots/POS%20Cashier%20Receipt%20Mobile.png) |

### Dashboard (`/dashboard`)

| Desktop | Mobile |
| :---: | :---: |
| **Operations Dashboard**<br>![POS Analytics Dashboard Desktop](screenshots/POS%20Analytics%20Dashboard%20Desktop.png) | **Operations Dashboard**<br>![POS Analytics Dashboard Mobile](screenshots/POS%20Analytics%20Dashboard%20Mobile.png) |
| **Payment Confirmation Modal**<br>![POS Dashboard Modal Payment Confirmation Desktop](screenshots/POS%20Dashboard%20Modal%20Payment%20Confirmation%20Desktop.png) | **Payment Confirmation Modal**<br>![POS Dashboard Modal Payment Confirmation Mobile](screenshots/POS%20Dashboard%20Modal%20Payment%20Confirmation%20Mobile.png) |

### Stock Management (`/stock-barang`)

| Desktop | Mobile |
| :---: | :---: |
| **Stock Catalog & SVG Barcodes**<br>![POS Stock Inventory Catalog Desktop](screenshots/POS%20Stock%20Inventory%20Catalog%20Desktop.png) | **Stock Catalog & SVG Barcodes**<br>![POS Stock Inventory Catalog Mobile](screenshots/POS%20Stock%20Inventory%20Catalog%20Mobile.png) |
| **Add Stock Item Modal**<br>![POS Stock Modal Add Item Desktop](screenshots/POS%20Stock%20Modal%20Add%20Item%20Desktop.png) | **Add Stock Item Modal**<br>![POS Stock Modal Add Item Mobile](screenshots/POS%20Stock%20Modal%20Add%20Item%20Mobile.png) |
| **Edit Stock Item Modal**<br>![POS Stock Modal Edit Item Desktop](screenshots/POS%20Stock%20Modal%20Edit%20Item%20Desktop.png) | **Edit Stock Item Modal**<br>![POS Stock Modal Edit Item Mobile](screenshots/POS%20Stock%20Modal%20Edit%20Item%20Mobile.png) |
| **Delete Stock Confirmation**<br>![POS Stock Modal Delete Confirmation Desktop](screenshots/POS%20Stock%20Modal%20Delete%20Confirmation%20Desktop.png) | **Delete Stock Confirmation**<br>![POS Stock Modal Delete Confirmation Mobile](screenshots/POS%20Stock%20Modal%20Delete%20Confirmation%20Mobile.png) |

### Financial Ledger & Vendor Bills (`/finance`, `/bill`)

| Desktop | Mobile |
| :---: | :---: |
| **Financial Ledger & Excel Export**<br>![POS Finance Profit Ledger Desktop](screenshots/POS%20Finance%20Profit%20Ledger%20Desktop.png) | **Financial Ledger & Excel Export**<br>![POS Finance Profit Ledger Mobile](screenshots/POS%20Finance%20Profit%20Ledger%20Mobile.png) |
| **Receipt Print Preview Modal**<br>![POS Finance Modal Print Confirmation Desktop](screenshots/POS%20Finance%20Modal%20Print%20Confirmation%20Desktop.png) | **Receipt Print Preview Modal**<br>![POS Finance Modal Print Confirmation Mobile](screenshots/POS%20Finance%20Modal%20Print%20Confirmation%20Mobile.png) |
| **Edit Transaction Modal**<br>![POS Finance Modal Edit Transaction Desktop](screenshots/POS%20Finance%20Modal%20Edit%20Transaction%20Desktop.png) | **Edit Transaction Modal**<br>![POS Finance Modal Edit Transaction Mobile](screenshots/POS%20Finance%20Modal%20Edit%20Transaction%20Mobile.png) |
| **Vendor Bills Table**<br>![POS Vendor Bills Table Desktop](screenshots/POS%20Vendor%20Bills%20Table%20Desktop.png) | **Vendor Bills Table**<br>![POS Vendor Bills Table Mobile](screenshots/POS%20Vendor%20Bills%20Table%20Mobile.png) |
| **Add Vendor Bill Modal**<br>![POS Bill Modal Add Bill Desktop](screenshots/POS%20Bill%20Modal%20Add%20Bill%20Desktop.png) | **Add Vendor Bill Modal**<br>![POS Bill Modal Add Bill Mobile](screenshots/POS%20Bill%20Modal%20Add%20Bill%20Mobile.png) |
| **Edit Vendor Bill Modal**<br>![POS Bill Modal Edit Bill Desktop](screenshots/POS%20Bill%20Modal%20Edit%20Bill%20Desktop.png) | **Edit Vendor Bill Modal**<br>![POS Bill Modal Edit Bill Mobile](screenshots/POS%20Bill%20Modal%20Edit%20Bill%20Mobile.png) |

## Local Setup

### Prerequisites

- **Java Development Kit (JDK)** `17` LTS
- **Docker** (or a local **MongoDB `7.0`** instance on port `27017`)
- **Maven Wrapper** (`./mvnw`, included in this repository)

### Quick Start

1. **Start MongoDB**

   ```bash
   docker run -d --name simpos-mongo -p 27017:27017 mongo:7.0
   ```

   Alternatively, run both services together via Docker Compose (`app` + `mongodb` using database `simpos`):

   ```bash
   docker compose up --build
   ```

   Default local settings live in `src/main/resources/application.properties` (`spring.data.mongodb.host=localhost`, `spring.data.mongodb.port=27017`, `spring.data.mongodb.database=simpos`, `server.port=8081`).

2. **Clone and start the Spring Boot application**

   ```bash
   git clone https://github.com/widifirmaan/springboot-simple-pos.git
   cd springboot-simple-pos
   ./mvnw spring-boot:run
   ```

3. **Seed demo data and open the application**

   ```bash
   curl http://localhost:8081/seed
   ```

   Visit `http://localhost:8081` in your browser. Collections seeded in MongoDB (`simpos`) include `user`, `stock`, `transaction`, `invoice`, `bill`, and atomic sequence counters in `database_sequences`. Checkout processing (`POST /api/transactions/process`) pre-validates cart quantities and available stock before updating `stock`, `invoice`, and `transaction` documents, with compensating rollback if an error occurs on standalone MongoDB instances (multi-document MongoDB transactions require a replica set).

### Demo Credentials

| Role | Username | Password | Default Landing Route |
| :--- | :--- | :--- | :--- |
| **Administrator (`access = 1`)** | `hamam` | `123` | `/dashboard` |
| **Cashier (`access = 2`)** | `kasir` | `123` | `/kasir` |

## Author

**Widi Firmansyah** · [widifirmaan.web.id](https://widifirmaan.web.id)
