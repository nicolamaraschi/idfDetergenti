import React from 'react';

const SectionTitle = ({ title, subtitle, className = '', alignment = 'center' }) => {
    const alignClass = alignment === 'left' ? 'text-left' : alignment === 'right' ? 'text-right' : 'text-center';
    const marginClass = alignment === 'left' ? 'ml-0' : alignment === 'right' ? 'ml-auto mr-0' : 'mx-auto';

    return (
        <div className={`mb-12 ${alignClass} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-600 max-w-2xl mt-4 leading-relaxed">{subtitle}</p>}
            <div className={`w-24 h-1.5 bg-accent mt-6 rounded-full ${marginClass}`}></div>
        </div>
    );
};

export default SectionTitle;
