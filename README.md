# Intramedika — Next.js

Migrasi website Intramedika dari satu file `index.html` ke **Next.js 16 (App Router)** + **Tailwind CSS 3.4** + **TypeScript**.
File `../index.html` asli tidak diubah.

## Menjalankan

```bash
npm install        # sekali saja
npm run dev        # mode pengembangan → http://localhost:3000
npm run build      # build produksi → folder out/
npm run lint       # cek ESLint
```

Hasil `npm run build` adalah **static export** di folder `out/` (HTML/CSS/JS biasa).
Unggah isi folder `out/` ke hosting statis apa pun (cPanel, Netlify, Vercel, GitHub Pages, dll).
Untuk mencoba hasil build secara lokal: `npx serve out`.

## Struktur

```
app/
  layout.tsx              Layout global: font, Navbar, Footer, semua popup, provider bahasa & popup
  page.tsx                Halaman utama (menyusun section)
  jajaran-direksi/page.tsx  Halaman Jajaran Direksi
  globals.css             Tailwind + gaya kustom (dipindahkan dari <style> versi HTML)
components/
  Navbar.tsx              Navbar fixed, garis menu aktif (scrollspy), dropdown Profil, tombol ID | EN
  Footer.tsx
  Direksi.tsx             Data & kartu direksi (tambahkan `photo` untuk foto)
  Modal.tsx               <dialog> yang dikendalikan React
  ModalProvider.tsx       State popup: openModal / closeModal / openContact(produk)
  Icon.tsx                Ikon lucide-react
  sections/*.tsx          14 section halaman utama
  modals/*.tsx            6 popup produk + popup Kontak (form → email)
lib/
  i18n.tsx                LangProvider, useLang(), t()
  dictionary.ts           Kamus terjemahan ID → EN (659 entri)
public/assets/*.webp      Gambar
```

## Bahasa (ID/EN)

- Teks di komponen ditulis dalam Bahasa Indonesia dan dibungkus `t("...")`.
- Terjemahan Inggris ada di `lib/dictionary.ts` dengan kunci = teks Indonesia.
  Kunci `"s5|Sistem"` berarti terjemahan khusus untuk section `#s5`.
- Pilihan bahasa disimpan di `localStorage` dan URL (`?lang=en`), tetap terbawa saat pindah halaman.
- Menambah teks baru: tulis teks Indonesia dengan `t("Teks baru")`, lalu tambahkan `"Teks baru": "New text"` di `dictionary.ts`.
