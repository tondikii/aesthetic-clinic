# Override: Landing Page — Lumière Aesthetic Clinic

Aturan di file ini MENGESAMPINGAN warna & tipografi di MASTER.md (arah desain final dari brief klien). Bagian lain MASTER.md (gaya Minimalism/Swiss, spacing, effects, motion, checklist) tetap berlaku.

## Warna (override)

| Role | Hex | Catatan |
|------|-----|---------|
| Background utama | `#FAFAF8` | Off-white hangat, tidak steril |
| Foreground / teks utama | `#172A26` | Charcoal bernuansa hijau, kontras ≥ 4.5:1 di atas background |
| **Aksen tunggal (CTA, link, ikon kunci)** | `#0F766E` | Deep teal — kesan medical-trust |
| On-accent | `#FFFFFF` | Teks di atas teal |
| Surface tint | `#F0FDFA` | Chip, kartu lembut, highlight |
| Sand netral | `#E8E2D9` | Divider/label kecil saja, agar tidak dingin |
| Card | `#FFFFFF` | |
| Muted foreground | `#475569` | Teks sekunder |

Anti-pattern warna dari generator tetap berlaku: tanpa neon, tanpa pastel/blush berat, tanpa dark mode.

## Tipografi (override)

- **Display/Heading: Plus Jakarta Sans** (bukan Playfair Display) — sans-serif geometris, ramah konten Bahasa Indonesia.
- **Body: Inter.**
- Import: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`
- Scale: 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60.

## Motion

Framer Motion (bukan GSAP) — translator pola stagger generator: duration 300–450ms, spring untuk hover/interaksi, `prefers-reduced-motion` → render state final tanpa transform. Detail per section lihat PRD.md.
