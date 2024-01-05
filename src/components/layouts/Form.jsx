import React, { useState, useEffect } from "react";
import FormField from "../form/FormField";
import RadioGroup from "../inputs/RadioGroup";
import NumberField from "../inputs/InputField";

export default function Form({onTotalScoreChange}) {
    const [temperatureScore, setTemperatureScore] = useState(0);

    function handleTemperatureScoreChange(score) {
        setTemperatureScore(score);
        onTotalScoreChange(calculateTotalScore());
    }

    function calculateTotalScore () {
        return temperatureScore;
    }

    const renderNumberField = (id, label, hint) => (
        <FormField label={label} hint={hint}>
            <NumberField id={id} onScoreChange={handleTemperatureScoreChange} />
            <h2>{temperatureScore}</h2>
        </FormField>
    );

    return (
        <form id="calculator-form">
            {renderNumberField("temperature", "Temperatura (ºC)", "Digite apenas números.")}
            {renderRadioGroup(
                "consciousness-level",
                "Nível de consciência",
                "Selecione uma opção.",
                [
                    { id: "typical", text: "Típico" },
                    { id: "reduced", text: "Reduzido" },
                ]
            )}
            <hr />
            {renderNumberField("heart-rate", "Frequência cardíaca (bpm)", "Digite apenas números.")}
            {renderNumberField("blood-pressure", "Pressão Arterial Sistólica (mmHg)", "Digite apenas números.")}
            <hr />
            {renderNumberField("breath-rate", "Frequência respiratória (irpm)", "Digite apenas números.")}
            {renderNumberField("oxygen-saturation", "Saturação do O2 (%)", "Digite apenas números.")}
            {renderRadioGroup(
                "oxygen-supplementation",
                "Usando suplementação O2?",
                "Selecione uma opção.",
                [
                    { id: "yes", text: "Sim" },
                    { id: "no", text: "Não" },
                ]
            )}
        </form>
    );
}

const renderRadioGroup = (name, label, hint, options) => (
    <FormField label={label} hint={hint}>
        <RadioGroup name={name} options={options} />
    </FormField>
);
