# KopiHub

Platform e-commerce yang menghubungkan petani kopi dengan coffee shop di Indonesia.

## Deskripsi
KopiHub adalah aplikasi web mockup untuk marketplace biji kopi. Petani dapat menjual produk mereka, sementara coffee shop dapat membeli langsung dengan fitur wishlist, pesanan, dan pembayaran simulasi.

## Struktur Folder
```
KopiHub/
├── index.html              # Halaman login (entry point)
├── pages/                  # Halaman HTML lainnya
│   ├── home.html           # Beranda dengan list produk
│   ├── detail-product.html # Detail produk
│   ├── order.html          # Halaman pesanan
│   ├── payment.html        # Halaman pembayaran
│   ├── profile.html        # Profil pengguna
│   └── wishlist.html       # Wishlist produk
├── assets/                 # Aset statis
│   ├── css/
│   │   └── styles.css      # CSS custom (jika ada)
│   ├── js/
│   │   └── scripts.js      # JavaScript umum
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

## Fitur
- **Login**: Simulasi login sebagai Petani atau Coffee Shop.
- **Browse Produk**: List biji kopi dengan filter kategori.
- **Detail Produk**: Informasi lengkap, quantity selector.
- **Wishlist**: Simpan produk favorit.
- **Pesanan**: Checkout dengan kalkulasi harga.
- **Pembayaran**: Simulasi QRIS/VA.
- **Profil**: Info akun dan logout.

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