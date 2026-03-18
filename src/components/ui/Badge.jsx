import React from 'react';

const Badge = ({ children, className = '', color = 'accent', icon }) => {
    const colors = {
        accent: 'bg-accent/10 text-teal-800 border-accent/20',
        primary: 'bg-primary/10 text-primary-dark border-primary/20',
        green: 'bg-green-100 text-green-800 border-green-200',
        white: 'bg-white/20 text-white border-white/30 backdrop-blur-sm',
    };

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors[color] || colors.accent} ${className}`}>
            {icon && <span>{icon}</span>}
            {children}
        </span>
    );
};

export default Badge;
