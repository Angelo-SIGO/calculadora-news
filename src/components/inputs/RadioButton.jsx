import React from "react";

export default function RadioButton({ id, group, text, icon, children }) {
    return (
        <>
            <input id={id} type="radio" name={group} />
            <label className="radio-button" htmlFor={id}>
                {icon === "left" && children}
                {text}
                {icon === "right" && children}
            </label>
        </>
    );
}

