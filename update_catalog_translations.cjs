const fs = require('fs');

const updateJson = (filePath, newData) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Merge or add to catalog.hero
    data.catalog = { ...data.catalog, hero: newData };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    console.log(`Updated ${filePath}`);
};

const itDataAdd = {
    title: "Catalogo Prodotti",
    subtitle: "Naviga tra le nostre linee e categorie professionali",
    onTap: "Alla Spina"
};

const enDataAdd = {
    title: "Product Catalog",
    subtitle: "Browse through our professional lines and categories",
    onTap: "On Tap"
};

const alDataAdd = {
    title: "Katalogu i Produkteve",
    subtitle: "Navigoni mes linjave dhe kategorive tona profesionale",
    onTap: "Me Peshë"
};

updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/it.json', itDataAdd);
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/en.json', enDataAdd);
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/al.json', alDataAdd);
