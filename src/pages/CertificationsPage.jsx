import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Leaf, FileText, Download } from 'lucide-react';

const CertificationsPage = () => {
    const { t } = useTranslation();

    const standards = [
        {
            id: 'iso-9001',
            title: 'EN ISO 9001:2008',
            label: 'Quality Management',
            desc: t('certifications.iso9001_desc', 'International standard for quality management systems, ensuring consistent product quality and customer satisfaction.'),
            icon: <Globe className="w-8 h-8 text-primary" />,
            color: 'bg-blue-50'
        },
        {
            id: 'iso-14001',
            title: 'EN ISO 14001:2004',
            label: 'Environmental Care',
            desc: t('certifications.iso14001_desc', 'Commitment to reducing environmental impact and implementing sustainable production processes.'),
            icon: <Leaf className="w-8 h-8 text-emerald-500" />,
            color: 'bg-emerald-50'
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-24">

            {/* Header Section */}
            <div className="relative bg-black py-32 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    >
                        <source src="/certificazioni.mp4" type="video/mp4" />
                    </video>
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <ShieldCheck className="w-20 h-20 text-accent mx-auto mb-8 drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
                            {t('certifications.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                            {t('certifications.desc1')} {t('certifications.desc2')}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">

                {/* Standards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {standards.map((std, idx) => (
                        <motion.div
                            key={std.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100 group hover:border-primary transition-all duration-500"
                        >
                            <div className={`w-16 h-16 ${std.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {std.icon}
                            </div>
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{std.label}</span>
                            <h3 className="text-3xl font-black text-neutral-900 mb-4 tracking-tighter uppercase">{std.title}</h3>
                            <p className="text-neutral-500 leading-relaxed font-medium">{std.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Main Certificate Viewer */}
                <div className="flex flex-col lg:flex-row items-center gap-16 bg-neutral-50 rounded-[4rem] p-8 md:p-16 border border-neutral-200">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest mb-8">
                                <FileText size={14} /> {t('certifications.official')}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 uppercase tracking-tighter leading-none">
                                {t('certifications.verifiedBy')} <br />
                                <span className="text-primary tracking-normal">Eurocert S.A.</span>
                            </h2>
                            <p className="text-lg text-neutral-600 font-medium leading-relaxed mb-10">
                                {t('certifications.compliance_desc', 'La conformità ai requisiti legali e normativi è garantita da auditor internazionali indipendenti. Ogni certificato è il risultato di un rigoroso processo di audit.')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-neutral-100">
                                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">1</div>
                                    <span className="font-bold text-neutral-800 uppercase text-sm tracking-wide">{t('certifications.process.one')}</span>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-neutral-100">
                                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">2</div>
                                    <span className="font-bold text-neutral-800 uppercase text-sm tracking-wide">{t('certifications.process.two')}</span>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-neutral-100">
                                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">3</div>
                                    <span className="font-bold text-neutral-800 uppercase text-sm tracking-wide">{t('certifications.process.three')}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative group cursor-zoom-in"
                        >
                            <div className="absolute inset-x-0 -bottom-10 h-32 bg-black/5 blur-3xl w-4/5 mx-auto -z-10"></div>
                            <div className="relative bg-white p-4 md:p-8 rounded-[2rem] shadow-2xl border border-neutral-200 transform group-hover:rotate-1 transition-transform duration-500">
                                <img
                                    src="/certificate.png"
                                    alt="Eurocert Certificate"
                                    className="max-w-full h-auto rounded-lg shadow-inner"
                                />

                                {/* Overlay Controls */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/5 backdrop-blur-[2px] rounded-[2rem]">
                                    <div className="flex gap-3">
                                        <button className="bg-white text-neutral-900 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                                            <Download size={20} />
                                        </button>
                                        <button className="bg-primary text-white px-6 py-4 rounded-full shadow-xl hover:scale-105 transition-all font-black uppercase text-xs tracking-widest">
                                            {t('certifications.viewFull', 'Open Full View')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificationsPage;
