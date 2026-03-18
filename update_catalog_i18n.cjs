const fs = require('fs');

const pathIT = './src/i18n/locales/it.json';
const pathEN = './src/i18n/locales/en.json';
const pathAL = './src/i18n/locales/al.json';

const it = JSON.parse(fs.readFileSync(pathIT, 'utf8'));
const en = JSON.parse(fs.readFileSync(pathEN, 'utf8'));
const al = JSON.parse(fs.readFileSync(pathAL, 'utf8'));

const catalogIT = {
    "assortment": "Assortimento",
    "all": "Tutti",
    "productsCount": "Prodotti",
    "noProducts": "Nessun prodotto trovato",
    "noProductsDesc": "La selezione attuale non contiene prodotti nel database o sono in fase di caricamento.",
    "showAll": "Mostra tutti i prodotti della linea",
    "lines": {
        "lofty": "Linea Lofty",
        "lofty-pro": "Linea Lofty Professional",
        "paketuar": "Linea Confezionata",
        "industriale": "Linea Industriale LID"
    },
    "categories": {
        "zbutes": "Ammorbidente",
        "lavatrice": "Lavatrice",
        "dysheme": "Pavimenti",
        "ene": "Stoviglie",
        "detergjente": "Detergenti Vari",
        "higjena-personale": "Igiene Personale",
        "zbutes-rrobash": "Ammorbidente Bucato",
        "lares-rrobash-likuid": "Lavatrice Liquido",
        "lares-rrobash-pluhur": "Lavatrice Polvere",
        "lares-enesh": "Detersivo Piatti",
        "lavastoviglie": "Lavastoviglie",
        "heqes-yndyror": "Sgrassatori",
        "solucion-per-banjon": "Prodotti Bagno",
        "solucion-per-dysheme": "Pavimenti Professionali",
        "sapu-likuid": "Sapone Liquido",
        "sapu-foam": "Sapone Schiuma",
        "parfum-ambjenti": "Profumatore Ambienti",
        "produkte-specifike": "Prodotti Specifici",
        "foam-clor": "Foam Clor",
        "strong-clor": "Strong Clor",
        "deep-wash": "Deep Wash",
        "alcosan": "Alcosan",
        "alcogel": "Alcogel",
        "antibakt": "Antibatterico",
        "foam-soap": "Foam Soap",
        "clorex-gel": "Clorex Gel",
        "sode-kaustike": "Soda Caustica",
        "wc-gel": "WC Gel",
        "leter-higjenike": "Carta Igienica",
        "stacion-shkume": "Stazione Schiuma"
    }
};

const catalogEN = {
    "assortment": "Assortment",
    "all": "All",
    "productsCount": "Products",
    "noProducts": "No products found",
    "noProductsDesc": "The current selection contains no products in the database or they are loading.",
    "showAll": "Show all products in this line",
    "lines": {
        "lofty": "Lofty Line",
        "lofty-pro": "Lofty Professional Line",
        "paketuar": "Packaged Line",
        "industriale": "Industrial LID Line"
    },
    "categories": {
        "zbutes": "Fabric Softener",
        "lavatrice": "Laundry",
        "dysheme": "Floors",
        "ene": "Dishes",
        "detergjente": "Various Detergents",
        "higjena-personale": "Personal Hygiene",
        "zbutes-rrobash": "Laundry Softener",
        "lares-rrobash-likuid": "Liquid Laundry",
        "lares-rrobash-pluhur": "Powder Laundry",
        "lares-enesh": "Dish Soap",
        "lavastoviglie": "Dishwasher",
        "heqes-yndyror": "Degreasers",
        "solucion-per-banjon": "Bathroom Cleaners",
        "solucion-per-dysheme": "Professional Floor Cleaners",
        "sapu-likuid": "Liquid Soap",
        "sapu-foam": "Foam Soap",
        "parfum-ambjenti": "Air Fresheners",
        "produkte-specifike": "Specific Products",
        "foam-clor": "Foam Chlor",
        "strong-clor": "Strong Chlor",
        "deep-wash": "Deep Wash",
        "alcosan": "Alcosan",
        "alcogel": "Alcogel",
        "antibakt": "Antibacterial",
        "foam-soap": "Foam Soap",
        "clorex-gel": "Clorex Gel",
        "sode-kaustike": "Caustic Soda",
        "wc-gel": "WC Gel",
        "leter-higjenike": "Toilet Paper",
        "stacion-shkume": "Foam Station"
    }
};

// Based entirely on user's exact requested screenshot terms
const catalogAL = {
    "assortment": "Asortimenti",
    "all": "Të gjitha",
    "productsCount": "Produkte",
    "noProducts": "Nuk u gjet asnjë produkt",
    "noProductsDesc": "Zgjedhja aktuale nuk përmban asnjë produkt ose ato janë në ngarkim.",
    "showAll": "Shfaqni të gjitha produktet e linjës",
    "lines": {
        "lofty": "Linja Lofty",
        "lofty-pro": "Linja Lofty Profesional",
        "paketuar": "Linja E Paketuar",
        "industriale": "Linja Industriale LID"
    },
    "categories": {
        "zbutes": "Zbutes",
        "lavatrice": "Lavatrice",
        "dysheme": "Dysheme",
        "ene": "Ene",
        "detergjente": "Detergjente",
        "higjena-personale": "Higjena Personale",
        "zbutes-rrobash": "Zbutes Rrobash",
        "lares-rrobash-likuid": "Lares Rrobash Likuid",
        "lares-rrobash-pluhur": "Lares Rrobash Pluhur",
        "lares-enesh": "Lares Enesh",
        "lavastoviglie": "Lavastoviglie",
        "heqes-yndyror": "Heqes Yndyror",
        "solucion-per-banjon": "Solucion per Banjon",
        "solucion-per-dysheme": "Solucion per Dysheme",
        "sapu-likuid": "Sapu Likuid",
        "sapu-foam": "Sapu Foam",
        "parfum-ambjenti": "Parfum Ambjenti",
        "produkte-specifike": "Produkte Specifike",
        "foam-clor": "Foam Clor",
        "strong-clor": "Strong Clor",
        "deep-wash": "Deep Wash",
        "alcosan": "Alcosan",
        "alcogel": "Alcogel",
        "antibakt": "Antibakt",
        "foam-soap": "Foam Soap",
        "clorex-gel": "Clorex Gel",
        "sode-kaustike": "Sode Kaustike",
        "wc-gel": "WC Gel",
        "leter-higjenike": "Leter Higjenike",
        "stacion-shkume": "Stacion Shkume"
    }
};

it.catalog = catalogIT;
en.catalog = catalogEN;
al.catalog = catalogAL;

fs.writeFileSync(pathIT, JSON.stringify(it, null, 4));
fs.writeFileSync(pathEN, JSON.stringify(en, null, 4));
fs.writeFileSync(pathAL, JSON.stringify(al, null, 4));

console.log('Catalog translations added!');
