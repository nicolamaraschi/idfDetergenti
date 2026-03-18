const fs = require('fs');
const path = require('path');

const jsonPath = '/Users/nicolamaraschi/Documents/idsdetergenti/src/data/products.json';
const productsDir = '/Users/nicolamaraschi/Documents/idsdetergenti/public/products';

let products = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const files = fs.readdirSync(productsDir);

const updatedProducts = products.map(p => {
    // 1. Fix missing extensions in the JSON
    if (p.immagine && !p.immagine.startsWith('http') && !p.immagine.includes('.')) {
        p.immagine = p.immagine + '.png';
    }

    // 2. Replace Unsplash placeholders with local paths if the file exists
    if (p.immagine && p.immagine.startsWith('http')) {
        // Try to guess filename based on ID or category
        let guessedName = p.id;

        // Custom logic for ID mapping if needed, but let's check if p.id + .png exists
        if (files.includes(guessedName + '.png')) {
            p.immagine = '/products/' + guessedName + '.png';
        } else {
            // Check for specific common patterns found in the folder
            // e.g. detergenti, dysheme, etc.
            const patterns = {
                'lofty-detergjente-': 'lofty-detergjente-',
                'lofty-pro-': 'lofty-pro-',
                'industriale-': 'industriale-'
            };

            // Try to find a file that contains the core part of the ID
            const matchingFile = files.find(f => f.includes(p.id.replace('lofty-', '').replace('lofty-pro-', '')));
            if (matchingFile) {
                p.immagine = '/products/' + matchingFile;
            }
        }
    }

    // 3. Specific manual fixes for the ones mentioned in the chat
    if (p.id === 'lofty-detergjente-multiuso-alicante-brill') p.immagine = '/products/lofty-detergjente-multiuso-alicante-brill.png';
    if (p.id === 'lofty-detergjente-multiuso-lofty') p.immagine = '/products/lofty-detergjente-multiuso-lofty.png';
    if (p.id === 'lofty-detergjente-pronto-ammoniaca') p.immagine = '/products/lofty-detergjente-pronto-ammoniaca.png';
    if (p.id === 'lofty-zbutes-alpina') p.immagine = '/products/lofty-zbutes-alpina.png';
    if (p.id === 'lofty-dysheme-hypnotic') p.immagine = '/products/lofty-dysheme-hypnotic.png';
    if (p.id === 'lofty-ene-lavastoviglie-tabs') p.immagine = '/products/lofty-ene-lavastoviglie-tabs.png';
    if (p.id === 'lofty-detergjente-ace-gentile-gel') p.immagine = '/products/lofty-detergjente-ace-gentile-gel.png';
    if (p.id === 'lofty-detergjente-ace-profumata') p.immagine = '/products/lofty-detergjente-ace-profumata.png';
    if (p.id === 'lofty-detergjente-pulibagno') p.immagine = '/products/lofty-detergjente-pulibagno.png';
    if (p.id === 'lofty-detergjente-forni-e-grill') p.immagine = '/products/lofty-detergjente-forni-e-grill.png';
    if (p.id === 'lofty-detergjente-multiuso-alicante-brill') p.immagine = '/products/lofty-detergjente-multiuso-alicante-brill.png';
    if (p.id === 'lofty-detergjente-multiuso-lofty') p.immagine = '/products/lofty-detergjente-multiuso-lofty.png';
    if (p.id === 'lofty-detergjente-pronto-ammoniaca') p.immagine = '/products/lofty-detergjente-pronto-ammoniaca.png';
    if (p.id === 'lofty-detergjente-high-fragrance') p.immagine = '/products/lofty-detergjente-high-fragrance.png';
    if (p.id === 'lofty-higjena-personale-bagnoschiuma-talco-vid') p.immagine = '/products/lofty-higjena-personale-bagnoschiuma-talco-vid.png';

    // Industrial
    if (p.id === 'industriale-deep-wash') p.immagine = '/products/industriale-deep-wash.png';
    if (p.id === 'industriale-antibakt') p.immagine = '/products/industriale-antibakt.png';
    if (p.id === 'industriale-clorex-gel') p.immagine = '/products/industriale-clorex-gel.png';
    if (p.id === 'industriale-sode-kaustike') p.immagine = '/products/industriale-sode-kaustike.png';
    if (p.id === 'industriale-leter-higjenike') p.immagine = '/products/industriale-leter-higjenike.png';
    if (p.id === 'industriale-stacion-shkume') p.immagine = '/products/industriale-stacion-shkume.png';

    // Pro
    if (p.id === 'lofty-pro-lares-rrobash-likuid-alto-intenso') p.immagine = '/products/lofty-pro-lares-rrobash-likuid-alto-intenso.png';
    if (p.id === 'lofty-pro-lares-rrobash-pluhur-sslx-professionale') p.immagine = '/products/lofty-pro-lares-rrobash-pluhur-sslx-professionale.png';
    if (p.id === 'lofty-pro-lares-enesh-limone') p.immagine = '/products/lofty-pro-lares-enesh-limone.png';
    if (p.id === 'lofty-pro-lavastoviglie-lavastoviglie-liquido') p.immagine = '/products/lofty-pro-lavastoviglie-lavastoviglie-liquido.png';
    if (p.id === 'lofty-pro-heqes-yndyror-sgrassatore-active') p.immagine = '/products/lofty-pro-heqes-yndyror-sgrassatore-active.png';

    return p;
});

fs.writeFileSync(jsonPath, JSON.stringify(updatedProducts, null, 2));
console.log('JSON updated successfully!');
