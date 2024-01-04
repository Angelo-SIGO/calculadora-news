import React from "react";

export default function Button({ style, text, iconPosition, children, onClick }) {
    const buttonClassName = `button button--${style} ${iconPosition ? `icon-${iconPosition}` : ''}`;

    return (
        <button 
            type="button"
            className={buttonClassName}
            onClick={onClick}>
                {iconPosition === "left" && children}
                {text}
                {iconPosition === "right" && children}
        </button>
    );
}