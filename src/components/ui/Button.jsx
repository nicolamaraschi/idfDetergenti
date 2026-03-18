import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', href, onClick, type = 'button', disabled }) => {
    const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary disabled:opacity-70",
        accent: "bg-accent text-white hover:bg-teal-600 focus:ring-accent disabled:opacity-70",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary disabled:opacity-70",
        white: "bg-white text-primary hover:bg-gray-100 focus:ring-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const css = `${baseStyle} ${variants[variant]} ${sizes.md} ${className}`;

    if (href) {
        return (
            <Link to={href} className={css}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={css} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
