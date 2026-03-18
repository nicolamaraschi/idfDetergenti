const fs = require('fs');
const path = require('path');

const jsonPath = './src/data/products.json';
const productsDir = './public/products';

if (!fs.existsSync(jsonPath)) {
    console.error('File prodotti non trovato!');
    process.exit(1);
}

const products = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const files = fs.readdirSync(productsDir);

let updatedCount = 0;

products.forEach(product => {
    // Cerchiamo un file che corrisponda all'ID o al nome del prodotto
    // Pattern comuni: id.png, linea-categoria-nome.png

    const possibleFiles = [
        `${product.id}.png`,
        `${product.id.replace(/-/g, '_')}.png`,
        // Alcuni file sono nominati in modo leggermente diverso (es. senza categoria se ridondante)
        product.immagine.split('/').pop()
    ];

    // Se l'id è lofty-lavatrice-loto-sweet, cerchiamo anche lofty-loto-sweet.png
    if (product.id.includes('lavatrice')) {
        possibleFiles.push(product.id.replace('lavatrice-', '') + '.png');
    }

    for (const fileName of possibleFiles) {
        if (files.includes(fileName)) {
            const newPath = `/products/${fileName}`;
            if (product.immagine !== newPath) {
                product.immagine = newPath;
                updatedCount++;
            }
            break;
        }
    }
});

fs.writeFileSync(jsonPath, JSON.stringify(products, null, 2));
console.log(`✅ Aggiornate ${updatedCount} immagini nel catalogo!`);
