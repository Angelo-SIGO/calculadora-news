import React, { useState, useEffect } from "react";
import FormField from "../form/FormField";
import RadioGroup from "../inputs/RadioGroup";
import NumberField from "../inputs/InputField";

export default function Form({onTotalScoreChange}) {
    const [temperatureScore, setTemperatureScore] = useState(0);
    const [heartRateScore, setHeartRateScore] = useState(0);
    const [bloodPressureScore, setBloodPressureScore] = useState(0);
    const [breathRateScore, setBreathRateScore] = useState(0);
    const [oxygenSaturationScore, setOxygenSaturationScore] = useState(0);

    function handleTemperatureScoreChange(score) {
        setTemperatureScore(score);
        onTotalScoreChange(calculateTotalScore());
    }

    function handleHearRateScoreChange(score) {
        setHeartRateScore(score);
        onTotalScoreChange(calculateTotalScore());
    }

    function handleBloodPressureScoreChange(score) {
        setBloodPressureScore(score);
        onTotalScoreChange(calculateTotalScore());
    }

    function handleBreathRateScoreChange(score) {
        setBreathRateScore(score);
        onTotalScoreChange(calculateTotalScore());
    }

    function handleOxygenSaturarionScoreChange(score) {
        setOxygenSaturationScore(score);
        onTotalScoreChange(calculateTotalScore());
    }

    function calculateTotalScore () {
        return (
            temperatureScore + heartRateScore + bloodPressureScore + breathRateScore + oxygenSaturationScore
        );
    }

    const suplementationOptions = [
        { id: "yes", text: "Sim" },
        { id: "no", text: "Não" },
    ]

    const consciousnessLevels = [
        { id: "typical", text: "Típico" },
        { id: "reduced", text: "Reduzido" },
    ]

    return (
        <form id="calculator-form">
            <FormField label="Temperatura (ºC)" hint="Digite apenas números.">
                <NumberField id="temperature" onScoreChange={handleTemperatureScoreChange} />
            </FormField>
            <FormField label="Nível de consciência" hint="Selecione uma opção.">
                <RadioGroup name="conciusness-level" options={consciousnessLevels} />
            </FormField>
            <hr />
            <FormField label="Frequêcia cardíaca (bpm)" hint="Digite apenas números.">
                <NumberField id="heart-rate" onScoreChange={handleHearRateScoreChange} />
            </FormField>
            <FormField label="Pressão Arterial Sistótlica" hint="Digite apenas números.">
                <NumberField id="blood-pressure" onScoreChange={handleBloodPressureScoreChange} />
            </FormField>
            <hr />
            <FormField label="Frequência respiratória (irpm)" hint="Digite apenas números.">
                <NumberField id="breath-rate" onScoreChange={handleBreathRateScoreChange} />
            </FormField>
            <FormField label="Saturação do o2 (%)" hint="Digite apenas números.">
                <NumberField id="oxygen-saturation" onScoreChange={handleOxygenSaturarionScoreChange} />
            </FormField>
            <FormField label="Usando suplementação de O2?" hint="Selecione uma opção.">
                <RadioGroup name="oxygen-suplementation" options={suplementationOptions} />
            </FormField>
        </form>
    );
}

const renderRadioGroup = (name, label, hint, options) => (
    <FormField label={label} hint={hint}>
        <RadioGroup name={name} options={options} />
    </FormField>
);
