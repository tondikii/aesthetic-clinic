<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Aturan Operasional — Lumière Aesthetic Clinic

### 1. Struktur & Konvensi Komponen

- 1 file per section: `components/sections/<NamaSection>.tsx` (PascalCase). Komponen kecil non-section (tombol WA, badge, dll.) di `components/ui/`.
- Halaman tunggal: `app/page.tsx` menyusun section sesuai urutan di `PRD.md`.
- **SEMUA** teks, angka, link gambar, URL WA, dan data array ada di `content.ts` — DILARANG hardcode konten di komponen. Komponen hanya berisi struktur, styling, dan logika animasi.
- Design token (warna/font/spacing) dari `design-system/lumiere-aesthetic-clinic/` — baca `MASTER.md` lalu `pages/landing.md` (override) SEBELUM menulis styling apa pun.

### 2. Sumber Keputusan Desain & Komponen (WAJIB)

- Keputusan warna/font/spacing/UX: **wajib** pakai skill `ui-ux-pro-max` (search CLI-nya) — jangan install/cari skill desain lain.
- Sebelum membuat komponen standar dari nol (navbar, accordion, carousel, dst.): **wajib cek MCP 21st.dev** (`search` → `get_component`) dan adaptasi bila ada yang cocok.
- **Pengecualian permanen:** before/after slider WAJIB custom-built (lihat skill `before-after-slider`).
- Skill tambahan yang boleh dipakai bila relevan (sudah terpasang): `ui-styling` (pola shadcn/ui + Tailwind).

### 3. Animasi — Standar Terpusat

- Hanya Framer Motion (package `motion`). Dilarang CSS animation untuk reveal/interaksi utama.
- Semua variants & spring config HARUS dari `lib/motion.ts` — jangan definisikan spring/variants inline di section. Standar di sana minimal:
  - `springs.hover`: stiffness 300, damping 25
  - `springs.interactive`: stiffness 400, damping 40 (drag/slider)
  - `eases.primary`: `[0.22, 1, 0.36, 1]`
  - `variants.fadeUp`, `variants.maskReveal` (headline per-baris), `variants.staggerChildren(delay)`
- Reveal: `whileInView` + `once: true`, viewport margin `-80px`.
- Hanya animasikan `transform` & `opacity` (jangan layout/width/height di loop panas). Scroll-linked: `useScroll` + `useTransform` (transform saja).
- **`prefers-reduced-motion`**: semua animasi degenerate ke fade pendek tanpa transform/parallax; carousel tidak auto-advance; count-up langsung final.

### 4. Compliance Konten Medis (RULE PERMANEN — berlaku juga untuk edit/iterasi di masa depan)

- Dilarang: "sembuh total", "dijamin", "permanen", "instant", klaim angka hasil pasti, superlatif "terbaik #1".
- Wajib: bahasa suportif-deskriptif + disclaimers ("hasil dapat berbeda tiap individu").
- Testimoni = pengalaman pelayanan/suasana, bukan hasil medis.
- Badge trust hanya klaim terverifikasi (izin klinik, gelar dokter) — bukan klaim efikasi.
- CTA booking hanya via link WhatsApp (`wa.me`), tanpa form email/backend.

### 5. Aksesibilitas Dasar

- Kontras teks ≥ 4.5:1; focus ring terlihat di semua interaktif.
- Before/after slider: `role="slider"` + arrow keys + aria-valuenow.
- Carousel testimoni: tombol prev/next + keyboard, pause on hover/focus.
- Accordion FAQ: keyboard enter/space, `aria-expanded`.
- Ikon dekoratif `aria-hidden`; ikon bermakna punya label.
- Touch target ≥ 44px; `alt` deskriptif (Bahasa Indonesia) untuk semua foto.
- Responsive wajib diuji 375px / 768px / 1024px / 1440px.

### 6. Konvensi Lain

- Bahasa UI & konten: Bahasa Indonesia natural. Komentar kode & naming: Inggris, minimal (jangan tambahkan komentar kecuali diminta).
- Gambar via `next/image`; prioritas LCP hanya hero.
- Sebelum menulis kode Next.js apa pun, baca dokumen di `node_modules/next/dist/docs/` (versi Next ini punya breaking changes — lihat blok di atas).
- Setelah selesai: jalankan `npm run lint` + `npm run build` sebelum dianggap selesai.
