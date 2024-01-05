import React, { useState } from "react";
import FormField from "../form/FormField";
import RadioGroup from "../inputs/RadioGroup";
import NumberField from "../inputs/InputField";

export default function Form() {
    const [formValues, setFormValues] = useState({
        temperature: "",
        consciousnessLevel: "",
        heartRate: "",
        bloodPressure: "",
        breathRate: "",
        oxygenSaturation: "",
        oxygenSupplementation: "",
    });

    const handleFormChange = (fieldName, value) => {
        setFormValues({
            ...formValues,
            [fieldName]: value,
        });
    };

    const handleNumberFieldChange = (fieldName, value) => {
        console.log(`Valor do ${fieldName} alterado:`, value);
        // Faça algo com o valor alterado, se necessário
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Valores do formulário:", formValues);
        // Faça algo com os valores do formulário (por exemplo, envie para um servidor)
    };

    const renderNumberField = (id, label, hint) => (
        <FormField
            label={label}
            hint={hint}
        >
            <NumberField
                id={id}
                onValueChange={(value) => handleNumberFieldChange(id, value)}
            />
        </FormField>
    );

    const renderRadioGroup = (name, label, hint, options) => (
        <FormField
            label={label}
            hint={hint}
        >
            <RadioGroup
                name={name}
                options={options}
                onValueChange={(value) => handleFormChange(name, value)}
            />
        </FormField>
    );

    return (
        <form id="calculator-form" onSubmit={handleSubmit}>
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

            <button type="submit">Enviar</button>
        </form>
    );
}
