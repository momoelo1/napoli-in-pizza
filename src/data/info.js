// ─────────────────────────────────────────────────────────────
// PIZZERIA INFO — single source of truth for "Chi siamo" & "Dove siamo".
// Edit the text, address, phone and hours here. No other file needed.
// (Placeholder content — swap in the real details.)
// ─────────────────────────────────────────────────────────────

export const about = {
  title: "Chi siamo",
  paragraphs: [
    "Napoli in Pizza nasce dalla passione di Milly e Rino per la vera pizza napoletana.",
    "Impasto a lunga lievitazione, ingredienti scelti del territorio e il profumo del forno a legna: ogni pizza racconta Napoli.",
    "Vi aspettiamo per condividere con voi un pezzo della nostra tradizione.",
  ],
};

export const contact = {
  title: "Dove siamo",
  address: "Via Camillo Benso di Cavour, 48, 26900 Lodi (LO)",
  phone: "+39 347 822 0169",
  mapsUrl: "https://maps.google.com/?q=Via+Camillo+Benso+di+Cavour+48+26900+Lodi+LO",
  whatsappUrl: "https://wa.me/393478220169",
  hours: [
    { days: "Lun – Mar", time: "Chiuso" },
    { days: "Mer – Sab", time: "12:30 – 15:00 · 19:00 – 22:30" },
    { days: "Domenica", time: "19:00 – 22:30" },
  ],
};
