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
    const [temperatureScore, setTemperatureScore] = useState(0);
    const [heartRateScore, setHeartRateScore] = useState(0);
    const [bloodPressureScore, setBloodPressureScore] = useState(0);
    const [breathRateScore, setBreathRateScore] = useState(0);
    const [oxygenSaturationScore, setOxygenSaturationScore] = useState(0);

    function calculateTemperatureScore(value) {
        if (value <= 35) {
            return 3;
        } else if (value <= 36 && value > 35) {
            return 2;
        } else if (value > 36 && value <= 38) {
            return 1;
        } else if (value > 38 && value < 39) {
            return 2;
        } else {
            return 3;
        }
    }

    // Função para calcular a pontuação da Frequência Cardíaca
    function calculateHeartRateScore(value) {
        if (value <= 50 || value >= 101) {
            return 3;
        } else if ((value >= 41 && value <= 50) || (value >= 91 && value <= 100)) {
            return 2;
        } else if ((value >= 51 && value <= 90)) {
            return 0;
        } else {
            return 1;
        }
    }

    // Função para calcular a pontuação da Pressão Arterial Sistólica
    function calculateBloodPressureScore(value) {
        if (value <= 90 || value >= 181) {
            return 3;
        } else if ((value >= 91 && value <= 100) || (value >= 161 && value <= 180)) {
            return 2;
        } else if ((value >= 101 && value <= 110) || (value >= 141 && value <= 160)) {
            return 1;
        } else {
            return 0;
        }
    }

    // Função para calcular a pontuação da Frequência Respiratória
    function calculateBreathRateScore(value) {
        if (value <= 8 || value >= 31) {
            return 3;
        } else if ((value >= 9 && value <= 11) || (value >= 21 && value <= 30)) {
            return 2;
        } else if ((value >= 12 && value <= 20)) {
            return 0;
        } else {
            return 1;
        }
    }

    // Função para calcular a pontuação da Saturação do Oxigênio
    function calculateOxygenSaturationScore(value) {
        if (value <= 91) {
            return 3;
        } else if (value >= 92 && value <= 93) {
            return 2;
        } else if (value >= 94 && value <= 95) {
            return 1;
        } else {
            return 0;
        }
    }


    useEffect(() => {
        const totalScore =
            calculateTemperatureScore(value) +
            calculateHeartRateScore(value) +
            calculateBloodPressureScore(value) +
            calculateBreathRateScore(value) +
            calculateOxygenSaturationScore(value);

        console.log(totalScore);

        onScoreChange(totalScore);
    }, [value, temperatureScore, heartRateScore, bloodPressureScore, breathRateScore, oxygenSaturationScore]);



    function handleChange(event) {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        const hasNumbers = validateInput(numericValue);

        if (state === FIELD_STATES.NONE) {
            setState(determineState(hasNumbers));
        } else {
            setState(determineState(hasNumbers));
        }

        setTemperatureScore(calculateTemperatureScore(inputValue));
        setHeartRateScore(calculateHeartRateScore(inputValue));
        setBloodPressureScore(calculateBloodPressureScore(inputValue));
        setBreathRateScore(calculateBreathRateScore(inputValue));
        setOxygenSaturationScore(calculateOxygenSaturationScore(inputValue));
        setValue(inputValue);
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
