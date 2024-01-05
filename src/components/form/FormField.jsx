import React from "react";

export default function FormField({ label, hint, children }) {
    return (
        <section className="form-field">
            <label className="form-field__label">
                {label}
                <span className="form-field__hint">{hint}</span>
            </label>
            {children}
        </section>
    )
}