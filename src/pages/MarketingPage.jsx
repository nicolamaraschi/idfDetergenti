import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Youtube, Facebook, Calendar, FileText, ExternalLink, Play, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fieraImages = [
    '/fiera/60397540_1040276906173524_3379326602599989248_n.jpg',
    '/fiera/60741968_1040276896173525_7229984793163726848_n.jpg',
    '/fiera/88450526_1267949923406220_2542185133843152896_n.jpg',
    '/fiera/89110301_1267949806739565_6274056357339463680_n.jpg',
    '/fiera/89255793_1267949803406232_223741601116061696_n.jpg',
    '/fiera/89533990_1271143823086830_8416720386313420800_n.jpg',
    '/fiera/89671733_1271143819753497_7435997031274905600_n.jpg'
];

const FieraCarousel = () => {
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
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + fieraImages.length) % fieraImages.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentIndex}
                    src={fieraImages[currentIndex]}
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all"
                onClick={() => paginate(1)}
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {fieraImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
    );
};

export default function MarketingPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-neutral-50 min-h-screen pb-20">
            {/* Header Hero */}
            <div className="relative bg-black py-20 px-4 overflow-hidden shadow-lg">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/40"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10 py-8">
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
                        {t('marketingPage.hero.title')}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-lg">
                        {t('marketingPage.hero.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

                {/* Sezione Televisione */}
                <section id="television" className="scroll-mt-24">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold uppercase tracking-wider">
                                <Youtube size={20} /> {t('marketingPage.tv.label')}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                {t('marketingPage.tv.title')}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('marketingPage.tv.desc')}
                            </p>
                            <div className="flex items-center gap-4 text-gray-500 italic">
                                <Play size={16} className="text-red-600" />
                                <span>{t('marketingPage.tv.source')}</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/GDrdck59c8s"
                                    title="IDS Detergenti YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sezione Social & Fiere */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Social Media */}
                    <section id="social" className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                                <Facebook size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">{t('marketingPage.social.title')}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {t('marketingPage.social.desc')}
                            </p>
                        </div>
                        <a
                            href="https://www.facebook.com/idsdetergenti116/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                        >
                            {t('marketingPage.social.cta')} <ExternalLink size={18} />
                        </a>
                    </section>

                    {/* Fiere Section with Carousel */}
                    <section id="fiere" className="flex flex-col gap-8">
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group h-full">
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
                                    <Calendar size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">{t('marketingPage.fiere.title')}</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('marketingPage.fiere.desc')}
                                </p>
                                <div className="pt-2">
                                    <FieraCarousel />
                                </div>
                                <div className="mt-6 flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                                    <Users className="text-orange-600" />
                                    <span className="text-orange-900 font-bold">{t('marketingPage.fiere.upcoming')}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sezione Catalogo */}
                <section id="catalog" className="bg-gradient-to-r from-gray-900 to-slate-800 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-2/3 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-wider">
                                <FileText size={20} /> {t('marketingPage.catalog.label')}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                {t('marketingPage.catalog.title')}
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                {t('marketingPage.catalog.desc')}
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex flex-col gap-4">
                            <button className="w-full bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 text-lg shadow-xl shadow-black/20">
                                {t('marketingPage.catalog.view')} <ChevronRight size={20} strokeWidth={2.5} />
                            </button>
                            <button className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-3 text-lg">
                                {t('marketingPage.catalog.download')}
                            </button>
                        </div>
                    </div>
                    {/* Background decoration elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full"></div>
                </section>

            </div>
        </div>
    );
}
