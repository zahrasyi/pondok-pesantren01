# Pondok Pesantren Daarul Huda - Website Resmi

Website profil resmi untuk Pondok Pesantren Daarul Huda Li Tahfidzil Qur'an. Proyek ini dibangun menggunakan arsitektur modern (Jamstack) untuk memastikan performa yang cepat, aman, dan mudah dikelola.

## 🚀 Teknologi yang Digunakan

*   **Framework Frontend:** [Next.js](https://nextjs.org/) (React)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Headless CMS:** [Sanity.io](https://www.sanity.io/)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Bahasa Pemrograman:** TypeScript

## ✨ Fitur Utama

*   **Desain Responsif:** Tampilan yang optimal di perangkat *mobile*, tablet, maupun *desktop*.
*   **Manajemen Konten Dinamis:** Pengurus pesantren dapat memperbarui berita, pengumuman, dan galeri dengan mudah melalui *dashboard* Sanity Studio tanpa perlu menyentuh kode.
*   **Optimasi Performa:** Menggunakan komponen gambar bawaan Next.js dan *server-side rendering* untuk kecepatan *loading* maksimal.

## 🛠️ Cara Menjalankan di Komputer Lokal (Development)

Untuk menjalankan proyek ini di komputermu sendiri, ikuti langkah-langkah berikut:

### 1. Persiapan
Pastikan komputermu sudah terinstal [Node.js](https://nodejs.org/) dan Git.

### 2. Kloning Repository
Buka terminal dan jalankan perintah:
\`\`\`bash
git clone https://github.com/USERNAME-GITHUB/NAMA-REPOSITORY.git
cd NAMA-REPOSITORY
\`\`\`
*(Catatan: Ganti URL di atas dengan link repository GitHub milikmu).*

### 3. Instalasi Dependencies
Jalankan perintah ini untuk mengunduh semua paket yang dibutuhkan:
\`\`\`bash
npm install
\`\`\`

### 4. Pengaturan Environment Variables
Buat sebuah file baru bernama `.env.local` di folder utama proyek (sejajar dengan file `package.json`). Masukkan kunci rahasia Sanity di bawah ini:
\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID="isi_dengan_project_id_sanity_anda"
NEXT_PUBLIC_SANITY_DATASET="production"
\`\`\`
*(Catatan: Hubungi pengembang untuk mendapatkan akses ID Sanity).*

### 5. Menjalankan Server Frontend (Website)
Jalankan perintah:
\`\`\`bash
npm run dev
\`\`\`
Buka [http://localhost:3000](http://localhost:3000) di browsermu untuk melihat hasilnya.

### 6. Menjalankan Sanity Studio (Dashboard Admin)
Untuk mengelola konten, jalankan perintah ini di tab terminal baru:
\`\`\`bash
npm run sanity dev
\`\`\`
*(Atau sesuaikan dengan script yang ada di package.json milikmu untuk menjalankan Sanity lokal).*

## 📦 Panduan Deployment

Proyek ini telah dikonfigurasi untuk di-*deploy* dengan mulus ke **Vercel**. 
Setiap kali ada perubahan kode yang di-*push* ke *branch* `main` di GitHub, Vercel akan otomatis memperbarui situs yang *live*.

**Penting saat Deployment:** Pastikan untuk menambahkan `NEXT_PUBLIC_SANITY_PROJECT_ID` dan `NEXT_PUBLIC_SANITY_DATASET` pada menu *Environment Variables* di pengaturan proyek Vercel Anda. Serta pastikan domain Vercel/domain kustom telah didaftarkan pada menu **CORS Origins** di *dashboard* Sanity.

## 📄 Lisensi

Hak Cipta © 2026 Pondok Pesantren Daarul Huda.
