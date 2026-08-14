---
name: before-after-slider
description: Pola custom drag-to-reveal before/after image comparison slider dengan Framer Motion (useMotionValue + spring) untuk Next.js/React/Tailwind — aksesibel (role=slider, keyboard). Use when building before/after atau image comparison slider, khususnya untuk template klinik kecantikan. Jangan pakai komponen MCP/eksternal untuk slider ini.
---

# Before/After Drag-to-Reveal Slider (Framer Motion)

Pola reusable untuk image-comparison slider custom-built. WAJIB custom (bukan MCP) sesuai aturan proyek. Target: React/Next.js + Tailwind + Framer Motion (package `motion`).

## Arsitektur inti

```
Container (relative, aspect-ratio fix, touch-action: none, select-none)
├── img "after"  — layer dasar, full size
├── img "before" — dibungkus div dengan clip-path: inset(0 X% 0 0) ← dikontrol motion value
├── handle line  — div vertikal di left: X%, di-drag
└── label "Sebelum"/"Sesudah"
```

- Satu sumber kebenaran: `const x = useMotionValue(50)` (persen 0–100).
- Render tanpa re-render: `useTransform(x, v => \`inset(0 ${100 - v}% 0 0)\`)` → diteruskan ke `motion.div` prop `style={{ clipPath }}`. JANGAN `useState` + setState per pointermove (jank).
- Posisi handle: `useTransform(x, v => \`${v}%\`)` → `style={{ left }}`.
- Konversi pointer→persen: `(e.clientX − rect.left) / rect.width × 100`, clamp 0–100. Pakai `getBoundingClientRect()` saat drag start, simpan rect (bukan per move).

## Interaksi

1. **Pointer drag 1:1** — pointerdown pada handle ATAU di mana pun di container (click-to-jump: set `x.set(pos)` lalu mulai drag). `setPointerCapture`. `touch-action: none` di container agar tidak scroll saat drag di mobile.
2. **Keyboard** — handle = `<button role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(x.get())} aria-label="Geser perbandingan sebelum dan sesudah">`. ArrowLeft/Right ±5 (dengan Shift ±20), Home/End → 0/100. Update `aria-valuenow` via `useMotionValueEvent(x, "change", ...)` + state kecil khusus atribut ARIA (satu-satunya state yang boleh).
3. **Spring** — pointer drag langsung `x.set(v)` (1:1). Keyboard & release-to-animate memakai `animate(x, target, springs.interactive)` (stiffness 400, damping 40 — dari `lib/motion.ts`).
4. **Feedback visual saat drag**: handle `scale 1.08` + line menebal (`scaleX`) via `whileTap`/varian drag; hint label "Geser" memudar setelah interaksi pertama.

## Multi-set foto (thumbnail switcher)

- State `activeIndex`; ganti pasangan gambar → crossfade 0.4s (`AnimatePresence mode="popLayout"` atau dua layer + opacity), lalu `animate(x, 50, springs.interactive)` untuk reset posisi beranimasi.

## Aksesibilitas & reduced-motion

- Focus ring terlihat di handle; touch target handle ≥ 44px (visual garis bisa tipis, area hit diperbesar via padding/pseudo-element).
- `prefers-reduced-motion`: tidak ada animasi spring/crossfade — posisi berubah instan (`useReducedMotion()` dari `motion/react`).
- Thumbnail switcher juga harus tombol nyata (`<button>`) dengan `aria-pressed`/`aria-current`.

## Anti-pattern

- ❌ `onMouseMove` + `setState` per frame → re-render penuh, jank di mobile.
- ❌ Animasi `width`/`left` layer "before" (layout thrash) — hanya `clip-path` + `transform`.
- ❌ Cukup drag-only tanpa keyboard — wajib `role="slider"`.
- ❌ Gambar via `<img>` di Next.js — pakai `next/image` dengan `fill` + `sizes`.

## Checklist implementasi

- [ ] `useMotionValue` sebagai sumber tunggal; render via `useTransform` (nol re-render per frame)
- [ ] `clip-path inset` untuk reveal; handle via `left` transform/percent
- [ ] Pointer: click-to-jump + drag + `setPointerCapture` + `touch-action: none`
- [ ] Keyboard: arrows (±5/±20), Home/End; `aria-valuenow` sinkron
- [ ] Spring `springs.interactive` (400/40) untuk keyboard/release; drag 1:1 tanpa spring
- [ ] Handle scale saat drag; hint fade setelah interaksi pertama
- [ ] Multi-set: crossfade 0.4s + reset posisi beranimasi
- [ ] `useReducedMotion` → instan, tanpa spring
- [ ] Handle ≥ 44px hit area, focus ring terlihat
- [ ] Semua teks/label/URL gambar dari `content.ts`
