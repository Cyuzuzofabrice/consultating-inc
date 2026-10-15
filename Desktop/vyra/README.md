# VYRA website
React + Vite + TypeScript + React Three Fiber.
- `npm install && npm run dev` / `npm run build`
- Form: set `VITE_INQUIRY_ENDPOINT` (see `.env.example`). Without it the form validates, then honestly offers WhatsApp (nothing is claimed as sent).
- 3D hero loads lazily, only on desktop-width, WebGL-capable, non-reduced-motion browsers; otherwise the SVG fallback shows.
