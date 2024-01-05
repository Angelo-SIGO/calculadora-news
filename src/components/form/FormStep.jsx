import React from "react";
import FormField from "./FormField";
import RadioGroup from "../inputs/RadioGroup";
import NumberField from "../inputs/InputField";


export default function FormStep({ id, children }) {
    return <section id={id} className="form-step">{children}</section>
}

export function FirstStep() {
    const consciousnessLevels = [
        { id: "typical", text: "Típico" },
        { id: "reduced", text: "Reduzido" },
    ];

    return (
        <FormStep id="first-step">
            <FormField label="Temperatura (ºC)" hint="Digite apenas números.">
                <NumberField id="temperature" />
            </FormField>
            <FormField label="Nível de consciência" hint="Selecione uma opção.">
                <RadioGroup name="consciousness-level" options={consciousnessLevels} />
            </FormField>
            <hr/>
            <FormField label="Frequência cardíaca (bpm)" hint="Digite apenas números.">
                <NumberField id="heart-rate" />
            </FormField>
            <FormField label="Pressão Arterial Sistólica (mmHg)" hint="Digite apenas números.">
                <NumberField id="blood-pressure" />
            </FormField>
        </FormStep>
    );
}

export function SecondStep() {
    const suplementationOptions = [
        { id: "yes", text: "Sim" },
        { id: "no", text: "Não" }
    ]

    return (
        <FormStep id="second-step">
            <FormField label="Frequência respiratória (irpm)" hint="Digite apenas números.">
                <NumberField id="breath-rate" />
            </FormField>
            <FormField label="Saturação do O2 (%)" hint="Digite apenas números.">
                <NumberField id="oxygen-saturation" />
            </FormField>
            <FormField label="Usando suplementação O2?" hint="Selecione uma opção.">
                <RadioGroup name="oxygen-suplementation" options={suplementationOptions} />
            </FormField>
        </FormStep>
    )
}