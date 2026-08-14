# PRD — Landing Page "Lumière Aesthetic Clinic"

**Produk:** Landing page statis 1 halaman (template demo/portfolio) untuk niche klinik kecantikan medis, pasar Indonesia.
**Tujuan konversi:** klik CTA WhatsApp (`wa.me`). Tanpa database/auth/backend/form.
**Bahasa:** Seluruh konten Bahasa Indonesia natural. Semua teks/angka/referensi gambar dari `content.ts`.
**Design system:** dikunci oleh skill `ui-ux-pro-max` — Master: `design-system/lumiere-aesthetic-clinic/MASTER.md`, override warna/font: `design-system/lumiere-aesthetic-clinic/pages/landing.md`.

## 1. Positioning & Prinsip Konversi

Flow section mengikuti journey riset-sebelum-booking end-user (perempuan urban 25–45 yang menemukan klinik via Instagram): **tarik perhatian → bangun trust → tunjukkan layanan & harga (transparan, Rp) → buktikan hasil (before/after) → kredibilitas personal (dokter) → hilangkan keraguan (kenapa kami, testimoni, suasana klinik) → jawab keberatan (FAQ) → dorong booking (CTA WA)**.

## 2. Urutan Section Final + Alasan

| # | Section | Alasan posisi |
|---|---------|---------------|
| 1 | **Navbar** (sticky) | Navigasi + CTA WA selalu tersedia |
| 2 | **Hero** | Hook + value proposition + dual CTA (WA primer, "Lihat Treatment" sekunder) |
| 3 | **Trust Bar** (gabungan trust signal + social proof) | Strip tipis langsung di bawah hero — validasi instan sebelum user scroll jauh: "Dokter Berlisensi", "Klinik Berizin", rating Google, jumlah pasien |
| 4 | **Treatment Unggulan** | Interest: kartu treatment + harga Rp transparan (faktor riset utama pasar ID) |
| 5 | **Before/After Showcase** ⭐ | Evaluasi: bukti hasil = penentu keputusan terbesar. Ditaruh setelah treatment agar konteksnya jelas |
| 6 | **Tim Dokter** | Kredibilitas personal — face trust sebelum social proof |
| 7 | **Kenapa Pilih Kami** | Diferensiasi rasional setelah emosi (hasil & dokter) terbangun |
| 8 | **Testimoni Pasien** | Social proof menjelang keputusan |
| 9 | **Suasana Klinik & Lokasi** | Redakan kecemasan kunjungan pertama + info praktis (alamat, jam) |
| 10 | **FAQ** | Hilangkan sisa keberatan (keselamatan, harga, proses konsultasi) |
| 11 | **CTA Booking Final** | Konversi: panel besar WA + jaminan konsultasi tanpa tekanan |
| 12 | **Footer** | Legal placeholder, link sosial, kredit template |

## 3. Design System

Sumber kebenaran: `design-system/lumiere-aesthetic-clinic/` (Master + override `pages/landing.md`).

- **Gaya:** Minimalism / Swiss — simetris, whitespace generous, hirarki tipografi kuat, grid-based, tanpa dekorasi berlebih.
- **Warna (override final):** dominan off-white `#FAFAF8` (hangat, tidak steril); teks ink `#172A26`; **aksen tunggal deep teal `#0F766E`** (medical-trust); tint `#F0FDFA` untuk chip/surface; sand `#E8E2D9` hanya divider/label kecil. Kontras body ≥ 4.5:1.
- **Tipografi:** Display **Plus Jakarta Sans**, body **Inter** (keduanya sans-serif clean). Scale: 12/14/16/18/20/24/30/36/48/60.
- **Spacing:** ritme 8px; section padding 128px desktop / 80px mobile; container max-w-6xl.
- **Foto = sumber kehangatan utama:** skin tone natural, cahaya lembut (placeholder realistis: dermatology, medical spa, skincare professional).
- **Ikon:** Phosphor (`@phosphor-icons/react`), stroke konsisten 1.5px.
- **Anti-pattern (dari generator, mengikat):** neon, animasi kasar, dark mode, blush/pastel berat.

## 4. Acceptance Criteria per Section (+ Spek Animasi)

Global: reveal `whileInView` `once: true`, viewport margin −80px; semua animasi via shared variants dari `lib/motion.ts`; `prefers-reduced-motion` → semua transisi degenerate ke fade pendek tanpa transform/parallax; hanya animasikan `transform`/`opacity` (60fps).

| Section | Acceptance criteria | Animasi spesifik |
|---------|--------------------|--------------------|
| Navbar | Sticky; transparan di atas hero → solid + border saat scroll >24px; CTA WA pill selalu terlihat; mobile: hamburger → full-screen menu; fokus keyboard terkelola | Background transisi 0.3s; menu mobile: item stagger 40ms, spring |
| Hero | H1 + subcopy komplit; dual CTA; badge izin mini; foto hero skin tone natural | (a) Headline reveal per-baris: mask + translateY 24px, stagger 90ms, ease `[0.22,1,0.36,1]` 0.8s; (b) komposisi foto layered: 1 foto utama + 1 kartu foto kecil floating, parallax berbeda (`useScroll`+`useTransform`, ±24px vs ±10px); (c) CTA hover: spring scale 1.03 + bayangan naik; (d) badge fade-up tertunda 200ms |
| Trust Bar | 4 item (Dokter Berlisensi, Klinik Berizin, rating Google, jumlah pasien) — aman diverifikasi, tanpa klaim medis; desktop 1 baris, mobile grid 2×2 | Count-up angka 1.2s saat masuk viewport (reduced-motion: langsung final); item fade-up stagger 80ms |
| Treatment | 6 kartu (Botox, Dermal Filler, Laser, Chemical Peel, Hydrainfuse, Skin Booster): ikon/foto, deskripsi 1 kalimat suportif, harga mulai-dalam Rp, CTA "Tanya via WA" per kartu; desktop 3 kolom, tablet 2, mobile 1 | Kartu masuk stagger 70ms (y 28px→0, 0.6s); hover: lift `y:-6px` spring (stiffness 300, damping 25) + bayangan bertingkat |
| **Before/After** ⭐ | **Custom-built (bukan dari MCP).** Drag-to-reveal: handle vertikal, foto "sebelum" di-clip dari kiri; pointer drag semua posisi, click-to-jump, keyboard (arrow/home/end) dengan `role="slider"` + aria-valuenow; hint label "Geser"; loop fokus terlihat; 3 set foto via thumbnail | Posisi handle via `useMotionValue` + spring (stiffness 400, damping 40) — pointer 1:1, keyboard/release spring; saat drag handle scale 1.08; ganti set: crossfade 0.4s + reset posisi beranimasi |
| Tim Dokter | 3 dokter: foto, nama, gelar, spesialisasi, deskripsi pengalaman; kartu simetris | Foto masuk stagger; hover: foto zoom 1.05 0.5s (overflow hidden) + lift ringan; info fade-up tertunda |
| Kenapa Pilih Kami | 4 poin diferensiasi (konsultasi personal, transparansi harga, standar kebersihan, pendampingan pasca-treatment) — deskriptif tanpa klaim | Layout 2×2 offset bergantian; tiap poin: ikon draw-in (`pathLength` 0→1, 0.9s) + teks fade-up |
| Testimoni | 4–6 testimoni pengalaman umum (suasana, pelayanan, proses konsultasi) — TANPA klaim medis hasil; avatar inisial; carousel prev/next + indikator, auto-advance 6s, pause on hover/focus, kontrol keyboard | Slide: slide+crossfade spring; kartu masuk scale 0.96→1 + fade; quote mark dekoratif parallax halus |
| Suasana & Lokasi | Grid foto 4–5 (interior, ruang treatment, resepsionis) + kartu lokasi: alamat, jam operasional, link Google Maps, 1–3 cabang | Foto reveal per-item clip-path inset (atas→bawah) stagger 100ms; hover zoom lembut; kartu lokasi fade-up |
| FAQ | Accordion 6–8 Q (keamanan, siapa yang cocok, harga/konsultasi, proses pertama kali, pasca-treatment, sterilisasi); heading deskriptif; jawaban compliance | Open/close: `AnimatePresence` height auto spring; chevron rotate 180° spring; hanya 1 item terbuka; keyboard enter/space |
| CTA Final | Panel full-width background teal gelap, headline + tombol WA besar (pre-filled text opsional) + catatan "konsultasi tanpa biaya, tanpa tekanan" | Background gradient/overlay parallax sangat halus; heading reveal mask per-baris (konsisten hero); tombol pulse-ring lembut 1× saat masuk viewport (bukan loop) |
| Footer | Logo, tagline, link nav, IG/TikTok/WhatsApp, legal placeholder (©, "website demo"), kredit | Link hover underline slide; tanpa animasi masuk |

## 5. Aturan Compliance Konten Medis (mengikat semua copy)

Dilarang: "sembuh total", "dijamin", "permanen", "instant", klaim angka hasil pasti, "terbaik #1". Wajib: bahasa suportif-deskriptif ("dirancang untuk membantu kulit tampak lebih sehat", "hasil dapat berbeda tiap individu"). Testimoni = pengalaman pelayanan, bukan hasil medis. Badge trust hanya klaim yang bisa diverifikasi klinik nyata (izin, gelar dokter) — bukan klaim efikasi.

## 6. Stack & Non-Functional

- Next.js App Router + TypeScript + Tailwind; animasi **hanya** Framer Motion (package `motion`); ikon Phosphor; deploy Vercel; npm.
- 1 file per section di `components/sections/`; semua konten dari `content.ts`; animasi shared di `lib/motion.ts`.
- Semua gambar `next/image` + lazy (kecuali hero LCP); responsive 375px–desktop; contrast AA; deploy target Vercel.
