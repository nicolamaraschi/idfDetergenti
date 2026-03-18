const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf8'));

const proCategories = {
    'heqes-yndyror': ["SGRASSATORE ACTIVE", "PULIFORNO"],
    'solucion-per-banjon': ["BAGNO PLUS", "WC GEL", "ANTIGELQEROR"],
    'solucion-per-dysheme': ["ESSENZA", "PASION", "SHUMPERDORIMESH", "BRILL"],
    'sapu-likuid': ["THE BIANCO", "AMBRA"],
    'parfum-ambjenti': ["PINK ESSENCE"],
    'produkte-specifike': ["TABLET BAR", "COFFE"]
};

const catMap = {
    'heqes-yndyror': { it: "Sgrassatore", en: "Degreaser", al: "Heqes Yndyror" },
    'solucion-per-banjon': { it: "Prodotti Bagno", en: "Bathroom Cleaner", al: "Solucion per Banjon" },
    'solucion-per-dysheme': { it: "Pavimenti Professionali", en: "Professional Floor", al: "Solucion per Dysheme" },
    'sapu-likuid': { it: "Sapone Liquido", en: "Liquid Soap", al: "Sapu Likuid" },
    'parfum-ambjenti': { it: "Profumatore Ambienti", en: "Air Freshener", al: "Parfum Ambjenti" },
    'produkte-specifike': { it: "Prodotti Specifici", en: "Specific Products", al: "Produkte Specifike" }
};

let added = 0;

for (const [cat, items] of Object.entries(proCategories)) {
    for (const item of items) {
        const id = `lofty-pro-${cat}-${item.toLowerCase().replace(/[\s']/g, '-')}`;

        // Skip if already exists
        if (products.find(p => p.id === id)) continue;

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
            immagine: "https://images.unsplash.com/photo-1584824486509-114594d09203?auto=format&fit=crop&q=80&w=400&h=400",
            disponibile_alla_spina: true
        });
        added++;
    }
}

fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));
console.log(`Added ${added} Lofty Professional products. Total is now ${products.length}.`);
