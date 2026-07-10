# Dr. Imran Kabir Chowdhury — Doctor Landing Page

A premium, frontend-only single-page website for a cardiologist's private
practice, built with Next.js 15 (App Router), TypeScript, Tailwind CSS,
shadcn/ui-style components, and Framer Motion. Includes a fully working
digital prescription pad that exports a print-ready A4 PDF, entirely in
the browser — no backend, no database, no authentication.

## Design

- **Palette** — ivory `#F7F8FA` / navy `#0B1E3D` / sapphire `#0B4F9E` /
  vitals teal `#14919B` / gold `#C9A227`, with a dark navy `#050D1C`
  dark mode.
- **Type** — Fraunces (display), Inter (body), JetBrains Mono (data,
  labels, registration numbers).
- **Signature motif** — a single ECG heartbeat line that draws itself in
  on scroll, used as ambient hero decoration and as the divider before
  the footer and appointment CTA.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                  Routes, layout, metadata, sitemap
components/
  layout/             Navbar, Footer, ThemeToggle
  sections/            All landing page sections
  prescription/        The digital prescription pad
  common/              Container, SectionHeading, HeartbeatLine, floating buttons
  ui/                  shadcn-style primitives (Button, Card, Input, ...)
lib/                   Site data, constants, utils
hooks/                 useTheme
types/                 Shared TypeScript interfaces
public/                Static assets (add real doctor photos to /doctor)
```

## Editing doctor content

All doctor-facing content — bio, qualifications, experience, services,
chamber hours, testimonials, and FAQs — lives in one place:

```
lib/doctor.ts
```

Update the fields there and every section on the page updates
automatically.

## Prescription pad

`components/prescription/PrescriptionForm.tsx` holds the prescription
state and renders the printable pad. Medicines can be added, edited, and
removed inline. The **Download Prescription PDF** button uses
`html2canvas` + `jsPDF` (both lazy-loaded) to capture the pad and save
it as `Prescription-YYYY-MM-DD.pdf`. Nothing is transmitted anywhere —
generation happens fully client-side.

## Before going live

- Replace the Unsplash placeholder images in `Hero.tsx` and
  `AboutDoctor.tsx` with real, licensed photos in `public/doctor/`.
- Replace the Contact section's map placeholder with a live Google Maps
  embed using your own API key.
- Update `lib/constants.ts` → `SITE.url` and `SITE.ogImage`, and add a
  real Open Graph image at `public/images/og-cover.jpg`.
- Add a real favicon at `public/icons/favicon.ico`.
