import React, { useState, useEffect } from "react";
import SuccessIcon from "../../assets/icons/icon-success.svg";
import ErrorIcon from "../../assets/icons/icon-error.svg";

const FIELD_STATES = {
    NONE: "",
    COMPLETE: "--complete",
    ERROR: "--error",
};

function validateInput(inputValue) {
    return /\d/.test(inputValue);
}

function determineState(hasNumbers) {
    return hasNumbers ? FIELD_STATES.COMPLETE : FIELD_STATES.ERROR;
}

function NumberField({ id, onScoreChange }) {
    const [value, setValue] = useState("");
    const [state, setState] = useState(FIELD_STATES.NONE);
    const [score, setScore] = useState(0);

    function calculateTemperatureScore(value) {
        if (value <= 35) {
            setScore(3);
        } else if (value <= 36 && value > 35) {
            setScore(2);
        } else if (value > 36 && value <= 38) {
            setScore(1);
        } else if (value > 38 && value < 39) {
            setScore(2);
        } else {
            setScore(3);
        }
    }

    useEffect(() => {
        onScoreChange(score);
    }, [score]);

    function handleChange(event) {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        const hasNumbers = validateInput(numericValue);

        if (state === FIELD_STATES.NONE) {
            setState(determineState(hasNumbers));
        } else {
            setState(determineState(hasNumbers));
        }

        calculateTemperatureScore(numericValue);
        setValue(numericValue);
    }

    function handleBlur() {
        const hasNumbers = validateInput(value);
        setState(
            (!hasNumbers || !value || state === FIELD_STATES.ERROR)
                ? FIELD_STATES.ERROR
                : state
        );
    }

    return (
        <div id={id} className={`input-field${state}`}>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                step="0.1"
            />
            {state === FIELD_STATES.COMPLETE && <SuccessIcon />}
            {state === FIELD_STATES.ERROR && <ErrorIcon />}
        </div>
    );
}

export default NumberField;
