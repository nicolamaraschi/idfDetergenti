const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = './src/data/products.json';
const PRODUCTS_DIR = './public/products';

// Read existing products
const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));

// Read available image files
const files = fs.readdirSync(PRODUCTS_DIR);

console.log(`Found ${files.length} files in ${PRODUCTS_DIR}`);

let updatedCount = 0;
let missingCount = 0;
const missingImages = [];

// Helper to normalize strings for comparison
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const updatedProducts = products.map(product => {
    // 1. Try exact match first (id + .png)
    let foundFile = files.find(f => f === `${product.id}.png`);

    // 2. Try fuzzy match if not found
    if (!foundFile) {
        const normalizedId = normalize(product.id);

        // Manual mapping for known typos found during inspection
        if (product.id === 'lofty-zbutes-actilife') {
            foundFile = files.find(f => f.includes('actilif'));
        } else if (product.id === 'lofty-ene-limone') {
            foundFile = files.find(f => f.includes('ofty-ene-limone'));
        } else {
            // General fuzzy search
            foundFile = files.find(f => {
                const normalizedFile = normalize(f.replace('.png', ''));
                return normalizedFile === normalizedId ||
                    normalizedFile.includes(normalizedId) ||
                    normalizedId.includes(normalizedFile);
            });
        }
    }

    if (foundFile) {
        const newPath = `/products/${foundFile}`;
        if (product.immagine !== newPath) {
            product.immagine = newPath;
            updatedCount++;
        }
    }

    // Check if it's still an Unsplash link
    if (product.immagine.includes('unsplash.com')) {
        missingCount++;
        missingImages.push({
            id: product.id,
            name: product.nomi.it,
            category: product.categoria
        });
    }

    return product;
});

// Save changes
fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(updatedProducts, null, 2));

console.log('\n--- REPORT ---');
console.log(`Updated: ${updatedCount} products with local images.`);
console.log(`Still Missing: ${missingCount} products (using Unsplash).`);

if (missingImages.length > 0) {
    console.log('\n--- MISSING IMAGES (Left on Unsplash) ---');
    missingImages.forEach(img => {
        console.log(`- [${img.id}] ${img.name} (${img.category})`);
    });
}
