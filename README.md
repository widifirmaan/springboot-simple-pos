# Simpos

> Lightweight Spring Boot 3 & MongoDB point-of-sale system for retail electronics and inventory tracking.

Simpos is an enterprise-grade retail POS system engineered for electronics hardware merchants. Built with Spring Boot 3 and MongoDB, it provides real-time barcode product search, multi-item checkout, automated sequential invoice generation, inventory tracking, profit margin calculations, and printable receipt slips.

[![Engine](https://img.shields.io/badge/Spring_Boot-3.2.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Database](https://img.shields.io/badge/MongoDB-Reactive_Data-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Template Engine](https://img.shields.io/badge/Thymeleaf-3-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)](https://www.thymeleaf.org/)
[![Build Tool](https://img.shields.io/badge/Maven-3.9-C71A36?style=flat-square&logo=apachemaven&logoColor=white)](https://maven.apache.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## Showcase

| Feature | Desktop Interface |
| :--- | :---: |
| **Cashier POS Register**<br>Interactive item selection, cart quantity adjusters, automated total calculation, and instant payment change computation. | ![Cashier POS Register](screenshots/POS%20Cashier%20Desktop.png) |
| **Analytics Dashboard**<br>High-level revenue tracking, daily order velocity, total processed invoices, and active product inventory counts. | ![Analytics Dashboard](screenshots/POS%20Dashboard%20Desktop.png) |
| **Inventory & Stock Manager**<br>SKU-level stock tracking, item unit pricing, low-stock threshold alerts, and supplier catalog records. | ![Inventory & Stock Manager](screenshots/Stock%20Inventory%20Desktop.png) |
| **Financial Ledger & Profit**<br>Gross revenue versus item cost analysis, calculated net profit margins, and daily transaction history. | ![Financial Ledger & Profit](screenshots/Finance%20Profit%20Desktop.png) |
| **Receipt Slip & Bill Invoice**<br>Thermal receipt view formatted with sequential transaction codes, item breakdown, tax calculations, and print dialog. | ![Receipt Slip & Bill Invoice](screenshots/Bill%20Receipt%20Desktop.png) |
| **Authentication & Gate**<br>Secure role-based authentication protecting register workflows, ledger audits, and administrative stock mutations. | ![Authentication & Gate](screenshots/Login%20Screen%20Desktop.png) |

---

## Core Features

- **High-Throughput Cashier POS (`/kasir`)**: Real-time cart calculations, keyboard-friendly search, dynamic line-item addition/deletion, and cash exchange calculation.
- **Automated Sequence Generation**: Sequential, zero-collision order numbers and invoice codes backed by MongoDB atomic sequence collections.
- **Real-Time Stock Depletion**: Every completed transaction automatically decrements SKU inventory with transactional safety.
- **Financial Audit & Ledger (`/finance`)**: Real-time computation of total revenue, wholesale costs, and net merchant margins.
- **Printable Thermal Bill Receipts (`/bill`)**: Clean CSS print styling formatted for standard 58mm and 80mm point-of-sale thermal receipt printers.
- **Role-Based Authentication (`/login`)**: Secure cashier and administrator authentication protecting financial records and stock adjustments.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Spring Boot `3.2.4` | Backend application runtime and MVC architecture |
| **Language** | Java `17` LTS | Strict type safety and modern language features |
| **Database** | MongoDB | Document database for catalog, invoices, and sequence state |
| **Data Access** | Spring Data MongoDB | Repository abstractions and custom aggregation pipelines |
| **UI Rendering** | Thymeleaf `3.x` | Server-rendered templates with reactive state updates |
| **Productivity** | Project Lombok | Eliminates boilerplate getters, setters, and constructors |
| **Build System** | Apache Maven | Dependency management, compilation, and package lifecycle |

---

## Project Structure

```text
springboot-simple-pos/
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
├── pom.xml                      # Maven build definition
├── raw_screenshots/             # Unframed production captures
└── screenshots/                 # Retina MacBook Pro M4 mockups
```

---

## Getting Started & Local Development

### Prerequisites

- **Java Development Kit (JDK)**: Version 17 or higher
- **Apache Maven**: Version 3.8+ (or use `./mvnw`)
- **MongoDB**: Version 5.0+ running locally or a MongoDB Atlas URI

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/widifirmaan/springboot-simple-pos.git
   cd springboot-simple-pos
   ```

2. **Configure Database Connection**:
   Update `src/main/resources/application.properties` with your MongoDB credentials:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/pos_db
   server.port=8080
   ```

3. **Build and Run**:
   ```bash
   mvn clean spring-boot:run
   ```

4. **Access the Application**:
   - Open [http://localhost:8080/](http://localhost:8080/) in your web browser.
   - Default seed route available at `/seed` to populate initial demo catalog items.

---

## License

This project is licensed under the [MIT License](LICENSE).
