import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import SectionTitle from '../components/ui/SectionTitle';
import {
    Droplet, CheckCircle, Shirt, Feather, Sparkles, Shield,
    Heart, Wind, Star, Briefcase, Flame, Bath, Utensils,
    ChevronRight, ChevronDown
} from 'lucide-react';

const categoryStyling = {
    'zbutes': { icon: Feather, bg: 'from-fuchsia-400 to-purple-500' },
    'lavatrice': { icon: Shirt, bg: 'from-blue-400 to-indigo-500' },
    'dysheme': { icon: Sparkles, bg: 'from-teal-400 to-emerald-500' },
    'ene': { icon: Utensils, bg: 'from-orange-400 to-amber-500' },
    'detergjente': { icon: Shield, bg: 'from-cyan-400 to-blue-500' },
    'higjena-personale': { icon: Heart, bg: 'from-rose-400 to-pink-500' },
    'zbutes-rrobash': { icon: Feather, bg: 'from-fuchsia-400 to-pink-500' },
    'lares-rrobash-likuid': { icon: Droplet, bg: 'from-blue-500 to-indigo-600' },
    'lares-rrobash-pluhur': { icon: Sparkles, bg: 'from-sky-400 to-blue-500' },
    'lares-enesh': { icon: Utensils, bg: 'from-amber-400 to-orange-500' },
    'heqes-yndyror': { icon: Flame, bg: 'from-red-400 to-orange-500' },
    'solucion-per-banjon': { icon: Bath, bg: 'from-teal-500 to-cyan-600' },
    'solucion-per-dysheme': { icon: Sparkles, bg: 'from-emerald-400 to-green-500' },
    'sapu-likuid': { icon: Droplet, bg: 'from-orange-300 to-rose-400' },
    'parfum-ambjenti': { icon: Wind, bg: 'from-violet-400 to-purple-500' },
    'produkte-specifike': { icon: Star, bg: 'from-indigo-400 to-violet-500' },
    'industriale-lid': { icon: Briefcase, bg: 'from-slate-500 to-gray-700' },
    'strong-clor': { icon: Shield, bg: 'from-yellow-400 to-red-500' }
};

const getCategoryStyle = (cat) => categoryStyling[cat] || { icon: Droplet, bg: 'from-gray-400 to-slate-500' };

const menuStructure = [
    {
        id: 'lofty',
        label: 'Linja Lofty',
        subcategories: [
            { id: 'all', label: 'Tutti' },
            { id: 'zbutes', label: 'Zbutes' },
            { id: 'lavatrice', label: 'Lavatrice' },
            { id: 'dysheme', label: 'Dysheme' },
            { id: 'ene', label: 'Ene' },
            { id: 'detergjente', label: 'Detergjente' },
            { id: 'higjena-personale', label: 'Higjena Personale' }
        ]
    },
    {
        id: 'lofty-pro',
        label: 'Linja Lofty Profesional',
        subcategories: [
            { id: 'all', label: 'Tutti' },
            { id: 'zbutes-rrobash', label: 'Zbutes Rrobash' },
            { id: 'lares-rrobash-likuid', label: 'Lares Rrobash Likuid' },
            { id: 'lares-rrobash-pluhur', label: 'Lares Rrobash Pluhur' },
            { id: 'lares-enesh', label: 'Lares Enesh' },
            { id: 'lavastoviglie', label: 'Lavastoviglie' },
            { id: 'heqes-yndyror', label: 'Heqes Yndyror' },
            { id: 'solucion-per-banjon', label: 'Solucion per Banjon' },
            { id: 'solucion-per-dysheme', label: 'Solucion per Dysheme' },
            { id: 'sapu-likuid', label: 'Sapu Likuid' },
            { id: 'sapu-foam', label: 'Sapu Foam' },
            { id: 'parfum-ambjenti', label: 'Parfum Ambjenti' },
            { id: 'produkte-specifike', label: 'Produkte Specifike' }
        ]
    },
    {
        id: 'paketuar',
        label: 'Linja e Paketuar',
        subcategories: []
    },
    {
        id: 'industriale',
        label: 'Linja Industriale LID',
        subcategories: [
            { id: 'all', label: 'Tutti' },
            { id: 'foam-clor', label: 'Foam Clor' },
            { id: 'strong-clor', label: 'Strong Clor' },
            { id: 'deep-wash', label: 'Deep Wash' },
            { id: 'alcosan', label: 'Alcosan' },
            { id: 'alcogel', label: 'Alcogel' },
            { id: 'antibakt', label: 'Antibakt' },
            { id: 'foam-soap', label: 'Foam Soap' },
            { id: 'clorex-gel', label: 'Clorex Gel' },
            { id: 'sode-kaustike', label: 'Sode Kaustike' },
            { id: 'wc-gel', label: 'WC Gel' },
            { id: 'leter-higjenike', label: 'Leter Higjenike' },
            { id: 'stacion-shkume', label: 'Stacion Shkume' }
        ]
    }
];

const ProductsPage = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'it';
    const [activeTab, setActiveTab] = useState('lofty');
    const [activeCategory, setActiveCategory] = useState('all');
    const [openMenus, setOpenMenus] = useState({ lofty: true, 'lofty-pro': true, industriale: true });

    useEffect(() => {
        setActiveCategory('all');
        setOpenMenus(prev => ({ ...prev, [activeTab]: true }));
    }, [activeTab]);

    const toggleMenu = (id) => {
        setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredProdsByLine = productsData.filter(p => p.linea === activeTab);

    const displayProducts = activeCategory === 'all'
        ? filteredProdsByLine
        : filteredProdsByLine.filter(p => p.categoria === activeCategory);

    return (
        <div className="bg-neutral-50 min-h-screen pb-24">

            {/* Header Section */}
            <div className="relative bg-black py-12 md:py-20 px-4 overflow-hidden shadow-lg">
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
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/40"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-2 drop-shadow-2xl">
                        {t('catalog.hero.title')}
                    </h1>
                    <p className="text-xl text-white/90 font-medium drop-shadow-lg opacity-80 max-w-2xl mx-auto">
                        {t('catalog.hero.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-8 items-start">

                {/* Left Sidebar Menu */}
                <div className="w-full md:w-1/4 sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] shrink-0">
                    <div className="p-4 bg-gray-50 border-b border-gray-100 sticky top-0 z-10">
                        <h3 className="text-lg font-bold text-gray-800">{t('catalog.assortment')}</h3>
                    </div>
                    <div className="flex flex-col">
                        {menuStructure.map(menu => (
                            <div key={menu.id} className="border-b border-gray-50 last:border-0">
                                <button
                                    onClick={() => toggleMenu(menu.id)}
                                    className={`w-full flex justify-between items-center p-4 transition-colors font-bold text-left ${activeTab === menu.id ? 'bg-blue-50 text-primary' : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                >
                                    <span onClick={(e) => { e.stopPropagation(); setActiveTab(menu.id); }} className="flex-1 hover:text-accent cursor-pointer uppercase text-[13px] tracking-wide">
                                        {t(`catalog.lines.${menu.id}`)}
                                    </span>
                                    {menu.subcategories.length > 0 && (
                                        openMenus[menu.id] ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />
                                    )}
                                </button>

                                {openMenus[menu.id] && menu.subcategories.length > 0 && (
                                    <div className="bg-white pb-3 pt-1 flex flex-col">
                                        {menu.subcategories.map(sub => (
                                            <button
                                                key={sub.id}
                                                onClick={() => { setActiveTab(menu.id); setActiveCategory(sub.id); }}
                                                className={`text-left pl-8 pr-4 py-2 text-sm transition-colors border-l-2 ${activeTab === menu.id && activeCategory === sub.id
                                                    ? 'border-primary text-primary font-bold bg-blue-50/50'
                                                    : 'border-transparent text-gray-500 hover:text-primary hover:bg-gray-50'
                                                    }`}
                                            >
                                                {sub.id === 'all' ? t('catalog.all') : t(`catalog.categories.${sub.id}`)}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Product Grid */}
                <div className="w-full md:w-3/4 flex-1">
                    <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                        <h2 className="text-2xl font-bold text-gray-800 uppercase">
                            {t(`catalog.lines.${activeTab}`)}
                        </h2>
                        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{displayProducts.length} {t('catalog.productsCount')}</span>
                    </div>

                    {displayProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayProducts.map(product => {
                                const { icon: CatIcon, bg: catBg } = getCategoryStyle(product.categoria);
                                return (
                                    <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
                                        <div className={`aspect-square w-full relative overflow-hidden bg-gradient-to-br ${catBg} flex items-center justify-center text-center`}>
                                            {product.immagine ? (
                                                <img
                                                    src={product.immagine}
                                                    alt={product.nomi[currentLang]}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                                    <div className="relative z-10 flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                                        <CatIcon className="w-16 h-16 text-white/40 mb-3 drop-shadow-md" strokeWidth={1.5} />
                                                        <h4 className="text-xl font-black text-white drop-shadow-md uppercase tracking-wider px-2">
                                                            {product.nomi[currentLang]}
                                                        </h4>
                                                    </div>
                                                </>
                                            )}

                                            {/* Overlay for better text readability if needed or just for effect */}
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {product.disponibile_alla_spina && (
                                                <div className="absolute top-4 left-4 z-20">
                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary shadow-sm">
                                                        <Droplet size={12} className="fill-current" />
                                                        {t('catalog.hero.onTap')}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-5 flex-grow flex flex-col">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">{product.nomi[currentLang]}</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed">
                                                    {product.descrizioni[currentLang]}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-3 border-t border-gray-100">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {product.highlights.map(h => (
                                                        <span key={h} className="inline-flex items-center text-[10px] text-gray-600 font-medium bg-gray-100 px-2 py-1 rounded-md">
                                                            <CheckCircle size={8} className="text-accent mr-1" /> {h}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Feather className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('catalog.noProducts')}</h3>
                            <p className="text-gray-500">{t('catalog.noProductsDesc')}</p>
                            <button
                                onClick={() => setActiveCategory('all')}
                                className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
                            >
                                {t('catalog.showAll')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
