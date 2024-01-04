import React, { useState } from "react";
import SuccessIcon from "../../assets/icons/icon-success.svg"
import ErrorIcon from "../../assets/icons/icon-error.svg"

export default function NumberField({ id, children }) {
    const [value, setValue] = useState("");
    const [state, setState] = useState("");

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, "");

        const hasNumbers = /\d/.test(numericValue);
        if (state === "") {
            setState(hasNumbers ? "--complete" : "");
        } else {
            setState(hasNumbers ? "--complete" : "--error");
        }
        setValue(numericValue);
    };

    const handleBlur = () => {
        const hasNumbers = /\d/.test(value);
        setState(
            (!hasNumbers || !value  || state === "--error") ? "--error" : state
        );
    };

    return (
        <div id={id} className={`input-field${state}`}>
            <input 
                type="text"
                value={value} 
                onChange={handleChange}
                onBlur={handleBlur} />
            {state === "--complete" && <SuccessIcon/>}
            {state === "--error" && <ErrorIcon />}
        </div>
    );
}
