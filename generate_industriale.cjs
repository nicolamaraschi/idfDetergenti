const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf8'));

const industrialeItems = [
    {
        name: "FOAM CLOR",
        descAL: "DETERGJENT SHKUME ALKALIN PER PERDORIM INDUSTRIAL",
        descIT: "Detergente schiumogeno alcalino per uso industriale",
        descEN: "Alkaline foaming detergent for industrial use"
    },
    {
        name: "STRONG CLOR",
        descAL: "DETERGJENT SHKUME I PERQENDRUAR ALKALIN PER PERDORIM INDUSTRIAL",
        descIT: "Detergente schiumogeno concentrato alcalino per uso industriale",
        descEN: "Concentrated alkaline foaming detergent for industrial use"
    },
    {
        name: "DEEP WASH",
        descAL: "DETERGJENT I PERQENDRUAR PASTRIMI AMBJETESH DHE PAJISJESH PER PERDORIM INDUSTRIAL",
        descIT: "Detergente concentrato per la pulizia di ambienti e attrezzature ad uso industriale",
        descEN: "Concentrated detergent for cleaning environments and equipment for industrial use"
    },
    {
        name: "ALCOSAN",
        descAL: "SOLUCION DUARSH HIGJIENIZUES ALKOOLIK VETETHARES PER PERDORIM INDUSTRIAL",
        descIT: "Soluzione mani igienizzante alcolica autoasciugante per uso industriale",
        descEN: "Self-drying alcoholic sanitizing hand solution for industrial use"
    },
    {
        name: "ALCOGEL",
        descAL: "SOLUCION DUARSH HIGJIENIZUES ALKOOLIK VETETHARES PER PERDORIM INDUSTRIAL",
        descIT: "Gel mani igienizzante alcolico autoasciugante per uso industriale",
        descEN: "Self-drying alcoholic sanitizing hand gel for industrial use"
    },
    {
        name: "ANTIBAKT",
        descAL: "SAPU LIKUID DUARSH HIGJENIZUES, ANTIBAKTERIAL PER PERDORIM INDUSTRIAL",
        descIT: "Sapone liquido mani igienizzante antibatterico per uso industriale",
        descEN: "Antibacterial sanitizing liquid hand soap for industrial use"
    },
    {
        name: "FOAM SOAP",
        descAL: "SAPU LIKUID DUARSH SHKUME, ANTIBAKTERIAL PER PERDORIM INDUSTRIAL",
        descIT: "Sapone schiuma mani antibatterico per uso industriale",
        descEN: "Antibacterial foaming hand soap for industrial use"
    },
    {
        name: "CLOREX GEL",
        descAL: "SOLUCION HIPOKLORIT NATRIUMI XHEL PER PERDORIM INDUSTRIAL",
        descIT: "Soluzione in gel di ipoclorito di sodio per uso industriale",
        descEN: "Sodium hypochlorite gel solution for industrial use"
    },
    {
        name: "SODE KAUSTIKE",
        descAL: "SODE KAUSTIKE SOL 28-30% PER PERDORIM INDUSTRIAL",
        descIT: "Soda Caustica sol. 28-30% per uso industriale",
        descEN: "Caustic Soda sol. 28-30% for industrial use"
    },
    {
        name: "WC GEL",
        descAL: "WC GEL PER PERDORIM INDUSTRIAL",
        descIT: "WC Gel per uso industriale",
        descEN: "WC Gel for industrial use"
    },
    {
        name: "LETER HIGJENIKE",
        descAL: "LETER HIGJENIKE PER PERDORIM NE SEKTORIN INDUSTRIAL",
        descIT: "Carta Igienica per uso nel settore industriale",
        descEN: "Toilet Paper for industrial sector use"
    },
    {
        name: "STACION SHKUME",
        descAL: "STACION SHKUME PER PASTRIM NE SEKTORIN INDUSTRIAL",
        descIT: "Stazione Schiuma per pulizia nel settore industriale",
        descEN: "Foam Station for cleaning in the industrial sector"
    }
];

let added = 0;

for (const item of industrialeItems) {
    const id = `industriale-${item.name.toLowerCase().replace(/[\s']/g, '-')}`;

    if (products.find(p => p.id === id)) continue;

    // Use specific localized names or title case the raw name
    const friendlyNameIT = item.name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    let nameAL = friendlyNameIT;
    let nameIT = friendlyNameIT;
    let nameEN = friendlyNameIT;

    if (item.name === "SODE KAUSTIKE") { nameIT = "Soda Caustica"; nameEN = "Caustic Soda"; }
    if (item.name === "LETER HIGJENIKE") { nameIT = "Carta Igienica"; nameEN = "Toilet Paper"; }
    if (item.name === "STACION SHKUME") { nameIT = "Stazione Schiuma"; nameEN = "Foam Station"; }

    // Sentences case for descriptions
    const descIT = item.descIT.charAt(0).toUpperCase() + item.descIT.slice(1) + ".";
    const descEN = item.descEN.charAt(0).toUpperCase() + item.descEN.slice(1) + ".";
    const descAL = item.descAL.charAt(0).toUpperCase() + item.descAL.slice(1).toLowerCase() + ".";

    products.push({
        id,
        linea: "industriale",
        categoria: "industriale-lid", // Groups them all together under the Industriale tab
        nomi: {
            it: nameIT,
            en: nameEN,
            al: nameAL
        },
        descrizioni: {
            it: descIT,
            en: descEN,
            al: descAL
        },
        highlights: ["Industriale", "Uso Professionale"],
        immagine: "https://images.unsplash.com/photo-1584824486509-114594d09203?auto=format&fit=crop&q=80&w=400&h=400",
        disponibile_alla_spina: false
    });
    added++;
}

fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));
console.log(`Added ${added} Industriale LID products. Total is now ${products.length}.`);
