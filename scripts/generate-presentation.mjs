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
    console.warn(`Warning: Screenshot file not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Encoding Simpos POS screenshots...');

const images = {
  loginDesktop: encodeImage('POS Login Screen Desktop.png'),
  loginMobile: encodeImage('POS Login Screen Mobile.png'),
  cashierDesktop: encodeImage('POS Cashier Terminal Desktop.png'),
  cashierMobile: encodeImage('POS Cashier Terminal Mobile.png'),
  checkoutDesktop: encodeImage('POS Cashier Checkout Summary Desktop.png'),
  receiptDesktop: encodeImage('POS Cashier Receipt Desktop.png'),
  analyticsDesktop: encodeImage('POS Analytics Dashboard Desktop.png'),
  analyticsMobile: encodeImage('POS Analytics Dashboard Mobile.png'),
  stockDesktop: encodeImage('POS Stock Inventory Catalog Desktop.png'),
  stockMobile: encodeImage('POS Stock Inventory Catalog Mobile.png'),
  financeDesktop: encodeImage('POS Finance Profit Ledger Desktop.png'),
  billsDesktop: encodeImage('POS Vendor Bills Table Desktop.png'),
};

console.log('Assembling English Simpos Soft UI Dashboard Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simpos - Web Engineering Presentation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-slate: #F8F9FA;
      --card-white: #FFFFFF;
      --card-elevated: #F4F4F5;
      --border-subtle: #E3E3E7;
      --border-highlight: #F97316;
      --accent-orange: #F97316;
      --accent-green: #22C55E;
      --text-dark: #27272A;
      --text-muted: #71717A;
      --text-subtle: #A1A1AA;
      --radius-card: 16px;
      --radius-subcard: 12px;
      --radius-pill: 50px;
      --shadow-soft-ui: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
      --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: var(--bg-slate);
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-dark);
      line-height: 1.45;
      letter-spacing: -0.01em;
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
      background: var(--bg-slate);
      display: flex;
      flex-direction: column;
      padding: 16mm 20mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 90% 10%, rgba(249, 115, 22, 0.04) 0%, transparent 40%),
        radial-gradient(circle at 10% 90%, rgba(34, 197, 94, 0.03) 0%, transparent 40%);
    }

    /* Slide Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6mm;
      z-index: 10;
    }

    .brand-pill {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-pill);
      padding: 6px 18px;
      box-shadow: var(--shadow-card);
    }

    .brand-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--accent-orange);
      box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
    }

    .brand-title {
      font-size: 13.5px;
      font-weight: 800;
      letter-spacing: 0.03em;
      color: var(--text-dark);
      text-transform: uppercase;
    }

    .brand-subtitle {
      font-size: 12px;
      color: var(--text-muted);
      border-left: 1px solid var(--border-subtle);
      padding-left: 12px;
      margin-left: 2px;
    }

    .badge-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--accent-orange);
      background: rgba(249, 115, 22, 0.08);
      border: 1px solid rgba(249, 115, 22, 0.22);
      border-radius: var(--radius-pill);
      padding: 6px 14px;
    }

    /* Content Layout */
    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 10;
    }

    .title-block {
      margin-bottom: 5mm;
    }

    .slide-category {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-orange);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }

    .slide-title {
      font-size: 27px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text-dark);
      line-height: 1.15;
    }

    .slide-subtitle {
      font-size: 13.5px;
      color: var(--text-muted);
      margin-top: 4px;
      max-width: 900px;
    }

    /* Soft UI Cards */
    .soft-card {
      background: var(--card-white);
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-soft-ui);
      padding: 18px 22px;
    }

    .soft-card-elevated {
      background: var(--card-white);
      border-left: 4px solid var(--accent-orange);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-soft-ui);
      padding: 18px 22px;
    }

    /* Layout Splits */
    .layout-split {
      display: grid;
      grid-template-columns: 1.12fr 0.88fr;
      gap: 20px;
      align-items: stretch;
      flex: 1;
    }

    .layout-split-reversed {
      display: grid;
      grid-template-columns: 0.88fr 1.12fr;
      gap: 20px;
      align-items: stretch;
      flex: 1;
    }

    .layout-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      flex: 1;
    }

    .layout-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      flex: 1;
    }

    /* Visual Stage */
    .visual-stage {
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-soft-ui);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      min-height: 290px;
      padding: 12px;
    }

    .visual-stage img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.1));
    }

    /* Feature Items */
    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }

    .feature-item {
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-subcard);
      box-shadow: var(--shadow-card);
      padding: 13px 16px;
    }

    .feature-item-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 3px;
    }

    .feature-item-desc {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.4;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3.5mm;
      border-top: 1px solid var(--border-subtle);
      font-size: 11px;
      color: var(--text-subtle);
      font-family: 'JetBrains Mono', monospace;
    }

    .tech-pill {
      display: inline-block;
      padding: 4px 12px;
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-pill);
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--accent-orange);
      margin-right: 6px;
      margin-top: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Simpos POS</div>
        <div class="brand-subtitle">Spring Boot 3 &amp; MongoDB Enterprise POS Architecture</div>
      </div>
      <div class="badge-pill">DECK-POS-01 / 10</div>
    </div>

    <div class="slide-content">
      <div class="layout-split">
        <div style="display: flex; flex-direction: column; justify-content: center; padding-right: 15px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;">
            <span class="tech-pill">Spring Boot 3.3</span>
            <span class="tech-pill">Java 21 LTS</span>
            <span class="tech-pill">MongoDB Atlas</span>
            <span class="tech-pill">Soft UI System</span>
          </div>
          <h1 style="font-size: 38px; font-weight: 900; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 16px;">
            Enterprise Point of Sale Web Architecture
          </h1>
          <p style="font-size: 15px; color: var(--text-muted); line-height: 1.55; margin-bottom: 24px;">
            A high-performance retail point-of-sale system featuring ultra-fast transaction processing, atomic multi-warehouse inventory control, integrated profit ledger accounting, and an ergonomic Soft UI Dashboard.
          </p>
          <div class="soft-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">DATABASE</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--accent-orange); margin-top: 2px;">MongoDB</div>
              <div style="font-size: 11px; color: var(--text-muted);">Document Store</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">DESIGN SYSTEM</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-top: 2px;">Soft UI</div>
              <div style="font-size: 11px; color: var(--text-muted);">Sunset Orange #F97316</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">TRANSACTIONS</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--accent-green); margin-top: 2px;">Atomic</div>
              <div style="font-size: 11px; color: var(--text-muted);">Stock Consistency</div>
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.cashierDesktop}" alt="Simpos Cashier Terminal Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; SPRING BOOT ENTERPRISE POS</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 2: BACKGROUND & SYSTEM SPECIFICATIONS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Architecture &amp; Foundations</div>
        <div class="brand-subtitle">System Engineering Requirements</div>
      </div>
      <div class="badge-pill">DECK-POS-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Backend &amp; Web Engineering Foundations</div>
        <h2 class="slide-title">Checkout Latency &amp; Retail Data Consistency Requirements</h2>
        <p class="slide-subtitle">Pairing the concurrency strength of Java 21 LTS with NoSQL document flexibility to manage high-throughput retail checkout volume.</p>
      </div>

      <div class="layout-grid-3">
        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">01 &bull; SYSTEM BOTTLENECK</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Cashier Queue Congestion</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Peak-hour transaction lag causes physical retail bottlenecks, demanding barcode scan latencies strictly below 100ms.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">02 &bull; ARCHITECTURAL SOLUTION</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Spring Boot &amp; Compound Mongo Indexes</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Compound indexing on barcode fields combined with in-memory cashier session caching ensures instantaneous catalog resolution.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">03 &bull; CASHIER ERGONOMICS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Clean Soft UI Dashboard</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Subtle neumorphic cards on soft slate backgrounds providing high visual clarity, reducing ocular fatigue during extended shifts.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; SYSTEM ARCHITECTURE</div>
      <div>TRANSACTION SPEED STANDARDS</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: AUTHENTICATION & CASHIER SESSION SECURITY -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Session Security</div>
        <div class="brand-subtitle">Spring Security RBAC &amp; Cashier Session</div>
      </div>
      <div class="badge-pill">DECK-POS-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">User Access Control</div>
        <h2 class="slide-title">Role-Based Access Control &amp; Cashier Session Isolation</h2>
        <p class="slide-subtitle">Granular security framework enforcing least privilege across Admin, Cashier, and Store Manager tiers with strict CSRF protection.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.loginDesktop}" alt="Simpos Login Screen Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Adaptive BCrypt Credential Hashing</div>
            <div class="feature-item-desc">
              Enterprise-grade credential encryption with dynamic work factors mitigating brute-force offline dictionary attacks.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Terminal-Bound Active Session Tracking</div>
            <div class="feature-item-desc">
              Binding active authentication states to physical cashier station IDs, restricting financial ledger access to managerial accounts.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Obfuscated Credential Error Handling</div>
            <div class="feature-item-desc">
              Structured failure responses that avoid leaking user account existence, mitigating enumeration vectors.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; AUTHENTICATION &amp; RBAC</div>
      <div>SPRING SECURITY 6 ENGINE</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 4: CASHIER TERMINAL & FAST SCANNING -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Cashier Operations</div>
        <div class="brand-subtitle">Fast Barcode Scanning &amp; Cart State</div>
      </div>
      <div class="badge-pill">DECK-POS-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Real-Time Sales Terminal</div>
        <h2 class="slide-title">High-Throughput Cashier Terminal with Barcode Event Buffering</h2>
        <p class="slide-subtitle">Highly responsive point-of-sale terminal with automated item aggregation triggered directly by physical hardware barcode scanners.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Focus-Resilient Barcode Scanner Listener</div>
            <div class="feature-item-desc">
              Keyboard event ingestion capturing rapid scanner input streams directly into active transaction carts regardless of focus.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Client-Side Subtotal &amp; Tax Calculation</div>
            <div class="feature-item-desc">
              Instant computation of applied promotional discounts, VAT rates, and line totals synchronized with Spring Boot REST endpoints.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Real-Time Out-of-Stock Interception</div>
            <div class="feature-item-desc">
              Proactive client-side validation preventing cart additions for exhausted warehouse stock before commit.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.cashierMobile}" alt="Simpos Cashier Mobile View">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; CASHIER TERMINAL</div>
      <div>BARCODE &amp; CART ENGINE</div>
      <div>04 / 10</div>
    </div>
  </div>

  <!-- SLIDE 5: CHECKOUT & RECEIPT FORMATTING -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Transaction Settlement</div>
        <div class="brand-subtitle">Checkout Summary &amp; Thermal Receipt Engine</div>
      </div>
      <div class="badge-pill">DECK-POS-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Payment Finalization</div>
        <h2 class="slide-title">Checkout Settlement Modal &amp; Thermal Receipt Formatting</h2>
        <p class="slide-subtitle">Accurate cash tender calculations and ESC/POS thermal receipt formatting compatible with standard 58mm and 80mm printers.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.receiptDesktop}" alt="Simpos Cashier Receipt Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Rapid Cash Tender &amp; Change Calculator</div>
            <div class="feature-item-desc">
              Pre-configured cash denomination pills accelerating change calculation for cashier operators.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Monospace Thermal-Safe Receipt Formatting</div>
            <div class="feature-item-desc">
              JetBrains Mono monospace formatting preventing column misalignment on narrow continuous thermal rolls.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">UUID Transaction Fingerprinting</div>
            <div class="feature-item-desc">
              Unique invoice IDs and cryptographic barcodes printed on every voucher to streamline returns and auditing.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; CHECKOUT &amp; RECEIPT</div>
      <div>THERMAL PRINT FORMATTER</div>
      <div>05 / 10</div>
    </div>
  </div>

  <!-- SLIDE 6: INVENTORY CONTROL & ATOMIC DEDUCTIONS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Inventory Control</div>
        <div class="brand-subtitle">Stock Management &amp; Atomic Deductions</div>
      </div>
      <div class="badge-pill">DECK-POS-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Inventory &amp; Stock Management</div>
        <h2 class="slide-title">Stock Catalog &amp; Race-Free Atomic Inventory Deductions</h2>
        <p class="slide-subtitle">Multi-item catalog tracking powered by MongoDB $inc atomic mutation operators, eliminating distributed race conditions.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Atomic In-Database Deductions ($inc: -qty)</div>
            <div class="feature-item-desc">
              Direct database-level decrement mutations without manual read-modify-write loops, ensuring multi-lane concurrency.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Visual Low-Stock Threshold Alarms</div>
            <div class="feature-item-desc">
              Prominent amber badges alerting inventory managers when item counts breach minimum reorder safety buffers.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Category &amp; Unit Dimensioning</div>
            <div class="feature-item-desc">
              Multi-tiered taxonomy classifying items across categories (Food, Drinks, Hardware) and packaging units (Pcs, Box, Pack).
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.stockDesktop}" alt="Simpos Stock Inventory Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; INVENTORY CONTROL</div>
      <div>ATOMIC CONCURRENCY ENGINE</div>
      <div>06 / 10</div>
    </div>
  </div>

  <!-- SLIDE 7: FINANCIAL AUDIT & PROFIT/LOSS REPORTING -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Financial Audit</div>
        <div class="brand-subtitle">Profit Ledger &amp; Financial Reporting</div>
      </div>
      <div class="badge-pill">DECK-POS-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Retail Financial Auditing</div>
        <h2 class="slide-title">Transaction Profit Ledger &amp; Margin Analysis Architecture</h2>
        <p class="slide-subtitle">Automated ledger auditing separating Cost of Goods Sold (COGS) from gross and net profit margins per transaction.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.financeDesktop}" alt="Simpos Finance Profit Ledger Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Historical COGS Snapshot Isolation</div>
            <div class="feature-item-desc">
              Locking item cost baselines at transaction time so historical reporting remains immune to future supplier price changes.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Date-Range &amp; Cashier Shift Reconciliation</div>
            <div class="feature-item-desc">
              Intuitive filtering enabling floor managers to audit terminal register balances per individual cashier shift.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Immutable ISO-Timestamped Audit Trail</div>
            <div class="feature-item-desc">
              Permanent financial mutation journal with ISO-8601 audit timestamps preventing unauthorized database alterations.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; FINANCIAL AUDIT</div>
      <div>PROFIT &amp; LOSS REPORTING</div>
      <div>07 / 10</div>
    </div>
  </div>

  <!-- SLIDE 8: VENDOR BILLS & ACCOUNTS PAYABLE -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Accounts Payable</div>
        <div class="brand-subtitle">Vendor Bills &amp; Supply Chain Integration</div>
      </div>
      <div class="badge-pill">DECK-POS-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Supply Chain Finance</div>
        <h2 class="slide-title">Supplier Invoice Management &amp; Accounts Payable Tracking</h2>
        <p class="slide-subtitle">Procurement management tracking supplier bill balances, payment statuses, and delivery term agreements.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="visual-stage">
          <img src="${images.billsDesktop}" alt="Simpos Vendor Bills Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Invoice Status Life-Cycle (Paid / Pending)</div>
            <div class="feature-item-desc">
              Visual status indicators highlighting settled invoices in green and approaching maturities in amber.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Automated Restock Ingestion Integration</div>
            <div class="feature-item-desc">
              Approving received vendor invoices immediately updates inventory counts without double-entry overhead.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Structured Export Pipeline (Excel &amp; PDF)</div>
            <div class="feature-item-desc">
              One-click tabular report downloads supporting financial closing and corporate tax compliance workflows.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; VENDOR ACCOUNTS</div>
      <div>SUPPLY CHAIN INTEGRATION</div>
      <div>08 / 10</div>
    </div>
  </div>

  <!-- SLIDE 9: BUSINESS INTELLIGENCE & SALES ANALYTICS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Business Intelligence</div>
        <div class="brand-subtitle">Analytics Dashboard &amp; Sales Insights</div>
      </div>
      <div class="badge-pill">DECK-POS-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Executive Performance Monitoring</div>
        <h2 class="slide-title">Real-Time Revenue Metrics &amp; Trend Analytics</h2>
        <p class="slide-subtitle">Interactive dashboards visualizing gross turnover, best-selling product hierarchies, and cashier performance metrics.</p>
      </div>

      <div class="layout-grid-3">
        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">MONGODB AGGREGATION</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Pipeline $group &amp; $sum</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Processing millions of sales records directly in the database engine without bloating Java application heap space.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">TOP PERFORMING ITEMS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Best-Seller Rankings</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Automated identification of revenue-driving products to guide promotional campaigns and inventory reorder planning.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">DASHBOARD RESPONSIVENESS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Hardware-Accelerated Chart.js</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Smooth HTML5 Canvas curve rendering ensuring analytical dashboards load without thread blocking.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; BUSINESS ANALYTICS</div>
      <div>MONGODB AGGREGATION PIPELINE</div>
      <div>09 / 10</div>
    </div>
  </div>

  <!-- SLIDE 10: ARCHITECTURAL SYNTHESIS & PRODUCTION READINESS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">System Summary</div>
        <div class="brand-subtitle">Release Readiness &amp; Architecture Synthesis</div>
      </div>
      <div class="badge-pill">DECK-POS-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Final Engineering Synthesis</div>
        <h2 class="slide-title">Simpos POS Platform Architectural Synthesis</h2>
        <p class="slide-subtitle">Enterprise retail checkout solution marrying Spring Boot reliability, MongoDB performance, and refined Soft UI dashboard design.</p>
      </div>

      <div class="layout-grid-4">
        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">BACKEND</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-orange); margin-top: 4px; margin-bottom: 4px;">Spring Boot 3</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Java 21 LTS runtime with Spring Data MongoDB.</p>
        </div>

        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">DATABASE</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-orange); margin-top: 4px; margin-bottom: 4px;">MongoDB NoSQL</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Atomic stock deductions and aggregation pipelines.</p>
        </div>

        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">UI DESIGN</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--text-dark); margin-top: 4px; margin-bottom: 4px;">Soft UI System</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Sunset Orange palette with gentle 3D elevation.</p>
        </div>

        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">STATUS</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-green); margin-top: 4px; margin-bottom: 4px;">Production Ready</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Thermal printer and mobile responsive viewports.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.analyticsDesktop}" alt="Simpos Analytics Dashboard Final View">
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; ENGINEERING SYNTHESIS</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`Presentation HTML written to: ${htmlFilePath}`);

console.log('Launching Chromium with Playwright to render English Simpos Soft UI Dashboard PDFs...');

async function renderPDF() {
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const slidePdfPath = path.join(downloadsDir, 'Simpos.pdf');
  const continuousPdfPath = path.join(downloadsDir, 'Simpos-Continuous.pdf');

  // 1. Multi-Page Deck Mode (10 Slides A4 Landscape)
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #F8F9FA !important;
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
  await page.pdf({
    path: continuousPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    pageRanges: '1',
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(continuousPdfPath);

  console.log('\nSimpos English PDFs successfully generated:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error during PDF rendering:', err);
  process.exit(1);
});
