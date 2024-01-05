import React from "react";
import { FirstStep, SecondStep } from "../form/FormStep";

export default function Form() {
    return (
        <form id="calculator-form">
            <FirstStep />
            <SecondStep />
        </form>
    )
}