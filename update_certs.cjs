const fs = require('fs');

const pathIT = './src/i18n/locales/it.json';
const pathEN = './src/i18n/locales/en.json';
const pathAL = './src/i18n/locales/al.json';

const it = JSON.parse(fs.readFileSync(pathIT, 'utf8'));
const en = JSON.parse(fs.readFileSync(pathEN, 'utf8'));
const al = JSON.parse(fs.readFileSync(pathAL, 'utf8'));

const certIT = {
    "title": "Le Nostre Certificazioni",
    "subtitle": "IDS Detergenti È Certificato con: EN ISO 9001:2008 e EN ISO 14001:2004",
    "desc1": "La nostra dedizione alla qualità e all'ambiente è comprovata dalle certificazioni internazionali.",
    "desc2": "Garantiamo standard eccellenti nella produzione dei nostri detergenti."
};

const certEN = {
    "title": "Our Certifications",
    "subtitle": "IDS Detergenti is Certified with: EN ISO 9001:2008 and EN ISO 14001:2004",
    "desc1": "Our dedication to quality and the environment is proven by international certifications.",
    "desc2": "We guarantee excellent standards in the production of our detergents."
};

const certAL = {
    "title": "Certifikimet Tona",
    "subtitle": "IDS Detergenti Eshte e Certifikuar me: EN ISO 9001:2008 dhe EN ISO 14001:2004",
    "desc1": "Përkushtimi ynë ndaj cilësisë dhe mjedisit vërtetohet nga certifikimet ndërkombëtare.",
    "desc2": "Ne garantojmë standarde të shkëlqyera në prodhimin e detergjentëve tanë."
};

it.certifications = certIT;
en.certifications = certEN;
al.certifications = certAL;

fs.writeFileSync(pathIT, JSON.stringify(it, null, 4));
fs.writeFileSync(pathEN, JSON.stringify(en, null, 4));
fs.writeFileSync(pathAL, JSON.stringify(al, null, 4));

console.log('Certifications translations updated');
