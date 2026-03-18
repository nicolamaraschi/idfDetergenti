import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ui/ContactForm';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
    const { t } = useTranslation();

    const contactInfo = [
        {
            icon: MapPin,
            title: t('contact.address_label', 'Indirizzo'),
            content: t('contact.address'),
            link: "https://goo.gl/maps/XYZ", // Placeholder or real link if known
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: Phone,
            title: t('contact.phone_label', 'Telefono'),
            content: t('contact.phone'),
            link: `tel:${t('contact.phone').replace(/\s/g, '')}`,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Mail,
            title: t('contact.email_label', 'Email'),
            content: t('contact.email_val'),
            link: `mailto:${t('contact.email_val')}`,
            color: "text-purple-600",
            bg: "bg-purple-50"
        }
    ];

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Header Section */}
            <div className="relative bg-black py-24 px-4 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10 py-12">
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-2xl">
                        {t('contact.title')}
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
                        {t('contact.subtitle', 'Siamo qui per aiutarti. Contattaci per informazioni sui prodotti o per collaborazioni.')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24 relative z-20">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((info, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                            <div className={`${info.bg} ${info.color} p-4 rounded-2xl mb-6`}>
                                <info.icon size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                            <p className="text-gray-600 break-words max-w-full">
                                {info.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Map Section */}
                    <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 h-full min-h-[500px] flex flex-col">
                        <div className="flex items-center gap-3 mb-6 p-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('contact.map_title')}</h2>
                        </div>

                        <div className="flex-grow rounded-2xl overflow-hidden border border-gray-100 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                            <iframe
                                title="IDS Detergenti Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.123!2d20.063!3d41.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13506cf2c7e0c4bf%3A0x7d0a0a0a0a0a0a0a!2sUzina%2012%2C%20Ish%20Kombinati%20Metalurgjik!5e0!3m2!1sit!2sal!4v1700000000000!5m2!1sit!2sal"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-2xl flex items-start gap-3">
                            <Clock size={20} className="text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 leading-tight">Orari di Apertura</h4>
                                <p className="text-sm text-gray-600">Lunedì - Sabato: 08:00 - 18:00<br />Domenica: Chiuso</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Inviaci un messaggio</h2>
                            <p className="text-gray-500">Ti risponderemo nel più breve tempo possibile.</p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
