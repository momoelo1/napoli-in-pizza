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
  address: "Via Toledo 123, 80132 Napoli (NA)",
  phone: "+39 081 123 4567",
  mapsUrl: "https://maps.google.com/?q=Via+Toledo+123+Napoli",
  hours: [
    { days: "Lun – Ven", time: "18:00 – 23:30" },
    { days: "Sabato", time: "12:00 – 15:00 · 18:00 – 24:00" },
    { days: "Domenica", time: "12:00 – 15:00 · 18:00 – 23:30" },
  ],
};
