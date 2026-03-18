import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import pdfData from '../data/pdf_sheets.json';
import {
    Droplet, CheckCircle, Shirt, Feather, Sparkles, Shield,
    Heart, Wind, Star, Briefcase, Flame, Bath, Utensils,
    ChevronDown, FileText, X, Download
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
    { id: 'lofty', sub: ['all', 'zbutes', 'lavatrice', 'dysheme', 'ene', 'detergjente', 'higjena-personale'] },
    { id: 'lofty-pro', sub: ['all', 'zbutes-rrobash', 'lares-rrobash-likuid', 'lares-rrobash-pluhur', 'lares-enesh', 'heqes-yndyror', 'solucion-per-banjon', 'solucion-per-dysheme', 'sapu-likuid', 'parfum-ambjenti', 'produkte-specifike'] },
    { id: 'paketuar', sub: ['all'] },
    { id: 'industriale', sub: ['all', 'foam-clor', 'strong-clor', 'deep-wash', 'alcosan', 'alcogel', 'antibakt', 'clorex-gel', 'wc-gel'] }
];

const ProductsPage = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'it';
    const [activeLine, setActiveLine] = useState('lofty');
    const [activeCat, setActiveCat] = useState('all');
    const [activePdf, setActivePdf] = useState(null);

    const getProductPdf = (product) => {
        const name = product.nomi.it.toLowerCase();
        return pdfData.find(pdf => pdf.name.toLowerCase().includes(name));
    };

    const filteredProducts = productsData.filter(p =>
        p.linea === activeLine && (activeCat === 'all' || p.categoria === activeCat)
    );

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Banner Header con Video Ripristinato */}
            <div className="relative bg-black py-16 md:py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full z-0">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/40"></div>
                </div>
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-2xl">
                        {t('catalog.hero.title')}
                    </h1>
                    <p className="text-sm md:text-xl text-white/80 mt-2 font-medium max-w-2xl mx-auto drop-shadow-lg">
                        {t('catalog.hero.subtitle')}
                    </p>
                </div>
            </div>

            {/* BARRA CATEGORIE STICKY - Ottimizzata per mobile */}
            <div className="sticky top-[64px] md:top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    {/* Switch Linee Prodotto */}
                    <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar px-4">
                        {menuStructure.map(line => (
                            <button
                                key={line.id}
                                onClick={() => { setActiveLine(line.id); setActiveCat('all'); }}
                                className={`px-6 py-4 text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap border-b-2 transition-all ${activeLine === line.id ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}
                            >
                                {t(`catalog.lines.${line.id}`)}
                            </button>
                        ))}
                    </div>
                    {/* Filtro Sottocategorie Orizzontale */}
                    <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar px-4 bg-gray-50/50">
                        {menuStructure.find(l => l.id === activeLine)?.sub.map(sub => (
                            <button
                                key={sub}
                                onClick={() => setActiveCat(sub)}
                                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${activeCat === sub ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200'}`}
                            >
                                {sub === 'all' ? t('catalog.all') : t(`catalog.categories.${sub}`)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Griglia Prodotti */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => {
                        const { icon: CatIcon, bg: catBg } = getCategoryStyle(product.categoria);
                        const pdf = getProductPdf(product);

                        return (
                            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
                                <div className={`aspect-square relative overflow-hidden bg-gradient-to-br ${catBg}`}>
                                    {product.immagine ? (
                                        <img src={product.immagine} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-white/40">
                                            <CatIcon size={48} strokeWidth={1.5} />
                                            <span className="text-xs font-black uppercase mt-2 tracking-widest">{product.nomi[currentLang]}</span>
                                        </div>
                                    )}
                                    {product.disponibile_alla_spina && (
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <Droplet size={12} className="text-primary fill-current" />
                                            <span className="text-[10px] font-bold text-primary uppercase">{t('catalog.hero.onTap')}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{product.nomi[currentLang]}</h3>
                                    <p className="text-sm text-gray-500 mb-6 line-clamp-2">{product.descrizioni[currentLang]}</p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {product.highlights.slice(0, 1).map(h => (
                                                <span key={h} className="text-[9px] font-bold uppercase bg-gray-100 px-2 py-1 rounded-md text-gray-600">{h}</span>
                                            ))}
                                        </div>
                                        {pdf && (
                                            <button
                                                onClick={() => setActivePdf(pdf)}
                                                className="flex items-center gap-2 text-[10px] font-black uppercase text-primary bg-primary/5 px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all"
                                            >
                                                <FileText size={14} /> {t('productSheets.view')}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MODAL PDF PER VISUALIZZAZIONE AGEVOLE */}
            {activePdf && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm shadow-2xl" onClick={() => setActivePdf(null)}>
                    <div className="bg-white w-full max-w-4xl h-[85vh] rounded-[2rem] flex flex-col relative overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0">
                            <h3 className="font-bold uppercase text-sm tracking-widest">{activePdf.name}</h3>
                            <div className="flex gap-2">
                                <a href={activePdf.url} download className="p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-all"><Download size={20} /></a>
                                <button onClick={() => setActivePdf(null)} className="p-2 bg-gray-100 rounded-lg hover:bg-red-500 hover:text-white transition-all"><X size={20} /></button>
                            </div>
                        </div>
                        <iframe src={activePdf.url} className="flex-grow w-full border-none" />
                        <a href={activePdf.url} download className="p-4 bg-neutral-900 text-white text-center font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-primary transition-all">
                            {t('productSheets.download')} PDF
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;