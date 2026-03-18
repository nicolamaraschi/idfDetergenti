const fs = require('fs');

const categories = {
    zbutes: ["LOTO SWEET", "MON AMOUR", "BLU POWER", "SPRING FRESH", "FABULOSO", "ARGAN", "COCOLE", "HYPNOTIC", "LEN BLU", "FELCE AZUR", "LOFTY GOLD", "MUSCHIO E ORCHIDEA", "ACTILIFE", "NARCISO", "LOFTY CLASSIC", "LATTE D'AVENA"],
    lavatrice: ["LOTO SWEET", "MON AMOUR", "BLU POWER", "SPRING FRESH", "FABULOSO", "ARGAN", "CAPI SCURI", "HYPNOTIC", "LEN BLU", "FELCE AZUR", "LOFTY GOLD", "MUSCHIO E ORCHIDEA", "ACTILIFE", "NEUTRO DIXY", "LANA DELICATI", "OXYMAGIC GEL", "PLUHUR WEISS 3 SUPER", "PLUHUR SSLX PROFESIONAL", "PULISAN SMACHIATORE", "MONODOSE IDROSOLUBILI"],
    dysheme: ["AHOY", "ALPINA", "HYPNOTIC", "OCEAN BREEZE", "FIOR DI LOTO", "LIMONE ACTIVE", "LAVANDA DI PROVENZA", "DIAMANTE", "LOFTY LEGNO PARQUET"],
    ene: ["LOFTY PLUS", "ACETO", "LIMONE", "MENTA E BICARBONATO", "ARGAN E AGRUMI", "FRUITS", "LAVASTOVIGLIE LIQUIDO", "BRILLANTANTE", "LAVASTOVIGLIE TABS"],
    detergjente: ["ACE CLASSICA", "ACE GENTILE GEL", "ACE PROFUMATA", "PULIBAGNO", "WC GEL", "CREMA PLUS", "SGRASSATORE MARSIGLIA", "SGRASSATORE LIMONE", "FORNI E GRILL", "MULTIUSO ALICANTE BRILL", "MULTIUSO LOFTY", "PRONTO AMMONIACA", "ANTICALCARE", "BRILLACIAIO", "HIGH FRAGRANCE"],

    // Nuovi aggiunti
    'higjena-personale': ["SAPU AROMA THERAPY", "SAPU MUSCHIO VERDE", "SAPU TALCO", "SAPU ANTIBAKTERIAL", "SHAMPO ALOE", "SHAMPO HAIR", "BAGNOSCHIUMA SENSATION", "BAGNOSCHIUMA OLIO DI ARGAN", "BAGNOSCHIUMA TALCO VID", "BALSAM"],
    'zbutes-rrobash': ["AROMA THERAPY", "LOFTY INTENSO"],
    'lares-rrobash-likuid': ["LOFTY INTENSO", "OXYMAGIC GEL"],
    'lares-rrobash-pluhur': ["WEISS 3 SUPER", "SSLX PROFESIONAL"],
    'lares-enesh': ["LIMONE", "CENERE ATTIVA"]
};

// Map categories to user-friendly names based on initial specs
const catMap = {
    zbutes: { it: "Ammorbidente", en: "Fabric Softener", al: "Zbutes" },
    lavatrice: { it: "Lavatrice", en: "Laundry", al: "Lavatrice" },
    dysheme: { it: "Pavimenti", en: "Floor Cleaners", al: "Dysheme" },
    ene: { it: "Stoviglie", en: "Dishwashing", al: "Ene" },
    detergjente: { it: "Detergenti", en: "Detergents", al: "Detergjente" },

    // Nuovi aggiunti
    'higjena-personale': { it: "Igiene Personale", en: "Personal Care", al: "Higjena Personale" },
    'zbutes-rrobash': { it: "Ammorbidente Bucato", en: "Fabric Softener", al: "Zbutes Rrobash" },
    'lares-rrobash-likuid': { it: "Lavatrice Liquido", en: "Liquid Laundry", al: "Lares Rrobash Likuid" },
    'lares-rrobash-pluhur': { it: "Lavatrice Polvere", en: "Powder Laundry", al: "Lares Rrobash Pluhur" },
    'lares-enesh': { it: "Detersivo Piatti", en: "Dishwashing", al: "Lares Enesh" }
};

const products = [];

for (const [cat, items] of Object.entries(categories)) {
    for (const item of items) {
        // Generate an ID (e.g. lofty-zbutes-loto-sweet)
        const id = `lofty-${cat}-${item.toLowerCase().replace(/[\s']/g, '-')}`;

        // Capitalize item names nicely
        const friendlyName = item.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

        const catNameAL = catMap[cat].al;
        const catNameIT = catMap[cat].it;

        products.push({
            id,
            linea: "lofty",
            categoria: cat,
            nomi: {
                it: friendlyName,
                en: friendlyName,
                al: friendlyName
            },
            descrizioni: {
                it: `Prodotto ${catNameIT.toLowerCase()} - ${friendlyName}. Formulazione studiata per le massime prestazioni.`,
                en: `${catMap[cat].en} product - ${friendlyName}. Formulated for maximum performance.`,
                al: `Produkti ${catNameAL.toLowerCase()} - ${friendlyName}. Formuluar për performancë maksimale.`
            },
            highlights: ["HACCP", "Qualità Garantita"],
            immagine: "https://images.unsplash.com/photo-1584824486509-114594d09203?auto=format&fit=crop&q=80&w=400&h=400", // Generic placeholder
            disponibile_alla_spina: true
        });
    }
}

// Write the output to products.json
fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));
console.log(`Generated ${products.length} products to src/data/products.json`);
