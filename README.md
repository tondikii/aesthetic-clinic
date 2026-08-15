# Lumière Aesthetic Clinic

Landing page portfolio statis untuk template klinik kecantikan medis Indonesia. Dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, dan `motion`.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Struktur Konten

- `content.ts`: satu-satunya sumber copy, angka, URL gambar, data section, dan URL WhatsApp.
- `components/sections/`: satu file untuk setiap section landing page.
- `components/ui/`: primitive reusable seperti tombol WhatsApp dan section heading.
- `lib/motion.ts`: shared variants, easing, dan spring configuration.
- `design-system/lumiere-aesthetic-clinic/`: token visual global dan override landing page.
- `.opencode/skills/before-after-slider/`: pola reusable slider before/after custom.

## Cara Reskin

1. Ubah nama brand, copy, harga, gambar, data dokter, testimoni, alamat, dan URL sosial di `content.ts`.
2. Ubah warna, font, dan spacing melalui `design-system/lumiere-aesthetic-clinic/pages/landing.md`, lalu sinkronkan CSS variables di `app/globals.css`.
3. Ganti nomor WhatsApp pada `siteContent.brand.whatsapp`. Helper `whatsappUrl()` otomatis membentuk link `https://wa.me/<nomor>?text=<pesan>`.
4. Untuk gambar remote baru, tambahkan hostname ke `remotePatterns` di `next.config.ts` dan tetap gunakan `next/image`.
5. Pertahankan aturan compliance medis di `AGENTS.md`: hindari klaim pasti/berlebihan, gunakan bahasa suportif, dan pertahankan disclaimer hasil yang dapat berbeda.

## Verifikasi

```bash
npm run lint
npm run build
```

Target responsive: 375px, 768px, 1024px, dan 1440px. CTA booking template hanya menggunakan WhatsApp; tidak ada database, auth, form email, atau backend.

## Deploy

Project siap dideploy ke Vercel sebagai halaman statis.
