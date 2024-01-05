import React from "react";
import FormField from "./FormField";
import RadioButton from "../inputs/RadioButton";
import NumberField from "../inputs/InputField";


export default function FormStep({ id, children }) {
    return <section id={id} className="form-step">{children}</section>
}

export function FirstStep() {
    return (
        <FormStep id="first-step">
            <FormField label="Temperatura (ºC)" hint="Digite apenas números.">
                <NumberField id="temperature" />
            </FormField>
            <FormField label="Nível de consciência" hint="Selecione uma opção.">
                <RadioButton id="typical" group="conciusness-level" text="Típico" />
                <RadioButton id="reduced" group="conciusness-level" text="Reduzido" />
            </FormField>
            <FormField label="Frequência cardíaca (bpm)" hint="Digite apenas números.">
                <NumberField id="heart-rate" />
            </FormField>
            <FormField label="Pressão Arterial Sistólica (mmHg)" hint="Digite apenas números.">
                <NumberField id="blood-pressure" />
            </FormField>
        </FormStep>
    )
}