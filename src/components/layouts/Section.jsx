import React from "react";
import Form from "./Form";

export default function Section({ id, children }) {
    return <section id={id} className="card-section">{children}</section>
}

export function MainSection() {
    return (
        <Section id="main">
            <h1>Calculadora NEWS</h1>
            <SectionBody/>
        </Section>
    )
}

export function DisplaySection() {
    return (
        <Section id="display">
            
        </Section>
    )
}

function SectionBody() {
    return (
        <div className="card-section__body">
            <section className="card-section__body-content">
                <Form />
            </section>
        </div>
    )
}