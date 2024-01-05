import React from "react";
import RadioButton from "./RadioButton";

export default function RadioGroup({ name, options }) {
    return (
        <section className="radio-group">
            {options.map((option) => (
                <RadioButton
                    key={option.id}
                    id={option.id}
                    group={name}
                    text={option.text}
                />
            ))}
        </section>
    );
}
