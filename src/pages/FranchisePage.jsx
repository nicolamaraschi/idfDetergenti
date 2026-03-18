import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Store, Briefcase, PiggyBank, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const negozioImages = [
    '/negozio/558772338_1410196027774894_4606989920286035162_n.jpg',
    '/negozio/559140311_1410196007774896_3832015438357966235_n.jpg',
    '/negozio/559426688_1410196061108224_267204543413620949_n.jpg'
];

const NegozioCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + negozioImages.length) % negozioImages.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 group border-8 border-white">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentIndex}
                    src={negozioImages[currentIndex]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/90 hover:text-primary text-white p-4 rounded-full transition-all opacity-0 group-hover:opacity-100"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft size={32} />
            </button>
            <button
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/90 hover:text-primary text-white p-4 rounded-full transition-all opacity-0 group-hover:opacity-100"
                onClick={() => paginate(1)}
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
                {negozioImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`h-2.5 rounded-full transition-all duration-500 ${index === currentIndex ? "w-12 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>

            {/* Visual enhancement overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>
        </div>
    );
};

const FranchisePage = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            icon: <Store className="w-10 h-10 text-primary" />,
            title: t('franchise.store.title'),
            desc: t('franchise.store.body')
        },
        {
            icon: <Briefcase className="w-10 h-10 text-primary" />,
            title: t('franchise.corner.title'),
            desc: t('franchise.corner.body')
        },
        {
            icon: <PiggyBank className="w-10 h-10 text-primary" />,
            title: t('franchise.profit.title'),
            desc: t('franchise.profit.body')
        }
    ];

    const offerItems = t('franchisePage.offer.items', { returnObjects: true }) || [];
    const requirementItems = t('franchisePage.requirements.items', { returnObjects: true }) || [];

    return (
        <div className="bg-neutral-50 min-h-screen pb-24">
            {/* Hero Section */}
            <div className="relative bg-black py-28 md:py-48 px-4 text-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-8xl font-black tracking-tight mb-8 uppercase text-white drop-shadow-2xl"
                    >
                        {t('franchisePage.hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
                    >
                        {t('franchisePage.hero.subtitle')}
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 relative z-20">
                {/* Store Action Section - Featuring Vertical Video */}
                <div className="mb-32 flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[4rem] p-8 md:p-16 shadow-3xl border border-blue-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32"></div>
                    
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[320px] aspect-[9/16] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.15)] border-[10px] border-gray-900"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/store-video.mp4" type="video/mp4" />
                            </video>
                            {/* Reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-2/3 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-[0.2em] mb-6">
                                Experience IDS
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.95] mb-8">
                                Il Tuo Successo <br /> 
                                <span className="text-primary italic">Inizia Qui.</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
                                Guarda come prende vita un nostro punto vendita. Ambienti puliti, design moderno e un sistema alla spina che fidelizza i clienti e rispetta l'ambiente. Entrare a far parte della famiglia IDS significa investire in un futuro concreto e sostenibile.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100/50">
                                    <div className="text-3xl font-black text-primary mb-1 tracking-tighter uppercase">Chiavi in mano</div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Ti seguiamo in ogni fase</div>
                                </div>
                                <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10">
                                    <div className="text-3xl font-black text-accent mb-1 tracking-tighter uppercase">90% Bio</div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Un brand con valori forti</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Benefits Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {benefits.map((b, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 flex flex-col items-center text-center border border-gray-100 group transition-all duration-500"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-blue-50 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                                {b.icon}
                            </div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-5 uppercase tracking-wider">{b.title}</h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Grand Carousel Section */}
                <section className="mb-32 space-y-12">
                    <div className="text-center space-y-4 max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-black uppercase tracking-[0.3em] text-sm"
                        >
                            {t('franchisePage.carousel.tag')}
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                            {t('franchisePage.carousel.title')}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {t('franchisePage.carousel.subtitle')}
                        </p>
                    </div>
                    <NegozioCarousel />
                </section>

                {/* Info Grid - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-32">
                    {/* What we offer */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 flex flex-col h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Store size={120} className="text-primary transform -rotate-12" />
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 mb-10 flex items-center gap-5 relative">
                            <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold">1</span>
                            {t('franchisePage.offer.title')}
                        </h3>
                        <ul className="space-y-6 relative">
                            {offerItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 group/item">
                                    <div className="mt-1.5 p-1 bg-accent/10 rounded-full">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-bold text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* What we look for */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 p-12 rounded-[3.5rem] shadow-2xl text-white flex flex-col h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Users size={120} className="text-white transform rotate-12" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-5 relative">
                            <span className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center text-xl font-bold text-primary">2</span>
                            {t('franchisePage.requirements.title')}
                        </h3>
                        <ul className="space-y-6 relative">
                            {requirementItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-5 group/item">
                                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_15px_rgba(255,165,0,0.5)]"></div>
                                    <span className="text-gray-300 font-bold text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-24 bg-gradient-to-br from-primary via-blue-900 to-black rounded-[4rem] text-white text-center shadow-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[150px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-10 blur-[150px] -ml-48 -mb-48"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tight">{t('franchisePage.cta.title')}</h2>
                        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                            {t('franchisePage.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href={`tel:${t('contact.phone')}`} className="bg-white text-primary px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl text-xl w-full sm:w-auto">
                                {t('franchisePage.cta.call')}
                            </a>
                            <a href="mailto:info@idsdetergenti.com" className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all text-xl w-full sm:w-auto">
                                {t('franchisePage.cta.write')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Users = ({ className, size }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export default FranchisePage;
