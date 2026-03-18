const fs = require('fs');

const path = './src/data/products.json';
const products = JSON.parse(fs.readFileSync(path, 'utf8'));

// Relevant Unsplash images for different categories
const categoryImages = {
    'zbutes': "https://images.unsplash.com/photo-1584824486509-114594d09203?auto=format&fit=crop&q=80&w=400&h=400", // Generic detergent
    'lavatrice': "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=400&h=400", // bubbles/laundry
    'dysheme': "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=400&h=400", // mop/floor cleaning
    'ene': "https://images.unsplash.com/photo-1585834057406-25805562095f?auto=format&fit=crop&q=80&w=400&h=400", // dishes/sponge
    'detergjente': "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400&h=400", // cleaning spray

    'higjena-personale': "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=400&h=400", // soap/shampoo bottles
    'zbutes-rrobash': "https://images.unsplash.com/photo-1610555356070-d1fb336f4ae4?auto=format&fit=crop&q=80&w=400&h=400", // towels
    'lares-rrobash-likuid': "https://images.unsplash.com/photo-1582735689146-24baea4bbf02?auto=format&fit=crop&q=80&w=400&h=400", // liquid detergent
    'lares-rrobash-pluhur': "https://images.unsplash.com/photo-1604335399105-a0c58e473e6e?auto=format&fit=crop&q=80&w=400&h=400", // powder
    'lares-enesh': "https://images.unsplash.com/photo-1622322300486-1df25026a0b9?auto=format&fit=crop&q=80&w=400&h=400", // sink/dishes

    'heqes-yndyror': "https://images.unsplash.com/photo-1584824584225-b461f855aab0?auto=format&fit=crop&q=80&w=400&h=400", // degreaser
    'solucion-per-banjon': "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=400", // bathroom
    'solucion-per-dysheme': "https://images.unsplash.com/photo-1527515637-65d1d60920a0?auto=format&fit=crop&q=80&w=400&h=400", // pro floor
    'sapu-likuid': "https://images.unsplash.com/photo-1584305574647-0cc9ec9ce3db?auto=format&fit=crop&q=80&w=400&h=400", // liquid soap dispenser
    'parfum-ambjenti': "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=400&h=400", // air freshener / diffuser
    'produkte-specifike': "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400&h=400", // generic
    'industriale-lid': "https://images.unsplash.com/photo-1621644026330-01c51167dcaf?auto=format&fit=crop&q=80&w=400&h=400" // industrial canister
};

// Fallback image
const defaultImage = "https://images.unsplash.com/photo-1584824486509-114594d09203?auto=format&fit=crop&q=80&w=400&h=400";

let updatedCount = 0;

for (const product of products) {
    const newImage = categoryImages[product.categoria] || defaultImage;
    if (product.immagine !== newImage) {
        product.immagine = newImage;
        updatedCount++;
    }
}

fs.writeFileSync(path, JSON.stringify(products, null, 2));
console.log(`Updated images for ${updatedCount} products.`);
