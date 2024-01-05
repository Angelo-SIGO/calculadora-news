// Section.jsx
import React from "react";
import Form from "./Form";

export default function Section({ id, children }) {
    return <section id={id} className="card-section">{children}</section>;
}

// MainSection.jsx
export function MainSection() {
    return (
        <Section id="main">
            <h1>Calculadora NEWS</h1>
            <MainSectionBody />
        </Section>
    );
}

// DisplaySection.jsx
export function DisplaySection({ riskLevel }) {
    const riskText = {
        green: "baixo",
        yellow: "médio",
        red: "alto",
    };

    return (
        <Section id="display">
            <div className={`display-color-${riskLevel}`}></div>
            <section className="display-info">
                <h2>
                    Paciente com <span>{riskText[riskLevel]}</span> risco de deterioração clínica.
                </h2>
            </section>
        </Section>
    );
}

// MainSectionBody.jsx
function MainSectionBody() {
    return (
        <div className="card-section__body">
            <section className="card-section__body-content">
                <Form />
            </section>
        </div>
    );
}
