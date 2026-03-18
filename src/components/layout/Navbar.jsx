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
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentLang = lang || window.location.pathname.split('/')[1] || 'it';

    const links = [
        { to: `/${currentLang}/`, label: t('nav.home') },
        { to: `/${currentLang}/prodotti`, label: t('nav.products') },
        { to: `/${currentLang}/apri-negozio`, label: t('nav.openStore') },
        { to: `/${currentLang}/marketing`, label: t('nav.marketing') },
        { to: `/${currentLang}/news`, label: t('nav.news') },
        { to: `/${currentLang}/certificazioni`, label: t('nav.certifications') },
        { to: `/${currentLang}/contatti`, label: t('nav.contact') },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] py-3'
                    : 'bg-white py-5'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-12">

                    {/* BRAND - Left side */}
                    <div className="flex-shrink-0">
                        <Link to={`/${currentLang}/`} className="block">
                            <img src="/IDS-Logo.png" alt="IDS Detergenti" className="h-10 md:h-12 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* MENU - Center side */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center gap-1 bg-neutral-50/80 p-1.5 rounded-full border border-neutral-100">
                            {links.map((link) => {
                                const isActive = location.pathname === link.to || (link.to === `/${currentLang}/` && location.pathname === `/${currentLang}`);
                                return (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 relative ${isActive
                                                ? 'text-white'
                                                : 'text-neutral-500 hover:text-neutral-900 border border-transparent'
                                            }`}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="pill-active"
                                                className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20 z-0"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* ACTIONS - Right side */}
                    <div className="hidden lg:flex items-center justify-end gap-6">
                        <div className="flex items-center gap-3 pr-6 border-r border-neutral-200">
                            <a href="tel:+355692086130" className="flex items-center gap-2 group">
                                <div className="w-9 h-9 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={15} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900">+355 69...</span>
                            </a>
                        </div>
                        <LanguageSwitcher light={false} />
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <LanguageSwitcher light={false} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2.5 rounded-2xl transition-all ${isOpen ? 'bg-primary text-white shadow-lg' : 'bg-neutral-50 text-neutral-900 border border-neutral-100'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-2xl overflow-hidden z-40"
                    >
                        <div className="p-8 space-y-6">
                            {links.map((link, idx) => (
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={link.to}
                                >
                                    <Link
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="flex justify-between items-center group"
                                    >
                                        <span className="text-xl font-black uppercase tracking-tight text-neutral-900 group-hover:text-primary transition-colors">
                                            {link.label}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <ChevronRight size={18} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
