import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Droplet, Leaf, Award, Store, PiggyBank, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionTitle from '../components/ui/SectionTitle';

const HeroSection = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'it';

    return (
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    <Badge color="white" icon={<Leaf size={14} />}>Biodegradabile 90%</Badge>
                    <Badge color="white" icon={<Award size={14} />}>HACCP</Badge>
                    <Badge color="white" icon={<Store size={14} />}>IT / AL / MNE</Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black text-white tracking-tight mb-8 max-w-5xl leading-[0.9] uppercase drop-shadow-2xl"
                >
                    {t('hero.headline')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-xl md:text-3xl text-white max-w-3xl mb-12 font-medium drop-shadow-lg opacity-90"
                >
                    {t('hero.subline')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <Button href={`/${currentLang}/prodotti`} variant="white" className="text-xl px-12 py-5 font-bold shadow-2xl hover:scale-105 transition-transform">
                        {t('hero.ctaProducts')}
                    </Button>
                    <Button href={`/${currentLang}/apri-negozio`} variant="outline" className="text-xl px-12 py-5 border-white text-white hover:bg-white hover:text-primary focus:ring-white font-bold backdrop-blur-md hover:scale-105 transition-transform">
                        {t('hero.ctaFranchise')}
                    </Button>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </div>
    );
};

const BrandBanner = () => {
    return (
        <div className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white"
                >
                    <img
                        src="/stemma.jpg"
                        alt="Lofty Brand"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    );
};

const AboutStrip = () => {
    const { t } = useTranslation();

    return (
        <div className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side - Refined Presentation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10 blur-2xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/5 rounded-full -z-10 blur-3xl"></div>

                        <div className="relative rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white">
                            <img
                                src="/fotoAzienda.jpg"
                                alt="IDS Factory"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute bottom-10 -right-4 md:-right-10 bg-primary text-white p-8 rounded-[2rem] shadow-2xl">
                            <div className="text-4xl font-black mb-1 leading-none uppercase tracking-tighter italic">20+</div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Years Excellence</div>
                        </div>
                    </motion.div>

                    {/* Content Side - Premium Typography */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                Authentic Quality
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 uppercase tracking-tighter leading-[0.95]">
                                {t('about.title')}
                            </h2>
                            <div className="w-20 h-1.5 bg-accent mb-10 rounded-full"></div>

                            <p className="text-xl text-neutral-600 leading-relaxed font-medium mb-12">
                                {t('about.body')}
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        <Leaf size={20} />
                                    </div>
                                    <h4 className="font-black text-xs uppercase tracking-widest text-neutral-900">Ecofriendly</h4>
                                    <p className="text-neutral-500 text-xs font-semibold leading-relaxed">Sustainable production & biodegradable formulas.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        <Award size={20} />
                                    </div>
                                    <h4 className="font-black text-xs uppercase tracking-widest text-neutral-900">Certified</h4>
                                    <p className="text-neutral-500 text-xs font-semibold leading-relaxed">Highest European standards & HACCP compliance.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductsTeaser = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'it';

    const lines = [
        { id: 'lofty', title: t('homeProducts.lofty.title'), icon: <Droplet className="w-10 h-10 text-primary" />, desc: t('homeProducts.lofty.desc') },
        { id: 'lofty-pro', title: t('homeProducts.lofty-pro.title'), icon: <Briefcase className="w-10 h-10 text-primary" />, desc: t('homeProducts.lofty-pro.desc') },
        { id: 'paketuar', title: t('homeProducts.paketuar.title'), icon: <Store className="w-10 h-10 text-primary" />, desc: t('homeProducts.paketuar.desc') },
        { id: 'industriale', title: t('homeProducts.industriale.title'), icon: <Award className="w-10 h-10 text-primary" />, desc: t('homeProducts.industriale.desc') },
    ];

    return (
        <div className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title={t('homeProducts.title')}
                    subtitle={t('homeProducts.subtitle')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {lines.map((line) => (
                        <Link key={line.id} to={`/${currentLang}/prodotti`} className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white hover:bg-primary shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary">
                            <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                                <div className="group-hover:text-white transition-colors duration-500">
                                    {line.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-white transition-colors duration-500">{line.title}</h3>
                            <p className="text-gray-500 group-hover:text-white/80 transition-colors duration-500 font-medium">{line.desc}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button href={`/${currentLang}/prodotti`} variant="primary" className="text-xl px-12 py-5 shadow-xl shadow-primary/20">
                        {t('homeProducts.cta')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const FranchiseTeaser = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'it';

    return (
        <div className="py-24 bg-gradient-to-br from-neutral-900 via-primary-dark to-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[150px]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight"
                    >
                        {t('franchise.title')}
                    </motion.h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        {t('franchise.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                        <Store className="w-14 h-14 text-accent mb-8 shadow-inner" />
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">{t('franchise.store.title')}</h3>
                        <p className="text-blue-50/80 leading-relaxed font-medium text-lg">{t('franchise.store.body')}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 md:mt-0">
                        <Briefcase className="w-14 h-14 text-accent mb-8 shadow-inner" />
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">{t('franchise.corner.title')}</h3>
                        <p className="text-blue-50/80 leading-relaxed font-medium text-lg">{t('franchise.corner.body')}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 md:mt-0">
                        <PiggyBank className="w-14 h-14 text-accent mb-8 shadow-inner" />
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">{t('franchise.profit.title')}</h3>
                        <p className="text-blue-50/80 leading-relaxed font-medium text-lg">{t('franchise.profit.body')}</p>
                    </div>
                </div>

                <div className="text-center">
                    <Button href={`/${currentLang}/apri-negozio`} variant="accent" className="text-2xl px-16 py-6 font-black uppercase tracking-widest shadow-2xl shadow-accent/20 hover:shadow-accent/40 hover:scale-105 transition-all">
                        {t('hero.ctaFranchise')}
                    </Button>
                </div>
            </div>
        </div>
    );
}

const HomePage = () => {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <BrandBanner />
            <ProductsTeaser />
            <AboutStrip />
            <FranchiseTeaser />
        </div>
    );
};

export default HomePage;
