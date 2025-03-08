# File Encryption & Decryption (AES-128)

Proyek ini adalah aplikasi berbasis web untuk mengenkripsi dan mendekripsi file menggunakan algoritma AES-128. Aplikasi ini dibuat menggunakan Next.js dengan React dan Tailwind CSS. [Encrypt-Decrypt-AES128]()

## 🚀 Fitur

- 🔐 **Enkripsi File**: Mengubah file asli menjadi format terenkripsi (`.enc`).
- 🔓 **Dekripsi File**: Mengembalikan file terenkripsi ke bentuk aslinya.
- 🔑 **Keamanan**: Menggunakan kunci 16 karakter untuk enkripsi dan dekripsi.
- 📂 **Dukungan Berbagai Format**: Mendukung berbagai jenis file untuk dienkripsi.

## 📂 Struktur Folder

```
📦 project-folder
 ┣ 📂 public
 ┃ ┗ 📄 favicon.ico
 ┣ 📂 pages
 ┃ ┣ 📄 _app.js
 ┃ ┣ 📄 encrypt.js
 ┃ ┣ 📄 decrypt.js
 ┃ ┗ 📄 navbar.js
 ┣ 📂 styles
 ┃ ┗ 📄 globals.css
 ┣ 📂 utils
 ┃ ┗ 📄 encryption.js
 ┣ 📄 .gitignore
 ┣ 📄 package.json
 ┣ 📄 README.md
 ┗ 📄 next.config.js
```

## 🔧 Instalasi & Menjalankan Proyek

1. **Clone repository**

   ```sh
   git clone https://github.com/username/encryption-app.git
   cd encryption-app
   ```

2. **Install dependencies**

   ```sh
   npm install  # atau yarn install
   ```

3. **Jalankan aplikasi**

   ```sh
   npm run dev  # atau yarn dev
   ```

4. **Buka di browser**

   ```
   http://localhost:3000
   ```

## ⚡ Cara Menggunakan

### **1️⃣ Enkripsi File**

- Pilih file yang ingin dienkripsi.
- Masukkan kunci 16 karakter.
- Klik tombol **Encrypt File**.
- File hasil enkripsi (`.enc`) akan otomatis terunduh.

### **2️⃣ Dekripsi File**

- Pilih file dengan ekstensi `.enc`.
- Masukkan kunci yang digunakan saat enkripsi.
- Klik tombol **Decrypt & Download**.
- File asli akan otomatis terunduh jika kunci benar.

## 🛠 Teknologi yang Digunakan

- **Next.js** (React Framework)
- **Tailwind CSS** (Styling)
- **CryptoJS** (Enkripsi & Dekripsi)

## 📜 Lisensi

Proyek ini menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

💡 **Catatan**: Pastikan kunci yang digunakan untuk enkripsi dan dekripsi **sama** agar file dapat dikembalikan ke bentuk aslinya!

