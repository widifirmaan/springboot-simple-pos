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
    console.warn(`Peringatan: Screenshot tidak ditemukan: ${filePath}`);
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
  receiptDesktop: encodeImage('POS Cashier Receipt Desktop.png'),
  analyticsDesktop: encodeImage('POS Analytics Dashboard Desktop.png'),
  analyticsMobile: encodeImage('POS Analytics Dashboard Mobile.png'),
  stockDesktop: encodeImage('POS Stock Inventory Catalog Desktop.png'),
  stockMobile: encodeImage('POS Stock Inventory Catalog Mobile.png'),
  financeDesktop: encodeImage('POS Finance Profit Ledger Desktop.png'),
  billsDesktop: encodeImage('POS Vendor Bills Table Desktop.png'),
};

console.log('Menyusun HTML presentasi dengan style murni Simpos Soft UI Dashboard...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
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
            Arsitektur Web Kasir Enterprise Point of Sale
          </h1>
          <p style="font-size: 15px; color: var(--text-muted); line-height: 1.55; margin-bottom: 24px;">
            Sistem kasir dan manajemen ritel modern dengan pemrosesan transaksi cepat, kontrol inventaris atomik multi-gudang, buku besar keuangan terpadu, dan antarmuka Soft UI Dashboard yang ergonomis.
          </p>
          <div class="soft-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">DATABASE</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--accent-orange); margin-top: 2px;">MongoDB</div>
              <div style="font-size: 11px; color: var(--text-muted);">Document Store</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">DESAIN SISTEM</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-top: 2px;">Soft UI</div>
              <div style="font-size: 11px; color: var(--text-muted);">Sunset Orange #F97316</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">TRANSAKSI</div>
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

  <!-- SLIDE 2: LATAR BELAKANG & SPESIFIKASI TEKNIS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Arsitektur &amp; Fondasi</div>
        <div class="brand-subtitle">Spesifikasi Kebutuhan Sistem</div>
      </div>
      <div class="badge-pill">DECK-POS-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Fondasi Rekayasa Backend &amp; Web</div>
        <h2 class="slide-title">Kebutuhan Kecepatan Checkout &amp; Konsistensi Data Ritel</h2>
        <p class="slide-subtitle">Menghubungkan kehandalan Java 21 dengan fleksibilitas skema NoSQL untuk volume transaksi penjualan tinggi.</p>
      </div>

      <div class="layout-grid-3">
        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">01 &bull; TANTANGAN SISTEM</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Antrean Checkout Kasir</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Proses kasir yang lambat saat jam sibuk mengakibatkan penumpukan antrean pembeli, menuntut latensi pemindaian barcode di bawah 100ms.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">02 &bull; SOLUSI ARSITEKTUR</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Spring Boot &amp; Mongo Index</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Pengindeksan majemuk pada kolom barcode produk dan caching memori sesi kasir yang menjamin pencarian item seketika tanpa jeda I/O.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">03 &bull; ERGONOMI KASIR</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Soft UI Dashboard Clean</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Estetika neomorfik halus berlatar putih bersih dengan kontras tinggi yang ramah mata dan mempercepat orientasi navigasi staf kasir.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; ARSITEKTUR SISTEM</div>
      <div>TRANSACTION SPEED STANDARDS</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: AUTENTIKASI & KEAMANAN SESI KASIR -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Keamanan Sesi</div>
        <div class="brand-subtitle">Spring Security RBAC &amp; Cashier Session</div>
      </div>
      <div class="badge-pill">DECK-POS-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Kontrol Akses Pengguna</div>
        <h2 class="slide-title">Autentikasi Multi-Peran &amp; Isolasi Hak Akses Kasir</h2>
        <p class="slide-subtitle">Sistem keamanan berbasis peran (Admin, Kasir, Manager) dengan proteksi pemalsuan permintaan lintas situs (CSRF).</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.loginDesktop}" alt="Simpos Login Screen Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Enkripsi Kata Sandi BCrypt</div>
            <div class="feature-item-desc">
              Penyimpanan kredensial dengan fungsi hash adaptif berbobot komputasi tinggi untuk menangkal serangan brute-force.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Validasi Sesi Aktif Kasir</div>
            <div class="feature-item-desc">
              Pengikatan sesi ke identitas terminal kasir spesifik yang membatasi akses modul inventaris dan keuangan hanya untuk manajer.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Peringatan Kredensial Tidak Valid</div>
            <div class="feature-item-desc">
              Umpan balik pesan kesalahan visual terstruktur yang tidak membocorkan keberadaan username untuk memitigasi enumeration attack.
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

  <!-- SLIDE 4: TERMINAL KASIR & PEMROSESAN CEPAT -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Operasional Kasir</div>
        <div class="brand-subtitle">Fast Barcode Scanning &amp; Cart State</div>
      </div>
      <div class="badge-pill">DECK-POS-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Terminal Penjualan Langsung</div>
        <h2 class="slide-title">Terminal Kasir Berkecepatan Tinggi dengan Buffer Barcode</h2>
        <p class="slide-subtitle">Antarmuka kasir responsif dengan penambahan kuantitas barang otomatis saat pemindai laser memindai kode batang.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Input Pemindai Barcode Tanpa Fokus Hilang</div>
            <div class="feature-item-desc">
              Manajemen event listener keyboard yang secara otomatis mengarahkan hasil pindai barcode ke keranjang belanja aktif.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Kalkulasi Subtotal &amp; Pajak Real-Time</div>
            <div class="feature-item-desc">
              Penghitungan diskon kupon, PPN ritel, dan total harga secara instan di sisi klien dengan sinkronisasi ke server Spring Boot.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Pemberitahuan Stok Habis (Out-of-Stock Alert)</div>
            <div class="feature-item-desc">
              Pencegahan penjualan barang jika kuantitas stok di gudang tidak mencukupi melalui validasi atomik sebelum transaksi dicatat.
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

  <!-- SLIDE 5: CHECKOUT & RESI STRUK POS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Penyelesaian Transaksi</div>
        <div class="brand-subtitle">Checkout Summary &amp; Thermal Receipt Engine</div>
      </div>
      <div class="badge-pill">DECK-POS-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Penyelesaian Pembayaran</div>
        <h2 class="slide-title">Modal Konfirmasi Checkout &amp; Format Struk Termal</h2>
        <p class="slide-subtitle">Perhitungan kembalian tunai akurat dan pencetakan struk transaksi yang kompatibel dengan printer termal 58mm/80mm.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.receiptDesktop}" alt="Simpos Cashier Receipt Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Modal Kalkulasi Uang Diterima &amp; Kembalian</div>
            <div class="feature-item-desc">
              Input denominasi uang cepat (Rp 50.000, Rp 100.000) yang mempercepat waktu penghitungan uang tunai oleh petugas kasir.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Tata Letak Struk Monospace Ramah Termal</div>
            <div class="feature-item-desc">
              Format struk menggunakan font monospaced JetBrains Mono yang terhindar dari pergeseran kolom saat dicetak pada kertas termal.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Penyimpanan ID Transaksi Unik (UUID)</div>
            <div class="feature-item-desc">
              Setiap struk dilengkapi nomor invoice unik dan kode barcode verifikasi untuk mempermudah proses retur atau klaim pelanggan.
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

  <!-- SLIDE 6: MANAJEMEN INVENTARIS & STOK -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Kontrol Inventaris</div>
        <div class="brand-subtitle">Stock Management &amp; Atomic Deductions</div>
      </div>
      <div class="badge-pill">DECK-POS-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Pengelolaan Persediaan Barang</div>
        <h2 class="slide-title">Katalog Inventaris Produk &amp; Pengurangan Stok Atomik</h2>
        <p class="slide-subtitle">Pencatatan persediaan barang dengan operasi pembaruan $inc MongoDB guna mencegah fenomena race-condition.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Operasi Pengurangan Stok Atomik ($inc: -qty)</div>
            <div class="feature-item-desc">
              Pengurangan stok langsung pada basis data tanpa membaca dan menulis ulang manual untuk menjamin konsistensi multi-kasir.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Peringatan Batas Minimum Stok (Low Stock)</div>
            <div class="feature-item-desc">
              Indikator warna oranye menyala pada baris produk yang kuantitasnya telah menyentuh batas ambang pemesanan ulang (reorder level).
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Manajemen Kategori &amp; Unit Satuan</div>
            <div class="feature-item-desc">
              Klasifikasi fleksibel berdasarkan jenis barang (makanan, minuman, elektronik) serta satuan kemasan (pcs, dus, pack).
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

  <!-- SLIDE 7: BUKU BESAR KEUANGAN & LABA-RUGI -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Audit Finansial</div>
        <div class="brand-subtitle">Profit Ledger &amp; Financial Reporting</div>
      </div>
      <div class="badge-pill">DECK-POS-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Pencatatan Finansial Usaha</div>
        <h2 class="slide-title">Buku Besar Transaksi &amp; Perhitungan Margin Keuntungan</h2>
        <p class="slide-subtitle">Audit transaksi harian otomatis yang memisahkan harga pokok penjualan (HPP) dari total margin laba bersih.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.financeDesktop}" alt="Simpos Finance Profit Ledger Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Pemisahan HPP &amp; Laba Kotor Otomatis</div>
            <div class="feature-item-desc">
              Pencatatan harga modal produk pada saat transaksi terjadi sehingga laporan keuntungan historis tidak terdistorsi fluktuasi harga baru.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Penyaringan Tanggal &amp; Shift Kasir</div>
            <div class="feature-item-desc">
              Kemudahan bagi pengelola untuk merekonsiliasi kas penutupan shift kasir berdasarkan rentang jam operasional tertentu.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Audit Trail Tidak Dapat Diubah (Immutable Log)</div>
            <div class="feature-item-desc">
              Setiap catatan mutasi finansial tersimpan permanen bersama cap waktu ISO untuk mencegah manipulasi data pembukuan toko.
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

  <!-- SLIDE 8: PENGELOLAAN TAGIHAN VENDOR -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Hutang &amp; Vendor</div>
        <div class="brand-subtitle">Vendor Bills &amp; Accounts Payable</div>
      </div>
      <div class="badge-pill">DECK-POS-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Manajemen Rantai Pasok</div>
        <h2 class="slide-title">Pengendalian Faktur Pemasok &amp; Jadwal Jatuh Tempo</h2>
        <p class="slide-subtitle">Pencatatan pengadaan barang dari vendor dengan status verifikasi pembayaran lunas atau termin berjangka.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="visual-stage">
          <img src="${images.billsDesktop}" alt="Simpos Vendor Bills Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Pelacakan Status Faktur (Paid / Pending)</div>
            <div class="feature-item-desc">
              Badge visual warna hijau untuk tagihan yang telah diselesaikan dan kuning menyala untuk tagihan yang mendekati tanggal jatuh tempo.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Integrasi Otomatis ke Stok Masuk</div>
            <div class="feature-item-desc">
              Penerimaan faktur vendor yang disetujui secara otomatis menambah kuantitas stok barang pada katalog inventaris tanpa entri ganda.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Ekspor Dokumen ke Format Excel/PDF</div>
            <div class="feature-item-desc">
              Kemudahan penyusunan berkas pelaporan pajak dan pembayaran suplier melalui tombol unduh data terformat rapi.
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

  <!-- SLIDE 9: DASBOR ANALITIK & KINERJA -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Kecerdasan Bisnis</div>
        <div class="brand-subtitle">Analytics Dashboard &amp; Sales Insights</div>
      </div>
      <div class="badge-pill">DECK-POS-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Pemantauan Metrik Bisnis</div>
        <h2 class="slide-title">Visualisasi Metrik Omzet Harian &amp; Tren Penjualan</h2>
        <p class="slide-subtitle">Grafik interaktif yang menyajikan ringkasan omzet, produk terlaris, dan performa kasir secara waktu nyata.</p>
      </div>

      <div class="layout-grid-3">
        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">AGREGASI MONGODB</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Pipeline $group &amp; $sum</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Pengolahan jutaan data transaksi penjualan langsung pada server basis data MongoDB tanpa membebani memori heap Java aplikasi Spring Boot.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">TOP PERFORMING ITEMS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Ranking Produk Terlaris</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Identifikasi produk unggulan yang paling banyak dibeli guna memandu strategi promosi dan pengadaan stok kembali secara presisi.
          </p>
        </div>

        <div class="soft-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-orange); margin-bottom: 8px;">RESPONSIVITAS DASBOR</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Chart.js Hardware Accelerated</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Rendering kurva penjualan menggunakan HTML5 Canvas dengan frame rate mulus tanpa menghambat pemuatan komponen tabel data di sekitarnya.
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

  <!-- SLIDE 10: RANGKUMAN ARSITEKTUR & PRODUKSI -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Ringkasan Proyek</div>
        <div class="brand-subtitle">Spesifikasi Akhir &amp; Kesiapan Produksi</div>
      </div>
      <div class="badge-pill">DECK-POS-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Rangkuman Akhir Rekayasa</div>
        <h2 class="slide-title">Kesimpulan Implementasi Sistem Simpos POS</h2>
        <p class="slide-subtitle">Solusi kasir ritel kelas enterprise yang menggabungkan keandalan Spring Boot, kecepatan MongoDB, dan keanggunan Soft UI.</p>
      </div>

      <div class="layout-grid-4">
        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">BACKEND</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-orange); margin-top: 4px; margin-bottom: 4px;">Spring Boot 3</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Eksekusi Java 21 LTS dengan Spring Data MongoDB teruji.</p>
        </div>

        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">DATABASE</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-orange); margin-top: 4px; margin-bottom: 4px;">MongoDB NoSQL</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Pengurangan stok atomik dan pipeline agregasi bisnis.</p>
        </div>

        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">UI DESIGN</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--text-dark); margin-top: 4px; margin-bottom: 4px;">Soft UI System</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Palet Sunset Orange ramah mata dengan elevasi 3D.</p>
        </div>

        <div class="soft-card">
          <div style="font-size: 11px; color: var(--text-subtle); font-family: 'JetBrains Mono', monospace;">STATUS</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-green); margin-top: 4px; margin-bottom: 4px;">Siap Produksi</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Dukungan printer termal dan layout responsif seluler.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.analyticsDesktop}" alt="Simpos Analytics Dashboard Final View">
      </div>
    </div>

    <div class="slide-footer">
      <div>SIMPOS &bull; KESIMPULAN REKAYASA SISTEM</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

console.log('Menjalankan Playwright Chromium untuk render PDF Simpos Soft UI Dashboard...');

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

  console.log('\nPDF Simpos Soft UI Dashboard berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error saat render PDF:', err);
  process.exit(1);
});
