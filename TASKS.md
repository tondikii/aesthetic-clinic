# TASKS.md — Implementasi Landing Page Lumière Aesthetic Clinic

Referensi: `PRD.md` (acceptance criteria), `AGENTS.md` (atururan operasional), `design-system/lumiere-aesthetic-clinic/` (token). Subagent: `section-builder` (build), `motion-design-reviewer` (audit desain/animasi), `content-guardian` (audit compliance/a11y).

## Fase 1 — Build

### 1.1 Scaffold & Fondasi
- [x] Verifikasi scaffold Next.js App Router + TypeScript + Tailwind (repo sudah ada `package.json`, `postcss.config.mjs`, `tsconfig.json`); baca dokumen Next versi ini di `node_modules/next/dist/docs/`
- [x] Install dependencies: `motion`, `@phosphor-icons/react`
- [x] Verifikasi & persist design system (`design-system/lumiere-aesthetic-clinic/MASTER.md` + `pages/landing.md`) — SUDAH dibuat; validasi token masuk ke Tailwind config (warna token, font, spacing 8px)
- [x] Setup Google Fonts (Plus Jakarta Sans + Inter) via `next/font`
- [x] Setup `content.ts` — struktur data lengkap semua section (nav, hero, trust bar, treatments + harga Rp, before/after sets, dokter, keunggulan, testimoni, suasana/lokasi, FAQ, CTA, footer, URL WA terpusat) dengan konten Bahasa Indonesia patuh compliance
- [x] Setup `lib/motion.ts` — `springs.hover` (300/25), `springs.interactive` (400/40), `eases.primary` `[0.22,1,0.36,1]`, `variants.fadeUp`, `variants.maskReveal`, `variants.staggerChildren`, helper `useReducedMotion` wrapper

### 1.2 Komponen Inti
- [x] Cek MCP 21st.dev untuk: navbar, accordion FAQ, carousel testimoni, kartu — adaptasi bila cocok (catat keputusan); before/after slider TIDAK boleh dari MCP
- [x] `components/ui/` — tombol WhatsApp (wa.me, pre-filled text), badge trust, section heading, kartu dasar
- [x] Custom before/after slider sesuai skill `before-after-slider` (useMotionValue + clip-path, role=slider, keyboard, multi-set, reduced-motion)

### 1.3 Build Semua Section (urutan PRD §2)
- [x] Navbar (sticky, transparan→solid >24px, menu mobile full-screen stagger, CTA WA pill)
- [x] Hero (headline mask-reveal per-baris, foto layered parallax useScroll, dual CTA, badge izin, priority LCP)
- [x] Trust Bar (4 item, count-up 1.2s + reduced-motion instan)
- [x] Treatment (6 kartu + harga Rp + CTA WA per kartu, stagger 70ms, hover spring lift)
- [x] Before/After Showcase (slider custom + 3 set foto + thumbnail, crossfade 0.4s)
- [x] Tim Dokter (3 kartu, hover zoom foto 1.05)
- [x] Kenapa Pilih Kami (2×2 offset, ikon draw-in pathLength)
- [x] Testimoni (carousel prev/next + keyboard + auto-advance 6s pause on hover/focus, avatar inisial)
- [x] Suasana & Lokasi (grid foto clip-path reveal, kartu lokasi + jam + Maps)
- [x] FAQ (accordion AnimatePresence height auto, chevron spring, aria-expanded, 1 terbuka)
- [x] CTA Final (panel teal gelap, mask-reveal, pulse-ring 1×)
- [x] Footer (link underline slide, legal placeholder)
- [x] Susun `app/page.tsx` sesuai urutan PRD

### 1.4 Verifikasi Fase 1
- [x] Responsive 375 / 768 / 1024 / 1440px — semua section
- [x] `prefers-reduced-motion` aktif di semua animasi (fade pendek, tanpa parallax, carousel tanpa auto-advance, count-up instan)
- [x] `npm run lint` + `npm run build` lolos tanpa error
- [x] Review oleh `motion-design-reviewer` (desain/animasi/performa) — perbaiki semua BLOCKER/MAJOR
- [x] Review oleh `content-guardian` (compliance/a11y/konsistensi konten) — perbaiki semua BLOCKER/MAJOR

**STOP — review checkpoint Fase 1** (presentasi ke pemilik proyek sebelum lanjut)

## Fase 2 — Polish & Delivery Readiness

(Dipisah dari Fase 1 karena audit menyeluruh baru bermakna setelah semua section selesai dan ter-review; build + audit tidak dicampur agar checkpoint bersih.)

- [x] Audit performa animasi 60fps termasuk mobile (tanpa layout thrash di drag slider, tanpa re-render per frame, cek via profiling `npm run build` + inspeksi)
- [x] Optimasi gambar: semua via `next/image` + `sizes` benar, hanya hero `priority`, format modern
- [x] Sweep aksesibilitas final: focus order, kontras AA semua pasangan token, touch target ≥ 44px, aria lengkap (slider/carousel/accordion)
- [x] Sweep compliance konten final (content-guardian) — pastikan nol BLOCKER
- [x] Smoke test `npm run build` final + verifikasi output produksi
- [x] Tulis catatan cara reskin di README (ganti konten via `content.ts`, ganti token warna via Tailwind config + `design-system/`, format URL WA)

**STOP — review checkpoint Fase 2** (delivery final untuk review pemilik proyek)
