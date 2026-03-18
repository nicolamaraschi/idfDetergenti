import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentLang = lang || window.location.pathname.split('/')[1] || 'it';

    const links = [
        { to: `/${currentLang}/`, label: t('nav.home') },
        { to: `/${currentLang}/prodotti`, label: t('nav.products') },
        { to: `/${currentLang}/apri-negozio`, label: t('nav.openStore') },
        { to: `/${currentLang}/marketing`, label: t('nav.marketing') },
        { to: `/${currentLang}/certificazioni`, label: t('nav.certifications') },
        { to: `/${currentLang}/contatti`, label: t('nav.contact') },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3' : 'bg-white py-5'}`}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-12">
                    <Link to={`/${currentLang}/`} className="flex-shrink-0">
                        <img src="/IDS-Logo.png" alt="IDS" className="h-10 md:h-12 w-auto object-contain" />
                    </Link>

                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center gap-1 bg-neutral-50/80 p-1.5 rounded-full border border-neutral-100">
                            {links.map((link) => {
                                const isActive = location.pathname === link.to || (link.to === `/${currentLang}/` && location.pathname === `/${currentLang}`);
                                return (
                                    <Link key={link.to} to={link.to} className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all relative ${isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'}`}>
                                        <span className="relative z-10">{link.label}</span>
                                        {isActive && <motion.div layoutId="pill-active" className="absolute inset-0 bg-primary rounded-full z-0" />}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        <a href="tel:+355692086130" className="flex items-center gap-2 group border-r border-neutral-200 pr-6">
                            <div className="w-9 h-9 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-primary group-hover:text-white transition-all">
                                <Phone size={15} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest">+355 69...</span>
                        </a>
                        <LanguageSwitcher />
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button onClick={() => setIsOpen(!isOpen)} className={`p-2.5 rounded-2xl ${isOpen ? 'bg-primary text-white' : 'bg-neutral-50 text-neutral-900 border border-neutral-100'}`}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-neutral-100 shadow-2xl overflow-hidden">
                        <div className="p-8 space-y-6">
                            {links.map((link) => (
                                <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="flex justify-between items-center group">
                                    <span className="text-xl font-black uppercase tracking-tight text-neutral-900">{link.label}</span>
                                    <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-primary"><ChevronRight size={18} /></div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;