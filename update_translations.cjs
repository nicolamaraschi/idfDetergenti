const fs = require('fs');

const updateJson = (filePath, marketingData) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.marketingPage = marketingData;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    console.log(`Updated ${filePath}`);
};

const itData = {
    hero: { title: "Marketing & Media", subtitle: "Scopri la nostra presenza mediatica, la partecipazione agli eventi e i nostri strumenti di comunicazione." },
    tv: { label: "Televisione", title: "IDS Detergenti nei Media Nazionali", desc: "Segui le nostre interviste e gli spot pubblicitari trasmessi sui principali canali televisivi. Il nostro impegno per la qualità e l'innovazione presentato al grande pubblico.", source: "Pubblicato sul canale ufficiale YouTube" },
    social: { title: "Entra nella nostra community", desc: "Seguici su Facebook per rimanere sempre aggiornato sulle ultime offerte, consigli di pulizia e le nostre attività quotidiane.", cta: "Seguici su Facebook" },
    fiere: { title: "Partecipazione alle Fiere", desc: "IDS Detergenti è sempre presente nelle più importanti fiere di settore nella regione, mostrando le nostre ultime tecnologie alla spina.", upcoming: "Prossimi eventi in arrivo..." },
    catalog: { label: "Catalogo 2024", title: "Sfoglia il nostro Catalogo Completo", desc: "Scopri l'intera gamma dei nostri prodotti, dalla linea casa a quella professionale e industriale. Tutto ciò che serve per un pulito perfetto.", view: "Vedi Online", download: "Scarica PDF" }
};

const enData = {
    hero: { title: "Marketing & Media", subtitle: "Discover our media presence, participation in events and our communication tools." },
    tv: { label: "Television", title: "IDS Detergenti in National Media", desc: "Follow our interviews and commercials broadcast on the main television channels. Our commitment to quality and innovation presented to the general public.", source: "Published on the official YouTube channel" },
    social: { title: "Join our community", desc: "Follow us on Facebook to stay up to date with the latest offers, cleaning tips and our daily activities.", cta: "Follow us on Facebook" },
    fiere: { title: "Participation in Fairs", desc: "IDS Detergenti is always present in the most important trade fairs in the region, showing our latest on-tap technologies.", upcoming: "Upcoming events coming soon..." },
    catalog: { label: "2024 Catalog", title: "Browse our Full Catalog", desc: "Discover the full range of our products, from home to professional and industrial lines. Everything you need for a perfect clean.", view: "View Online", download: "Download PDF" }
};

const alData = {
    hero: { title: "Marketing & Media", subtitle: "Zbuloni prezencën tonë mediatike, pjesëmarrjen në evente dhe mjetet tona të komunikimit." },
    tv: { label: "Televizioni", title: "IDS Detergenti në Mediat Kombëtare", desc: "Ndiqni intervistat tona dhe spotet publicitare që shfaqen në kanalet kryesore televizive. Angazhimi ynë ndaj cilësisë dhe inovacionit prezantohet për publikun e gjerë.", source: "Publikuar në kanalin zyrtar YouTube" },
    social: { title: "Behuni pjesë e komunitetit tonë", desc: "Na ndiqni në Facebook për të qenë gjithmonë të përditësuar me ofertat e fundit, këshillat për pastrimin dhe aktivitetet tona të përditshme.", cta: "Na ndiqni në Facebook" },
    fiere: { title: "Pjesëmarrja në Panair", desc: "IDS Detergenti është gjithmonë prezent në panairet më të rëndësishme të tregtisë dhe industrisë në mbarë rajonin, duke treguar teknologjinë tonë më të fundit alla spina.", upcoming: "Eventet e ardhshme së shpejti..." },
    catalog: { label: "Katalogu 2024", title: "Shfletoni Katalogun tonë të Plotë", desc: "Zbuloni gamën tonë të plotë të produkteve, nga linja shtëpiake te ajo profesionale dhe industriale. Gjithçka që ju nevojitet për një pastrim perfekt.", view: "Shiko Online", download: "Shkarko PDF" }
};

updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/it.json', itData);
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/en.json', enData);
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/al.json', alData);
