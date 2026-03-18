const fs = require('fs');
const path = './src/data/products.json';
const products = JSON.parse(fs.readFileSync(path, 'utf8'));

const updates = {
    "lofty-zbutes-loto-sweet": "/products/lofty-loto-sweet.png",
    "lofty-zbutes-mon-amour": "/products/lofty-mon-amour.png",
    "lofty-zbutes-blu-power": "/products/lofty-blu-power.png",
    "lofty-zbutes-spring-fresh": "/products/lofty-spring-fresh.png",
    "lofty-zbutes-fabuloso": "/products/lofty-fabuloso.png",
    "lofty-zbutes-argan": "/products/lofty-argan.png",
    "lofty-zbutes-cocole": "/products/lofty-cocole.png",
    "lofty-zbutes-hypnotic": "/products/lofty-hypnotic.png",
    "lofty-zbutes-len-blu": "/products/lofty-len-blu.png",
    "lofty-zbutes-felce-azur": "/products/lofty-felce-azur.png",
    "lofty-zbutes-lofty-gold": "/products/lofty-gold.png",
    "lofty-zbutes-muschio-e-orchidea": "/products/lofty-muschio-e-orchidea.png",
    "lofty-lavatrice-loto-sweet": "/products/lofty-lavatrice-loto-sweet.png",
    "lofty-lavatrice-mon-amour": "/products/lofty-lavatrice-mon-amour.png",
    "lofty-lavatrice-blu-power": "/products/lofty-lavatrice-blu-power.png",
    "lofty-lavatrice-spring-fresh": "/products/lofty-lavatrice-spring-fresh.png",
    "lofty-lavatrice-fabuloso": "/products/lofty-lavatrice-fabuloso.png"
};

let updated = 0;
for (const product of products) {
    if (updates[product.id]) {
        product.immagine = updates[product.id];
        updated++;
    }
}

fs.writeFileSync(path, JSON.stringify(products, null, 2));
console.log(`Updated paths for ${updated} products in products.json.`);
