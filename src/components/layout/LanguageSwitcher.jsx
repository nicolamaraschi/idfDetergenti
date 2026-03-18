import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const LanguageSwitcher = ({ light = false }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { lang } = useParams();

    const currentLang = lang || location.pathname.split('/')[1] || 'it';

    const languages = [
        { code: 'it', label: 'IT', flag: '🇮🇹' },
        { code: 'en', label: 'EN', flag: '🇬🇧' },
        { code: 'al', label: 'AL', flag: '🇦🇱' }
    ];

    const changeLanguage = (newLang) => {
        let newPath = location.pathname;
        if (newPath.startsWith(`/${currentLang}`)) {
            newPath = newPath.replace(`/${currentLang}`, `/${newLang}`);
        } else {
            newPath = `/${newLang}${newPath}`;
        }
        navigate(newPath);
    };

    const activeLang = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className="relative group">
            <button className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${light
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-neutral-200 text-neutral-800 hover:bg-neutral-50 shadow-sm'
                }`}>
                <span className="text-lg">{activeLang.flag}</span>
                <span className="font-bold text-[11px] uppercase tracking-widest">{activeLang.label}</span>
                <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-2xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] overflow-hidden">
                {languages.map((l) => (
                    <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors ${currentLang === l.code ? 'bg-primary/5 text-primary' : 'text-neutral-700'
                            }`}
                    >
                        <span className="text-lg">{l.flag}</span>
                        <span className="font-bold text-xs uppercase tracking-tight">{l.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
