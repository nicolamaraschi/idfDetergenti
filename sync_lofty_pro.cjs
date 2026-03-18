const fs = require('fs');

const path = './src/data/products.json';
let products = JSON.parse(fs.readFileSync(path, 'utf8'));

// Delete existing lofty-pro
products = products.filter(p => p.linea !== 'lofty-pro');

const proCategories = {
    "zbutes-rrobash": ["AROMATERAPIA", "ALTO INTENSO"],
    "lares-rrobash-likuid": ["ALTO INTENSO"],
    "lares-rrobash-pluhur": ["GEL OSSIGENO", "BIANCO 3 SUPER", "SSLX PROFESSIONALE"],
    "lares-enesh": ["LIMONE", "CENERE ATTIVA"],
    "lavastoviglie": ["LAVASTOVIGLIE LIQUIDO", "BRILLANTANTE", "LAVASTOVIGLIE BAR"],
    "heqes-yndyror": ["SGRASSATORE ACTIVE", "PULIFORNO"],
    "solucion-per-banjon": ["BAGNO PLUS", "WC GEL", "ANTIGELQEROR"],
    "solucion-per-dysheme": ["ESSENZA", "PASION", "SHUMPERDORIMESH", "BRILL"],
    "sapu-likuid": ["THE BIANCO", "AMBRA"],
    "parfum-ambjenti": ["PINK ESSENCE"]
};

// Helpful mapping for descriptions
const catMap = {
    'zbutes-rrobash': { it: "Ammorbidente", en: "Softener", al: "Zbutes Rrobash" },
    'lares-rrobash-likuid': { it: "Lavatrice Liquido", en: "Liquid Laundry", al: "Lares Rrobash Likuid" },
    'lares-rrobash-pluhur': { it: "Lavatrice Polvere", en: "Powder Laundry", al: "Lares Rrobash Pluhur" },
    'lares-enesh': { it: "Detersivo Piatti", en: "Dish Detergent", al: "Lares Enesh" },
    'lavastoviglie': { it: "Lavastoviglie", en: "Dishwasher", al: "Lavastoviglie" },
    'heqes-yndyror': { it: "Sgrassatore", en: "Degreaser", al: "Heqes Yndyror" },
    'solucion-per-banjon': { it: "Prodotti Bagno", en: "Bathroom Cleaner", al: "Solucion per Banjon" },
    'solucion-per-dysheme': { it: "Pavimenti Professionali", en: "Professional Floor", al: "Solucion per Dysheme" },
    'sapu-likuid': { it: "Sapone Liquido", en: "Liquid Soap", al: "Sapu Likuid" },
    'parfum-ambjenti': { it: "Profumatore Ambienti", en: "Air Freshener", al: "Parfum Ambjenti" },
};

const categoryImages = {
    'zbutes-rrobash': "https://images.unsplash.com/photo-1610555356070-d1fb336f4ae4?auto=format&fit=crop&q=80&w=400&h=400",
    'lares-rrobash-likuid': "https://images.unsplash.com/photo-1582735689146-24baea4bbf02?auto=format&fit=crop&q=80&w=400&h=400",
    'lares-rrobash-pluhur': "https://images.unsplash.com/photo-1604335399105-a0c58e473e6e?auto=format&fit=crop&q=80&w=400&h=400",
    'lares-enesh': "https://images.unsplash.com/photo-1622322300486-1df25026a0b9?auto=format&fit=crop&q=80&w=400&h=400",
    'lavastoviglie': "https://images.unsplash.com/photo-1585834057406-25805562095f?auto=format&fit=crop&q=80&w=400&h=400",
    'heqes-yndyror': "https://images.unsplash.com/photo-1584824584225-b461f855aab0?auto=format&fit=crop&q=80&w=400&h=400",
    'solucion-per-banjon': "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=400",
    'solucion-per-dysheme': "https://images.unsplash.com/photo-1527515637-65d1d60920a0?auto=format&fit=crop&q=80&w=400&h=400",
    'sapu-likuid': "https://images.unsplash.com/photo-1584305574647-0cc9ec9ce3db?auto=format&fit=crop&q=80&w=400&h=400",
    'parfum-ambjenti': "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=400&h=400"
};

let added = 0;

for (const [cat, items] of Object.entries(proCategories)) {
    for (const item of items) {
        const id = `lofty-pro-${cat}-${item.toLowerCase().replace(/[\s']/g, '-')}`;
        const friendlyName = item.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

        products.push({
            id,
            linea: "lofty-pro",
            categoria: cat,
            nomi: {
                it: friendlyName,
                en: friendlyName,
                al: friendlyName
            },
            descrizioni: {
                it: `Prodotto professionale ${catMap[cat].it.toLowerCase()} - ${friendlyName}. Formulazione concepita per uso professionale.`,
                en: `Professional ${catMap[cat].en.toLowerCase()} - ${friendlyName}.`,
                al: `Produkt profesional ${catMap[cat].al.toLowerCase()} - ${friendlyName}.`
            },
            highlights: ["Linea Professionale", "Alta Efficacia"],
            immagine: categoryImages[cat] || "https://images.unsplash.com/photo-1584824486509-114594d09203?auto=format&fit=crop&q=80&w=400&h=400",
            disponibile_alla_spina: true
        });
        added++;
    }
}

// Ensure there are no duplicates of products that were wrongly put in normal lofty if they were meant to only exist here
fs.writeFileSync(path, JSON.stringify(products, null, 2));
console.log(`Replaced with ${added} Lofty Professional specific products.`);
