# Simpos

> Lightweight Spring Boot 3 & MongoDB point-of-sale system for retail electronics and inventory tracking.

Simpos is an enterprise-grade retail POS system engineered for electronics hardware merchants. Built with Spring Boot 3 and MongoDB, it provides real-time barcode product search, multi-item checkout, automated sequential invoice generation, inventory tracking, profit margin calculations, and printable receipt slips.

[![Engine](https://img.shields.io/badge/Spring_Boot-3.2.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Database](https://img.shields.io/badge/MongoDB-Reactive_Data-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Template Engine](https://img.shields.io/badge/Thymeleaf-3-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)](https://www.thymeleaf.org/)
[![Build Tool](https://img.shields.io/badge/Maven-3.9-C71A36?style=flat-square&logo=apachemaven&logoColor=white)](https://maven.apache.org/)

---

## Showcase

| Desktop Interface (MacBook Pro M4) | Feature Overview |
| :---: | :--- |
| ![Cashier POS Register](screenshots/POS%20Cashier%20Desktop.png) | **Cashier POS Register (`/kasir`)**<br>Interactive item selection, cart quantity adjusters, automated total calculation, and instant payment change computation. |
| ![Analytics Dashboard](screenshots/POS%20Dashboard%20Desktop.png) | **Analytics Dashboard (`/dashboard`)**<br>High-level revenue tracking, daily order velocity, total processed invoices, and active product inventory counts. |
| ![Inventory & Stock Manager](screenshots/Stock%20Inventory%20Desktop.png) | **Inventory & Stock Manager (`/stock`)**<br>SKU-level stock tracking, item unit pricing, low-stock threshold alerts, and supplier catalog records. |
| ![Financial Ledger & Profit](screenshots/Finance%20Profit%20Desktop.png) | **Financial Ledger & Profit (`/finance`)**<br>Gross revenue versus item cost analysis, calculated net profit margins, and daily transaction history. |
| ![Receipt Slip & Bill Invoice](screenshots/Bill%20Receipt%20Desktop.png) | **Receipt Slip & Bill Invoice (`/bill`)**<br>Thermal receipt view formatted with sequential transaction codes, item breakdown, tax calculations, and print dialog. |
| ![Authentication & Gate](screenshots/Login%20Screen%20Desktop.png) | **Authentication & Gate (`/login`)**<br>Secure role-based authentication protecting register workflows, ledger audits, and administrative stock mutations. |

---

## Features

- **High-Throughput Cashier POS (`/kasir`)**: Real-time cart calculations, keyboard-friendly SKU search, dynamic line-item addition/deletion, and cash exchange calculation.
- **Zero-Collision Sequential Invoicing**: Atomic sequential order numbers and invoice code generation backed by MongoDB sequence collections with `findAndModify` (`SequenceGeneratorService`).
- **Real-Time Stock Depletion Pipeline**: Every completed transaction automatically decrements SKU inventory levels with transactional consistency and out-of-stock validation.
- **Automated Financial Margin Computations (`/finance`)**: Real-time calculation of gross revenue, wholesale cost of goods sold (COGS), and merchant net profit percentages.
- **Printable Thermal Bill Receipts (`/bill`)**: Dedicated CSS print styles formatted specifically for standard 58mm and 80mm point-of-sale thermal printers.
- **Interactive Soft UI Telemetry Dashboard (`/dashboard`)**: Creative Tim dashboard theme with Chart.js monthly sales trend charts, gross order summaries, and stock metrics.
- **Automated Database Seeding Endpoint (`/seed`)**: Pre-configured bootstrap controller seeding sample electronics inventory, categories, and test user credentials.
- **Role-Based Authentication (`/login`)**: Session-based security gate protecting register checkout, financial ledger audits, and administrative inventory mutations.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Framework** | Spring Boot `3.2.4` | Backend application runtime, dependency injection, and MVC architecture |
| **Language** | Java `17` LTS | Strict object-oriented typings, modern records, and switch pattern matching |
| **Database** | MongoDB | Document database for catalog records, historical invoices, and atomic sequences |
| **Data Access** | Spring Data MongoDB | Repository abstractions and custom aggregation queries |
| **UI Rendering** | Thymeleaf `3.x` | Server-rendered HTML templates with dynamic model binding |
| **Productivity** | Project Lombok | Eliminates boilerplate getters, setters, and constructors |
| **Build System** | Apache Maven `3.9` | Dependency resolution, test execution, and executable JAR packaging |

---

## Project Structure

```bash
/
├── src/
│   ├── main/
│   │   ├── java/com/primaelectronic/pos/
│   │   │   ├── config/          # MongoConfig & custom converter beans
│   │   │   ├── controller/      # Auth, Bill, Stock, Transaction, and View controllers
│   │   │   ├── model/           # Bill, Invoice, Stock, Transaction, User documents
│   │   │   ├── payload/         # TransactionItemDTO and TransactionRequest DTOs
│   │   │   ├── repository/      # Spring Data Mongo repositories
│   │   │   ├── service/         # Stock, Bill, Transaction, and Sequence business logic
│   │   │   └── PosApplication.java
│   │   └── resources/
│   │       ├── static/          # CSS, JS, and vendor dashboard assets
│   │       ├── templates/       # Thymeleaf HTML view templates
│   │       └── application.properties
│   └── test/                    # Spring Boot integration and unit tests
├── screenshots/                 # MacBook Pro M4 showcase mockups
├── pom.xml                      # Maven build definition
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

- **Java Development Kit (JDK)**: Version 17 or higher
- **Apache Maven**: Version 3.8+ (or use `./mvnw`)
- **MongoDB**: Version 5.0+ running locally or a MongoDB Atlas URI

### Installation & Setup

> **Environment Variables:** Configure your MongoDB connection string in `src/main/resources/application.properties` before launching the application.

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/springboot-simple-pos.git
cd springboot-simple-pos

# 2. Configure MongoDB connection in src/main/resources/application.properties:
# spring.data.mongodb.uri=mongodb://localhost:27017/pos_db
# server.port=8080

# 3. Build and run application via Maven
mvn clean spring-boot:run
```

Open [http://localhost:8080/](http://localhost:8080/) in your web browser. A seed endpoint is available at `/seed` to populate initial demo catalog items.

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
