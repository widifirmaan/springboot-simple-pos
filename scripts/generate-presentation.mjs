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
    console.warn(`⚠️ Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('🍃 Encoding Simpos Spring Boot screenshots...');

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
  financeMobile: encodeImage('POS Finance Profit Ledger Mobile.png'),
  billsDesktop: encodeImage('POS Vendor Bills Table Desktop.png'),
  billsMobile: encodeImage('POS Vendor Bills Table Mobile.png'),
};

console.log('🎨 Constructing Simpos Enterprise POS Presentation Deck HTML...');

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
      --bg-enterprise: #F1F5F9;
      --bg-card: #FFFFFF;
      --bg-surface: #F8FAFC;
      --spring-green: #6DB33F;
      --spring-dark: #2F6F16;
      --spring-light: #EBF8E3;
      --java-orange: #ED8B00;
      --mongo-green: #47A248;
      --text-dark: #0F172A;
      --text-muted: #64748B;
      --border-slate: #CBD5E1;
      --border-light: #E2E8F0;
      --shadow-clean: 0 4px 16px rgba(15, 23, 42, 0.06);
      --radius-pos: 10px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #E2E8F0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-dark);
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
      background: var(--bg-enterprise);
      display: flex;
      flex-direction: column;
      padding: 16mm 18mm;
      overflow: hidden;
      background-image: 
        linear-gradient(to right, rgba(203, 213, 225, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(203, 213, 225, 0.3) 1px, transparent 1px);
      background-size: 32px 32px;
    }

    /* Top Spring Green Line */
    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #6DB33F, #47A248, #ED8B00);
      z-index: 50;
    }

    /* Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1.5px solid var(--border-slate);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .spring-pill {
      background: var(--spring-light);
      border: 1px solid var(--spring-green);
      color: var(--spring-dark);
      padding: 3px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 800;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .slide-section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .slide-page-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 800;
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      color: var(--spring-dark);
      padding: 3px 12px;
      border-radius: 4px;
    }

    /* Layout */
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

    .route-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      padding: 3px 10px;
      width: fit-content;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: var(--spring-dark);
      border-radius: 4px;
    }

    .slide-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 1.15;
      color: var(--text-dark);
      letter-spacing: -0.02em;
    }

    .slide-subtitle {
      font-size: 12.5px;
      color: #475569;
      font-weight: 500;
      line-height: 1.5;
    }

    /* Cards */
    .feature-blocks {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .spring-card {
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      box-shadow: var(--shadow-clean);
      border-radius: 6px;
      padding: 11px 15px;
      border-left: 3.5px solid var(--spring-green);
    }

    .spring-card.orange-border {
      border-left-color: var(--java-orange);
    }

    .spring-card.mongo-border {
      border-left-color: var(--mongo-green);
    }

    .card-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .card-text {
      font-size: 11px;
      line-height: 1.45;
      color: #334155;
    }

    /* Metrics Grid */
    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      border-radius: 6px;
      padding: 7px 10px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }

    .metric-val {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 16px;
      font-weight: 900;
      color: var(--spring-dark);
    }

    .metric-desc {
      font-size: 8.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
    }

    /* Media Mockup */
    .slide-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 0;
    }

    .device-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .desktop-frame {
      width: 90%;
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .frame-bar {
      height: 24px;
      background: #F8FAFC;
      border-bottom: 1px solid var(--border-slate);
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 6px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .dot.red { background: #EF4444; }
    .dot.yellow { background: #F59E0B; }
    .dot.green { background: #10B981; }

    .url-chip {
      margin-left: 12px;
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      padding: 1px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 600;
      color: #475569;
      border-radius: 4px;
    }

    .desktop-img {
      width: 100%;
      height: auto;
      max-height: 380px;
      object-fit: contain;
      background: #FFFFFF;
      display: block;
    }

    .mobile-frame {
      position: absolute;
      right: -8px;
      bottom: -12px;
      width: 27%;
      background: #FFFFFF;
      border: 2px solid var(--border-slate);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
      border-radius: 14px;
      overflow: hidden;
      z-index: 10;
    }

    .mobile-notch {
      height: 12px;
      background: #0F172A;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .notch-speaker {
      width: 28px;
      height: 2px;
      background: #475569;
      border-radius: 2px;
    }

    .mobile-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1.5px solid var(--border-slate);
      padding-top: 3.5mm;
      margin-top: 4mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #64748B;
      font-weight: 700;
    }

    /* Cover Slide */
    .cover-slide {
      background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
      justify-content: space-between;
      padding: 18mm 20mm;
    }

    .cover-giant-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 48px;
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.03em;
      color: var(--text-dark);
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cover-giant-title span {
      color: var(--spring-dark);
    }

    .cover-desc {
      font-size: 15.5px;
      line-height: 1.5;
      color: #475569;
      font-weight: 500;
      max-width: 720px;
    }

    .cover-split {
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 28px;
      align-items: center;
      margin: 10px 0;
    }

    .cover-specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .cover-spec-card {
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      box-shadow: var(--shadow-clean);
      border-radius: 6px;
      padding: 12px 14px;
    }

    .cover-spec-k {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 800;
      color: var(--spring-dark);
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    .cover-spec-v {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 800;
      color: var(--text-dark);
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 10px;
      flex: 1;
    }

    .arch-col {
      background: #FFFFFF;
      border: 1px solid var(--border-slate);
      box-shadow: var(--shadow-clean);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .arch-col-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 12.5px;
      font-weight: 800;
      text-transform: uppercase;
      padding-bottom: 6px;
      border-bottom: 1.5px solid var(--border-slate);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-dark);
    }

    .arch-item {
      background: #F8FAFC;
      border: 1px solid var(--border-light);
      border-radius: 5px;
      padding: 8px 10px;
      font-size: 11px;
    }

    .arch-item-name {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: var(--spring-dark);
      margin-bottom: 2px;
    }

    .arch-item-detail {
      font-size: 10px;
      color: #64748B;
      line-height: 1.4;
    }

    /* Closing Slide */
    .closing-slide {
      background: linear-gradient(135deg, #FFFFFF 0%, #EBF8E3 100%);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20mm;
      gap: 18px;
    }

    .closing-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: var(--text-dark);
    }

    .closing-pills {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 760px;
    }

    .live-hero-card {
      background: #FFFFFF;
      border: 1.5px solid var(--spring-green);
      box-shadow: 0 12px 30px rgba(109, 179, 63, 0.15);
      border-radius: 8px;
      padding: 16px 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-top: 10px;
    }

    .live-url-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
      font-weight: 800;
      color: var(--spring-dark);
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 01: COVER ==================== -->
  <div class="slide cover-slide">
    <div>
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="spring-pill">ENTERPRISE POS PLATFORM</div>
        <div class="route-pill">SPRING BOOT 3 • JAVA 17 LTS • MONGODB 7</div>
        <div class="spring-pill" style="border-color:#10B981; color:#059669; background:#D1FAE5;">PRODUCTION READY</div>
      </div>
      <div style="margin-top: 20px; max-width: 85%;">
        <div class="cover-giant-title">
          <span>SIMPOS ENTERPRISE</span><br>
          RETAIL POINT-OF-SALE & INVENTORY PLATFORM
        </div>
        <p class="cover-desc">
          Arsitektur aplikasi web point-of-sale ritel dan manajemen inventaris berbasis Java enterprise dengan Spring Boot 3, basis data dokumen MongoDB, template Thymeleaf responsif, dan pelaporan keuangan real-time.
        </p>
      </div>
    </div>

    <div class="cover-split">
      <div class="cover-specs-grid">
        <div class="cover-spec-card">
          <div class="cover-spec-k">CORE FRAMEWORK</div>
          <div class="cover-spec-v">Spring Boot 3.2.4 (Java 17)</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">DOCUMENT DATABASE</div>
          <div class="cover-spec-v">MongoDB 7.0 Document Store</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">SERVER RENDERING</div>
          <div class="cover-spec-v">Thymeleaf 3 View Engine</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">CONTAINER ENGINE</div>
          <div class="cover-spec-v">Docker & Compose Ready</div>
        </div>
      </div>

      <div style="position: relative;">
        <div class="desktop-frame" style="width: 100%;">
          <div class="frame-bar">
            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
            <div class="url-chip">http://localhost:8081/simpos</div>
          </div>
          <img src="${images.analyticsDesktop}" class="desktop-img" alt="Simpos Cover">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AUTHOR: WIDI FIRMANSYAH</div>
      <div>PROJECT: SIMPOS ENTERPRISE POS</div>
      <div>PAGE 01 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 02: AUTH GATEWAY ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">SECURITY GATEWAY</div>
        <div class="slide-section-title">ROLE-BASED AUTHENTICATION & LOGIN SCREEN</div>
      </div>
      <div class="slide-page-badge">SLIDE 02</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">POST /login • SPRING SECURITY RBAC</div>
          <h2 class="slide-title">Enterprise Authentication Gateway & RBAC</h2>
          <p class="slide-subtitle">
            Gerbang autentikasi peran bertingkat dengan Spring Security, peringatan inline kredensial tidak valid, perlindungan token CSRF, dan pemisahan hak akses kasir/manajer.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card">
            <div class="card-label">🛡️ Spring Security Filter Chain</div>
            <div class="card-text">
              Proteksi sesi terenkripsi dengan proteksi brute-force, hash kata sandi BCrypt, dan penanganan timeout sesi kasir otomatis.
            </div>
          </div>
          <div class="spring-card orange-border">
            <div class="card-label">⚠️ Inline Credential Error Diagnostics</div>
            <div class="card-text">
              Pemberitahuan visual kesalahan login langsung pada form tanpa kehilangan fokus input atau mengekspos detail celah keamanan sistem.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">BCrypt</div>
            <div class="metric-desc">Password Hashing</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">CSRF</div>
            <div class="metric-desc">Token Shield</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Role</div>
            <div class="metric-desc">Based Access</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/login</div>
            </div>
            <img src="${images.loginDesktop}" class="desktop-img" alt="POS Login Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.loginMobile}" class="mobile-img" alt="POS Login Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>SECURITY FILTER CHAIN & SESSION LIFECYCLE</div>
      <div>PAGE 02 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 03: CASHIER TERMINAL ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">CASHIER POS</div>
        <div class="slide-section-title">CASHIER REGISTER & CART MUTATION ENGINE</div>
      </div>
      <div class="slide-page-badge">SLIDE 03</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /kasir • REAL-TIME CHECKOUT</div>
          <h2 class="slide-title">Cashier Register Terminal & Instant Scanning</h2>
          <p class="slide-subtitle">
            Terminal kasir kas berkecepatan tinggi dengan pencarian SKU instan, mutasi jumlah keranjang reaktif, dan rekalkulasi total belanja dinamis.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card">
            <div class="card-label">⚡ Barcode & SKU Auto-Increment</div>
            <div class="card-text">
              Pemindaian barcode barang otomatis menambahkan kuantitas item dalam keranjang secara real-time tanpa reload halaman atau lag antarmuka.
            </div>
          </div>
          <div class="spring-card mongo-border">
            <div class="card-label">📦 Real-Time Stock Constraint Validation</div>
            <div class="card-text">
              Validasi batas stok MongoDB yang mencegah kasir memasukkan jumlah barang melebihi kuantitas inventaris fisik yang tersedia.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">&lt; 1s</div>
            <div class="metric-desc">Scan Response</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Stock Bound</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Auto</div>
            <div class="metric-desc">Subtotal Math</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/kasir</div>
            </div>
            <img src="${images.cashierDesktop}" class="desktop-img" alt="Cashier Terminal Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.cashierMobile}" class="mobile-img" alt="Cashier Terminal Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>TERMINAL CART MUTATION & SKU DISPATCH</div>
      <div>PAGE 03 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 04: CHECKOUT & RECEIPT ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">THERMAL PRINTER</div>
        <div class="slide-section-title">CHECKOUT SUMMARY & 58MM THERMAL RECEIPT</div>
      </div>
      <div class="slide-page-badge">SLIDE 04</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">POST /transaksi • RECEIPT COMPOSITION</div>
          <h2 class="slide-title">Checkout Summary & Printable Thermal Receipt</h2>
          <p class="slide-subtitle">
            Kalkulator pembayaran tunai/non-tunai dengan penghitungan uang kembalian otomatis dan modal struk belanja siap cetak ke printer kasir 58mm/80mm.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card">
            <div class="card-label">💵 Change Tender Calculation Algorithm</div>
            <div class="card-text">
              Validasi ketat nominal uang tunai yang diterima dengan kalkulasi otomatis jumlah uang kembalian dan peringatan jika dana belum mencukupi.
            </div>
          </div>
          <div class="spring-card orange-border">
            <div class="card-label">🖨️ Monospace 58mm Layout Formatting</div>
            <div class="card-text">
              Tata letak struk termal monospace berstandar POS ritel yang rapi dan teroptimasi untuk printer ESC/POS via browser window.print().
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">58/80mm</div>
            <div class="metric-desc">Receipt Formats</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-desc">Print Modal</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">ACID</div>
            <div class="metric-desc">Atomic Commit</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/transaksi/receipt</div>
            </div>
            <img src="${images.receiptDesktop}" class="desktop-img" alt="POS Receipt Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.checkoutDesktop}" class="mobile-img" alt="Checkout Summary Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>ESC/POS RECEIPT GENERATOR & TRANSACTION COMMIT</div>
      <div>PAGE 04 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 05: ANALYTICS DASHBOARD ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">EXECUTIVE TELEMETRY</div>
        <div class="slide-section-title">EXECUTIVE ANALYTICS DASHBOARD & KPI CARDS</div>
      </div>
      <div class="slide-page-badge">SLIDE 05</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /dashboard • EXECUTIVE TELEMETRY</div>
          <h2 class="slide-title">Real-Time Revenue Telemetry & Sales KPIs</h2>
          <p class="slide-subtitle">
            Dashboard analitik eksekutif yang menyajikan total pendapatan harian, laba kotor, volume transaksi ritel, dan peringkat produk terlaris secara visual.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card mongo-border">
            <div class="card-label">📊 MongoDB Aggregation Pipeline</div>
            <div class="card-text">
              Kueri agregasi MongoDB performa tinggi yang mengelompokkan data ribuan transaksi kasir untuk menghitung omzet dan margin keuntungan dalam milidetik.
            </div>
          </div>
          <div class="spring-card">
            <div class="card-label">🏆 Top-Selling SKU Ranking</div>
            <div class="card-text">
              Tabel identifikasi produk berputar cepat (fast-moving goods) membantu manajer menentukan strategi restock dan promosi berkala.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Realtime</div>
            <div class="metric-desc">Sales Metrics</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Aggregate</div>
            <div class="metric-desc">Mongo Pipeline</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Accurate Ledger</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/dashboard</div>
            </div>
            <img src="${images.analyticsDesktop}" class="desktop-img" alt="POS Analytics Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.analyticsMobile}" class="mobile-img" alt="POS Analytics Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>MONGODB AGGREGATION PIPELINE & KPI CARDS</div>
      <div>PAGE 05 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 06: STOCK INVENTORY ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">INVENTORY ENGINE</div>
        <div class="slide-section-title">STOCK INVENTORY LEDGER & THRESHOLD ALERTS</div>
      </div>
      <div class="slide-page-badge">SLIDE 06</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /barang • INVENTORY CONTROL</div>
          <h2 class="slide-title">Inventory Master Catalog & Stock Tracking</h2>
          <p class="slide-subtitle">
            Manajemen master data barang ritel mencakup SKU, harga beli pokok, harga jual kasir, stok fisik, dan indikator peringatan stok kritis otomatis.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card">
            <div class="card-label">🚨 Low-Stock Trigger & Safety Stock</div>
            <div class="card-text">
              Highlight baris otomatis berwarna oranye/merah saat kuantitas barang berada di bawah batas minimum agar manajer segera membuat order ke vendor.
            </div>
          </div>
          <div class="spring-card orange-border">
            <div class="card-label">📝 Modal Add / Edit / Delete Item</div>
            <div class="card-text">
              Modal interaktif untuk registrasi produk baru, pembaruan harga jual, dan penyesuaian opname stok fisik dengan validasi data server-side.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Atomic</div>
            <div class="metric-desc">Stock Mutex</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Auto</div>
            <div class="metric-desc">Low-Stock Alert</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Audit</div>
            <div class="metric-desc">Trail History</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/barang</div>
            </div>
            <img src="${images.stockDesktop}" class="desktop-img" alt="Stock Inventory Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.stockMobile}" class="mobile-img" alt="Stock Inventory Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>INVENTORY LEDGER & SAFETY STOCK DISPATCH</div>
      <div>PAGE 06 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 07: PROFIT LEDGER ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">FINANCIAL AUDIT</div>
        <div class="slide-section-title">FINANCIAL PROFIT LEDGER & REVENUE BOOKKEEPING</div>
      </div>
      <div class="slide-page-badge">SLIDE 07</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /keuangan • PROFIT LEDGER</div>
          <h2 class="slide-title">Gross Margin Bookkeeping & Financial Ledger</h2>
          <p class="slide-subtitle">
            Buku besar keuangan toko yang menghitung selisih harga jual dan modal pokok per transaksi untuk menyajikan angka laba kotor harian yang transparan.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card mongo-border">
            <div class="card-label">📈 Real-Time Margin & Profit Analysis</div>
            <div class="card-text">
              Kalkulasi laba bersih otomatis pada setiap struk transaksi yang terselesaikan, memudahkan pemilik bisnis mengevaluasi kesehatan finansial toko.
            </div>
          </div>
          <div class="spring-card">
            <div class="card-label">📄 Filter Tanggal & Export Laporan</div>
            <div class="card-text">
              Filter rentang tanggal kustom untuk merekonsiliasi penerimaan kas kasir saat pergantian shift dan penutupan buku akhir bulan.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Profit Visibility</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Daily</div>
            <div class="metric-desc">Reconciliation</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero</div>
            <div class="metric-desc">Ledger Discrepancy</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/keuangan</div>
            </div>
            <img src="${images.financeDesktop}" class="desktop-img" alt="Finance Profit Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.financeMobile}" class="mobile-img" alt="Finance Profit Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>FINANCIAL RECONCILIATION & PROFIT ENGINE</div>
      <div>PAGE 07 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 08: VENDOR BILLS ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">ACCOUNTS PAYABLE</div>
        <div class="slide-section-title">VENDOR BILLS & ACCOUNTS PAYABLE MANAGEMENT</div>
      </div>
      <div class="slide-page-badge">SLIDE 08</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /tagihan • VENDOR ACCOUNTS PAYABLE</div>
          <h2 class="slide-title">Supplier Invoice Tracking & Expense Ledger</h2>
          <p class="slide-subtitle">
            Pencatatan tagihan pengadaan barang dari vendor pemasok dengan pelacak tanggal jatuh tempo, status pelunasan (Pending / Paid), dan riwayat pengeluaran.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="spring-card orange-border">
            <div class="card-label">📅 Due-Date & Aging Invoice Alerts</div>
            <div class="card-text">
              Pemantauan jadwal jatuh tempo pembayaran faktur supplier untuk menjaga hubungan baik dengan vendor dan menghindari denda keterlambatan.
            </div>
          </div>
          <div class="spring-card">
            <div class="card-label">💳 Payment Status Lifecycle Matrix</div>
            <div class="card-text">
              Transisi status tagihan satu klik saat pembayaran transfer bank dikonfirmasi, otomatis memperbarui pencatatan arus kas keluar toko.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Vendor</div>
            <div class="metric-desc">Audit Trail</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Aging</div>
            <div class="metric-desc">Invoice Tracker</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Payable Control</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">localhost:8081/tagihan</div>
            </div>
            <img src="${images.billsDesktop}" class="desktop-img" alt="Vendor Bills Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.billsMobile}" class="mobile-img" alt="Vendor Bills Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>ACCOUNTS PAYABLE LIFECYCLE & VENDOR DISPATCH</div>
      <div>PAGE 08 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 09: SYSTEM ARCHITECTURE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="spring-pill">TECH STACK</div>
        <div class="slide-section-title">JAVA ENTERPRISE FULLSTACK TOPOLOGY</div>
      </div>
      <div class="slide-page-badge">SLIDE 09</div>
    </div>

    <div style="margin-bottom: 8px;">
      <h2 class="slide-title">Spring Boot 3 MVC & MongoDB Persistence Architecture</h2>
      <p class="slide-subtitle">
        Fondasi kokoh Java 17 LTS enterprise yang menggabungkan Spring Boot 3 MVC framework, basis data dokumen terdistribusi MongoDB 7, dan rendering server Thymeleaf 3.
      </p>
    </div>

    <div class="arch-grid">
      <!-- Backend Core -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>01. JAVA BACKEND CORE</span>
          <span style="color:var(--spring-green);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Spring Boot 3.2.4</div>
          <div class="arch-item-detail">Framework backend Java standar enterprise dengan arsitektur Controller-Service-Repository modular.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Java 17 LTS Runtime</div>
          <div class="arch-item-detail">Pemanfaatan fitur modern Java: Pattern Matching, Records, dan alokasi Garbage Collection teroptimasi.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Spring Security</div>
          <div class="arch-item-detail">Proteksi sesi otorisasi role-based, proteksi serangan CSRF, dan enkripsi kata sandi berbasis BCrypt.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Maven Build Engine</div>
          <div class="arch-item-detail">Manajemen dependensi terstruktur dengan plugin verifikasi kompilasi dan pembuatan artefak executable jar.</div>
        </div>
      </div>

      <!-- Persistence Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>02. MONGODB PERSISTENCE</span>
          <span style="color:var(--mongo-green);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">MongoDB 7.0 Engine</div>
          <div class="arch-item-detail">Basis data dokumen NoSQL berkinerja tinggi untuk penyimpanan fleksibel katalog barang dan faktur transaksi.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Spring Data MongoDB</div>
          <div class="arch-item-detail">Abstraksi antarmuka MongoRepository dengan kueri turunan otomatis dan pemetaan dokumen objek (ODM).</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Aggregation Pipeline</div>
          <div class="arch-item-detail">Prosesor agregasi multi-stage untuk kalkulasi metrik pendapatan dan ranking produk tanpa lag.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Document Indexing</div>
          <div class="arch-item-detail">Indeks komposit pada field barcode dan tanggal transaksi untuk pencarian instan berkecepatan tinggi.</div>
        </div>
      </div>

      <!-- View & Deployment -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>03. VIEW & DEPLOYMENT</span>
          <span style="color:var(--java-orange);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Thymeleaf 3 View Engine</div>
          <div class="arch-item-detail">Server-Side Rendering (SSR) alami yang aman dengan pemisahan tata letak fragmen (fragment layout).</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Bootstrap 5 UI Suite</div>
          <div class="arch-item-detail">Antarmuka kasir dan dasbor bersih yang responsif pada monitor layar kasir maupun tablet mobile.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Docker & Compose</div>
          <div class="arch-item-detail">Kontainerisasi terisolasi yang mengemas aplikasi Spring Boot dan container database MongoDB secara terpadu.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Automated Playwright Auditing</div>
          <div class="arch-item-detail">Verifikasi end-to-end otomatis memastikan seluruh alur kasir dan audit keuangan lulus uji 100%.</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS WEB ARCHITECTURE</div>
      <div>CORE TECH STACK & SYSTEM TOPOLOGY</div>
      <div>PAGE 09 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 10: CLOSING ==================== -->
  <div class="slide closing-slide">
    <div class="spring-pill" style="font-size:12px; padding:6px 16px;">
      SIMPOS ENTERPRISE POS SUITE
    </div>
    <h1 class="closing-title">ENTERPRISE RETAIL POINT-OF-SALE<br>& INVENTORY PLATFORM</h1>
    
    <p style="font-size: 15px; color: #475569; max-width: 680px; font-weight: 500; line-height: 1.5;">
      Solusi sistem kasir dan inventaris ritel enterprise yang menggabungkan stabilitas Java 17 LTS, kecanggihan Spring Boot 3 MVC, keandalan basis data MongoDB 7, dan kecepatan cetak struk termal dalam satu platform terpadu.
    </p>

    <div class="closing-pills">
      <div class="spring-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px;">🍃 SPRING BOOT 3</div>
      <div class="spring-card mongo-border" style="padding: 6px 14px; font-weight: 800; font-size: 11px;">🍃 MONGODB 7</div>
      <div class="spring-card orange-border" style="padding: 6px 14px; font-weight: 800; font-size: 11px;">☕ JAVA 17 LTS</div>
      <div class="spring-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px;">🖨️ 58MM RECEIPT</div>
      <div class="spring-card mongo-border" style="padding: 6px 14px; font-weight: 800; font-size: 11px;">📊 PROFIT LEDGER</div>
    </div>

    <div class="live-hero-card">
      <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; font-weight:700; color:#64748B; letter-spacing:0.08em; text-transform:uppercase;">
        ENTERPRISE DEPLOYMENT READY
      </div>
      <div class="live-url-text">http://localhost:8081/simpos</div>
      <div style="font-size:11px; color:#475569; font-weight:600;">
        Powered by Spring Boot 3.2.4 • Java 17 LTS • MongoDB 7.0 • Thymeleaf 3 • Docker
      </div>
    </div>

    <div class="slide-footer" style="width: 100%; margin-top: 15px;">
      <div>ENGINEERED BY WIDI FIRMANSYAH</div>
      <div>PRODUCTION-READY WEB PLATFORM</div>
      <div>PAGE 10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`📄 Presentation HTML written to: ${htmlFilePath}`);

console.log('🚀 Launching Chromium with Playwright to render Simpos PDF...');

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
  console.log('🖨️  Rendering Multi-Page A4 Landscape Presentation PDF (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('📜 Rendering Continuous Single-Scroll Showcase PDF (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #F1F5F9 !important;
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

  console.log('\n================================================================================');
  console.log('🎉 SIMPOS ENTERPRISE POS ARCHITECTURE PDFS SUCCESSFULLY GENERATED!');
  console.log(`📦 Multi-Page Deck (Slides)   : ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (10 Pages A4 Landscape)`);
  console.log(`   -> Saved: ${slidePdfPath}`);
  console.log(`📦 Continuous Poster (Scroll) : ${(contStat.size / 1024 / 1024).toFixed(2)} MB (1 Long Showcase Page)`);
  console.log(`   -> Saved: ${continuousPdfPath}`);
  console.log('================================================================================\n');
}

renderPDF().catch((err) => {
  console.error('❌ Error during PDF generation:', err);
  process.exit(1);
});
