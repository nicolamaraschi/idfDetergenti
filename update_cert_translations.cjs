const fs = require('fs');

const updateJson = (filePath, lang) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const translations = {
        it: {
            certifications: {
                title: "Le Nostre Certificazioni",
                subtitle: "Eccellenza Certificata",
                desc1: "IDS Detergenti è orgogliosa di operare secondo i più alti standard internazionali. Ogni processo, dalla produzione alla logistica, è monitorato per garantire sicurezza e qualità totale.",
                desc2: "La nostra dedizione è comprovata dalle certificazioni EN ISO 9001 e EN ISO 14001.",
                viewFull: "Apri Documento Full",
                official: "Certificazione Ufficiale",
                verifiedBy: "Verificata da",
                process: {
                    one: "Analisi della Produzione",
                    two: "Controllo Gestione Ambientale",
                    three: "Validazione Qualità ISO"
                }
            }
        },
        en: {
            certifications: {
                title: "Our Certifications",
                subtitle: "Certified Excellence",
                desc1: "IDS Detergenti is proud to operate according to the highest international standards. Every process, from production to logistics, is monitored to ensure safety and total quality.",
                desc2: "Our dedication is proven by the EN ISO 9001 and EN ISO 14001 certifications.",
                viewFull: "Open Full Document",
                official: "Official Certification",
                verifiedBy: "Verified by",
                process: {
                    one: "Production Analysis",
                    two: "Environmental Management Audit",
                    three: "ISO Quality Validation"
                }
            }
        },
        al: {
            certifications: {
                title: "Certifikimet Tona",
                subtitle: "Ekselencë e Certifikuar",
                desc1: "IDS Detergenti është krenar që operon sipas standardeve më të larta ndërkombëtare. Çdo proces, nga prodhimi deri te logjistika, monitorohet për të garantuar siguri dhe cilësi totale.",
                desc2: "Përkushtimi ynë dëshmohet nga certifikimet EN ISO 9001 dhe EN ISO 14001.",
                viewFull: "Hap Dokumentin e Plotë",
                official: "Certifikim Zyrtar",
                verifiedBy: "Verifikuar nga",
                process: {
                    one: "Analiza e Prodhimit",
                    two: "Auditimi i Menaxhimit Mjedisor",
                    three: "Validimi i Cilësisë ISO"
                }
            }
        }
    };

    data.certifications = { ...data.certifications, ...translations[lang].certifications };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    console.log(`Updated ${filePath}`);
};

updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/it.json', 'it');
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/en.json', 'en');
updateJson('/Users/nicolamaraschi/Documents/idsdetergenti/src/i18n/locales/al.json', 'al');
