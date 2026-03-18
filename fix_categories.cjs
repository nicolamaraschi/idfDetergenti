const fs = require('fs');
const path = './src/data/products.json';
const products = JSON.parse(fs.readFileSync(path, 'utf8'));

// Fix Industriale Categories
for (const p of products) {
    if (p.linea === 'industriale') {
        // Map the product name to its own category ID based on the screenshot
        const lowerName = p.nomi.it.toLowerCase();
        if (lowerName.includes('foam clor')) p.categoria = 'foam-clor';
        else if (lowerName.includes('strong clor')) p.categoria = 'strong-clor';
        else if (lowerName.includes('deep wash')) p.categoria = 'deep-wash';
        else if (lowerName.includes('alcosan')) p.categoria = 'alcosan';
        else if (lowerName.includes('alcogel')) p.categoria = 'alcogel';
        else if (lowerName.includes('antibakt')) p.categoria = 'antibakt';
        else if (lowerName.includes('foam soap')) p.categoria = 'foam-soap';
        else if (lowerName.includes('clorex gel')) p.categoria = 'clorex-gel';
        else if (lowerName.includes('sode kaustike')) p.categoria = 'sode-kaustike';
        else if (lowerName.includes('wc gel')) p.categoria = 'wc-gel';
        else if (lowerName.includes('leter higjenike')) p.categoria = 'leter-higjenike';
        else if (lowerName.includes('stacion shkume')) p.categoria = 'stacion-shkume';
    }

    // Fix Lofty Pro missing categories (lavastoviglie and sapu-foam)
    if (p.linea === 'lofty-pro') {
        const lowerName = p.nomi.it.toLowerCase();
        if (lowerName.includes('lavastoviglie')) p.categoria = 'lavastoviglie';
        if (lowerName.includes('foam') && lowerName.includes('sap')) p.categoria = 'sapu-foam';
    }
}

fs.writeFileSync(path, JSON.stringify(products, null, 2));
console.log('Fixed categories in products.json!');
