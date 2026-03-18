import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, ChevronRight, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || window.location.pathname.split('/')[1] || 'it';

    const footerLinks = [
        { to: `/${currentLang}/`, label: t('nav.home') },
        { to: `/${currentLang}/prodotti`, label: t('nav.products') },
        { to: `/${currentLang}/apri-negozio`, label: t('nav.openStore') },
        { to: `/${currentLang}/marketing`, label: t('nav.marketing') },
        { to: `/${currentLang}/certificazioni`, label: t('nav.certifications') },
        { to: `/${currentLang}/contatti`, label: t('nav.contact') },
    ];

    return (
        <footer className="bg-neutral-900 text-neutral-50 pt-24 pb-12 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-[0.03] blur-[100px] -mr-64 -mt-64"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link to={`/${currentLang}/`} className="inline-block bg-white p-2 rounded-2xl mb-8">
                                <img src="/IDS-Logo.png" alt="IDS Detergenti" className="h-10 md:h-12 w-auto object-contain" />
                            </Link>
                            <p className="text-neutral-400 text-lg leading-relaxed max-w-md font-medium">
                                {t('hero.subline')}
                            </p>
                            <div className="flex gap-4 pt-6">
                                <a href="https://facebook.com" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                    <Facebook size={20} />
                                </a>
                                <a href="mailto:info@idsdetergenti.com" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-3 space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Navigazione</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {footerLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-neutral-400 hover:text-white transition-colors flex items-center group text-sm font-bold uppercase tracking-wider"
                                    >
                                        <ChevronRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Contatti Rapidi</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-1">Headquarters</span>
                                    <address className="not-italic text-sm font-bold text-neutral-300 leading-relaxed uppercase tracking-tight">
                                        Uzina 12, Ish Kombinati Metalurgjik<br />
                                        3001 Elbasan, Albania
                                    </address>
                                </div>
                            </div>

                            <a href="tel:+355692086130" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-1">Direct Line</span>
                                    <span className="text-lg font-black text-white">+355 69 20 86 130</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                            <ShieldCheck size={14} className="text-primary" />
                            ISO Certified Plant
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                            <Globe size={14} className="text-primary" />
                            Global Distribution
                        </div>
                    </div>

                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">
                        &copy; {new Date().getFullYear()} IDS Detergenti &bull; Professional Cleaning Solutions
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
