[![Netlify Status](https://api.netlify.com/api/v1/badges/c3ffa135-e0d0-4b98-9f69-1ee42f85ba79/deploy-status)](https://app.netlify.com/projects/vigarp-kopihub/deploys)

# KopiHub

Platform e-commerce yang menghubungkan petani kopi dengan coffee shop di Indonesia.

## Deskripsi
KopiHub adalah aplikasi web mockup untuk marketplace biji kopi. Petani dapat menjual produk mereka, sementara coffee shop dapat membeli langsung dengan fitur wishlist, pesanan, dan pembayaran simulasi.

## Struktur Folder
```
KopiHub/
├── index.html              # Halaman login (entry point)
├── pages/                  # Halaman HTML lainnya
│   ├── register.html       # Halaman registrasi / pendaftaran akun baru
│   ├── forgot-password.html# Halaman pemulihan / lupa kata sandi
│   ├── home.html           # Beranda dengan B2B Quick Services & katalog
│   ├── sample-kit.html     # Layanan B2B Free Sample Kit 100g
│   ├── subscription.html   # KopiHub Routine (Langganan pasokan berkala hemat 15%)
│   ├── custom-roast.html   # Custom Roasting & Formulator Signature House Blend
│   ├── traceability.html   # Lembar Uji Mutu Q-Grader (Cupping Sheet) & Traceability
│   ├── tracking.html       # Status Kargo Truk & Faktur Komersial B2B (Invoicing)
│   ├── detail-product.html # Detail produk B2B (Tiered pricing & Green/Roasted beans)
│   ├── order.html          # Halaman checkout B2B (Kargo & Credit Terms 14 Hari)
│   ├── payment.html        # Halaman pembayaran & QRIS B2B
│   ├── profile.html        # Profil usaha kedai kopi & akun
│   └── wishlist.html       # Wishlist produk favorit
├── assets/                 # Aset statis
│   ├── css/
│   │   └── styles.css      # CSS custom (jika ada)
│   ├── js/
│   │   └── scripts.js      # JavaScript umum & logika B2B interaktif
│   └── images/             # Gambar (favicon, dll.)
├── README.md               # Dokumentasi ini
├── .gitignore              # File yang diabaikan Git
└── package.json            # Konfigurasi npm
```

## Cara Menjalankan
1. Clone atau download proyek ini.
2. Buka `index.html` di browser, atau gunakan live server:
   ```bash
   npm install -g live-server
   live-server
   ```
3. Navigasi antar halaman via link atau bottom navigation.

## Fitur Unggulan B2B (Sesuai Proposal Bisnis KopiHub)
- **Autentikasi Lengkap**: Login multi-role, Pendaftaran akun bisnis, dan Lupa kata sandi.
- **Katalog & Filter Dinamis**: Penyaringan Arabica, Robusta, Specialty, Pre-order Panen, serta pencarian real-time.
- **B2B Free Sample Kit (100g)**: Fasilitas sampel kopi gratis bagi coffee shop & roastery sebelum pemesanan grosir.
- **KopiHub Routine Subscription**: Jadwal pasokan rutin berkala dengan diskon tetap 15% dan gratis ongkir kargo.
- **Custom Roasting & House Blend**: Formulator racikan rasio biji (Arabica/Robusta) dan profil sangrai khas kedai.
- **Quality & Traceability Certificate**: Lembar kurasi SCA Cupping Score resmi oleh Q-Grader, uji kadar air (<12%), dan data asal kebun.
- **Pelacakan Logistik Kargo & Invoicing**: Tracking resi ekspedisi kargo (SLA 1x24 jam) dan termin pembayaran tempo 14 hari (B2B Credit Terms).

## Teknologi
- **Frontend**: HTML5, CSS (Tailwind CSS), JavaScript vanilla.
- **Styling**: Tailwind CSS via CDN.
- **Icons**: Emoji dan SVG inline.

## Pengembangan Selanjutnya
- **Backend**: Integrasi Node.js + Express + MongoDB untuk API.
- **Framework**: Migrasi ke Vue.js atau React untuk SPA.
- **Database**: Simpan data produk, user, dan pesanan.
- **Authentication**: JWT untuk login nyata.
- **Deployment**: Host di Vercel/Netlify.

## Kontribusi
Jika ingin berkontribusi, buat issue atau pull request di repository GitHub.

## Lisensi
Proyek ini untuk tujuan edukasi dan mockup.