const fs = require('fs');

const updateJson = (filePath, newData) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Merge or add to franchisePage
    data.franchisePage = { ...data.franchisePage, ...newData };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    console.log(`Updated ${filePath}`);
};

const itDataAdd = {
    carousel: {
        title: "Il tuo successo inizia qui",
        subtitle: "Guarda l'allestimento dei nostri punti vendita. Un'immagine coordinata forte e prodotti di qualità che richiamano i clienti.",
        tag: "Layout & Concept"
    },
    cta: {
        title: "Entra nella squadra vincente!",
        subtitle: "Non perdere l'opportunità di aprire un business sostenibile, redditizio ed ecologico.",
        call: "Chiamaci Ora",
        write: "Scrivici"
    }
};

const enDataAdd = {
    carousel: {
        title: "Your success starts here",
        subtitle: "Look at the setup of our stores. A strong coordinated image and quality products that attract customers.",
        tag: "Layout & Concept"
    },
    cta: {
        title: "Join the winning team!",
        subtitle: "Don't miss the opportunity to start a sustainable, profitable and ecological business.",
        call: "Call Now",
        write: "Email Us"
    }
};

const alDataAdd = {
    carousel: {
        title: "Suksesi juaj fillon këtu",
        subtitle: "Shikoni rregullimin e pikave tona të shitjes. Një imazh i fortë i koordinuar dhe produkte cilësore që tërheqin klientët.",
        tag: "Layout & Concept"
    },
    cta: {
        title: "Eja në skuadrën fituese!",
        subtitle: "Mos e humb mundësinë për të hapur një biznes të qëndrueshëm, fitimprurës dhe ekologjik.",
        call: "Telefono Tani",
        write: "Na Shkruani"
    }
};

updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/it.json', itDataAdd);
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/en.json', enDataAdd);
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/al.json', alDataAdd);
