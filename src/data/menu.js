

// A category becomes one button in the menu nav.
// - Simple categories have `items`.
// - The "Pizze" category uses `groups` instead: each group renders as a
//   separator (sub-heading) inside the same button. Item shape is identical
//   either way: { name, description?, price?, tags? }. Price is optional.
export const menu = [
  {
    category: "Pizze",
    groups: [
      {
        label: "Classiche",
        items: [
          { name: "Margherita", description: "Pomodoro, mozzarella fior di latte, olio e basilico", price: 8.00, tags: ["veg"] },
          { name: "Marinara", description: "Pomodoro, origano, aglio, olio e basilico", price: 7.00, tags: ["veg"] },
          { name: "Napoli", description: "Pomodoro, fiordilatte, acciughe, olive nere, olio e basilico", price: 10.00 },
        ],
      },
      {
        label: "Le Pizze",
        items: [
          { name: "Lasagna Al Cotto", description: "Pomodoro, Fior di latte, Ricotta, Prosciutto cotto, Olio e Basilico", price: 10.50 },
          { name: "Giovinezza Con Salsiccia", description: "Fior di latte, Patata lessa, Salsiccia, Olio e Basilico", price: 11.50 },
          { name: "Diavola", description: "Pomodoro, Fior di latte, Spianata calabra, Olio e Basilico", price: 10.00, tags: ["piccante"] },
          { name: "Rucolona Al Crudo", description: "Fior di latte, pomodorini rossi, Olio e all'uscita Prosciutto Crudo, Rucola e Scaglie di Grana", price: 11.50 },
          { name: "Tonno E Cipolla", description: "Pomodoro, Fior di latte, Tonno, Cipolla rossa, Olive nere, Olio e Basilico", price: 11.50 },
          { name: "Verdummara", description: "Crema di Peperoni, Fior di latte, Provola fresca Campana, Friarielli napoletani, Melenzane e zucchine grigliate, Olio e Basilico", price: 12.00, tags: ["veg"] },
          { name: "Saporita", description: "Pomodorini gialli, Pecorino Romano, Pancetta, Pepe nero, Olio e Basilico", price: 10.00 },
          { name: "Bufalina", description: "Pomodoro, Mozzarella di Bufala Campana DOP, Olio e Basilico", price: 11.50, tags: ["veg"] },
          { name: "4 Formaggi", description: "Brie, Gorgonzola, Provola fresca Campana, Fior di latte, Olio e Basilico", price: 11.50, tags: ["veg"] },
          { name: "Carrettiera", description: "Fior di latte, Provola fresca Campana, Salsiccia, Friarielli napoletani, Olio e Basilico", price: 12.00 },
          { name: "Rucolona Alla Bresaola", description: "Fior di latte, pomodorini rossi, Olio e all'uscita Bresaola, Rucola e Scaglie di Grana", price: 11.50 },
          { name: "Vegetariana", description: "Pomodoro, Fior di latte, Melanzane e zucchine grigliate, Funghi Champignon, Olio e Basilico", price: 11.50, tags: ["veg"] },
          { name: "Capricciosa", description: "Pomodoro, Fior di latte, Prosciutto cotto, Carciofi al naturale, Olive nere, Funghi champignon, Olio e Basilico", price: 12.00 },
          { name: "Giovinezza Con Pancetta", description: "Fior di latte, Patata lessa, Pancetta, Olio e Basilico", price: 11.50 },
          { name: "Lasagna Al Salame", description: "Pomodoro, Fior di latte, Ricotta, Salame dolce, Olio e Basilico", price: 10.50 },
          { name: "Vesuvio", description: "Pomodorini gialli, pomodorini rossi, Acciughe, Aglio, Origano, Olio e Basilico", price: 10.00 },
          { name: "Cosacca", description: "Pomodoro, Pecorino Romano, Olio e Basilico", price: 8.00, tags: ["veg"] },
        ],
      },
      {
        label: "Pizza del Mese",
        items: [
          { name: "Pizza Del Mese - Ottobre", description: "Base di crema di zucca, pancetta, provola e fior di latte con olio e basilico all'uscita", price: 12.50 },
          { name: "Pizza Del Mese di Aprile", description: "Base di crema di asparagi, fior di latte, funghi porcini, olio e basilico", price: 11.00, tags: ["veg"] },
        ],
      },
      {
        label: "Ripiene",
        items: [
          { name: "Calzone Al Salame", description: "Pomodoro, Fior di latte, Ricotta, Salame dolce, Pepe, Olio e Basilico", price: 10.00 },
          { name: "Daytona", description: "Cornicione ripieno di Ricotta, Pomodoro, Mozzarella di Bufala Campana, Olio e Basilico", price: 12.50, tags: ["veg"] },
        ],
      },
      {
        label: "Le Speciali",
        items: [
          { name: "Gennaro Napulegno", description: "3 Gusti — Cornicione ripieno di Ricotta, Pomodoro, Mozzarella di Bufala Campana · Provola fresca Campana, Fior di Latte, Salsiccia, Friarielli Napoletani · Calzone ripieno di Ricotta, Fior di Latte, Salame dolce", price: 13.50 },
          { name: "Gennaro Gourmet", description: "Pizza a 4 gusti — Pomodorini, mozzarella di bufala, prosciutto crudo e scaglie · Melanzane, pesto e mozzarella di bufala · Pomodoro e mozzarella di bufala · Macchiata al pomodoro, pomodorini rossi, mozzarella di bufala, olio e basilico", price: 18.50 },
        ],
      },
      {
        label: "Gourmet",
        items: [
          { name: "Burrata", description: "Pesto di basilico, Fior di latte, Pomodorini gialli, Pomodorini rossi, Olive nere, in uscita Burrata, Olio e Basilico", price: 15.00, tags: ["veg"] },
          { name: "Foresta Nera", description: "Crema di noci, Provola fresca Campana, Brie, Speck Alto Adige, Olio e Basilico", price: 13.00 },
          { name: "Gustosa", description: "Crema di pistacchio, Provola fresca Campana, Ricotta, Mortadella, Granella di Pistacchio, Olio e Basilico", price: 15.00 },
          { name: "Fuoco Del Sud", description: "Doppio impasto, ripieno di Provola fresca Campana, Fior di Latte, Spianata Calabra, 'Nduja, Piccante in Polvere, Olio", price: 15.00, tags: ["piccante"] },
        ],
      },
    ],
  },
  {
    category: "Focacce",
    items: [
      { name: "Focaccia Fresca", description: "Pomodorini rossi, Mozzarella di Bufala Campana DOP, Prosciutto Crudo, Rucola, Scaglie di Grana, Olio", price: 13.50 },
      { name: "Focaccia Tirolese", description: "Pomodorini gialli, Speck Alto Adige, Pecorino e Rucola, Olio", price: 11.50 },
      { name: "Focaccia Valtellina", description: "Pomodorini gialli, Bresaola, Scaglie di grana, Olio", price: 13.00 },
    ],
  },
  {
    category: "Panuozzi",
    items: [
      { name: "Panuozzo Salsiccia E Friarielli", description: "Salsiccia, Friarielli napoletani, Provola fresca Campana", price: 9.00 },
      { name: "Panuozzo Pancetta", description: "Pancetta, Provola fresca Campana, Scaglie di Grana, Melanzane Grigliate", price: 8.00 },
      { name: "Panuozzo Bresaola", description: "Bresaola, Fior di Latte, Pomodorini Rossi, Grana", price: 8.00 },
      { name: "Panuozzo Al Crudo", description: "Prosciutto crudo, Fior di Latte, Rucola, Scaglie di Grana", price: 8.00 },
      { name: "Panuozzo Speck", description: "Speck Alto Adige, Brie, Fior di Latte", price: 8.00 },
      { name: "Panuozzo Ortolano", description: "Crema di Peperoni, Fior di latte, Melenzane e Zucchine Grigliate", price: 8.00, tags: ["veg"] },
    ],
  },
  {
    category: "Soft Drink",
    items: [
      { name: "Coca-Cola", description: "33 cl", price: 3.50 },
      { name: "Coca-Cola Zero", description: "33 cl", price: 3.50 },
      { name: "Fanta", description: "33 cl", price: 3.50 },
      { name: "Tè pesca / limone", description: "33 cl", price: 3.50 },
      { name: "Acqua naturale / frizzante", description: "50 cl", price: 1.50 },
    ],
  },
  {
    category: "Birre",
    items: [
      { name: "Tennent's", description: "33 cl", price: 4.50 },
      { name: "Corona", description: "33 cl", price: 4.00 },
      { name: "Beck's", description: "33 cl", price: 4.00 },
      { name: "Ichnusa", description: "50 cl", price: 4.50 },
      { name: "Moretti", description: "66 cl", price: 4.50 },
      { name: "Heineken", description: "66 cl", price: 4.50 },
    ],
  },
  {
    category: "Dolci",
    items: [
      { name: "Ripieno Alla Nutella", description: "Calzone ripieno di Nutella", price: 8.50 },
      { name: "Pizza Con Nutella", description: "Base pizza con all'uscita strato di Nutella", price: 12.00 },
      { name: "Tartufo Cocco Nocciola", description: "Gelato al cocco con una golosa salsa alla nocciola e cioccolato, decorato con scaglie di cocco, granella di meringa e granella di nocciola pralinata", price: 6.00 },
      { name: "Coppa Profiterol", description: "Bignè ripieni di crema al gusto di vaniglia avvolti da gelato semifreddo al cioccolato", price: 6.00 },
      { name: "Semifreddo Al Torroncino", description: "Gelato semifreddo al torroncino decorato con granella di nocciole pralinate", price: 6.00 },
      { name: "Coppa Zuppa Inglese", description: "Pan di Spagna con inzuppatura al gusto Alchermes, gelato semifreddo al cioccolato e zabaione, decorato con riccioli di cioccolato", price: 6.00 },
      { name: "Coppa Cheesecake Alle Fragole", description: "Pan di Spagna con gelato semifreddo cheesecake, decorato con salsa alle fragole", price: 6.00 },
      { name: "Tartufo Pistacchio", description: "Gelato semifreddo al pistacchio con cuore al pistacchio, decorato con nocciole pralinate e granella di pistacchio", price: 6.00 },
      { name: "Tartufo Classico", description: "Gelato semifreddo allo zabaione e gelato al cioccolato, decorato con granella di nocciole e cacao", price: 6.00 },
    ],
  },
];
