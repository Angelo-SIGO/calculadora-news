// Section.jsx
import React from "react";
import Form from "./Form";

export default function Section({ id, children }) {
    return <section id={id} className="card-section">{children}</section>;
}

// MainSection.jsx
export function MainSection({onTotalScoreChange}) {
    return (
        <Section id="main">
            <h1>Calculadora NEWS</h1>
            <MainSectionBody onTotalScoreChange={onTotalScoreChange} />
        </Section>
    );
}

// DisplaySection.jsx
export function DisplaySection({ totalScore }) {
    const riskText = {
        green: "baixo",
        yellow: "médio",
        red: "alto",
    };

    const riskLevel = determineRiskLevel(totalScore);

    function determineRiskLevel(score) {
        if (score >= 5) {
            return "red";
        } else if (score >= 3) {
            return "yellow";
        } else {
            return "green";
        }
    }

    return (
        <Section id="display">
            <div className={`display-color-${riskLevel}`}></div>
            <section className="display-info">
                <h2>
                    Paciente com <span>{riskText[riskLevel]}</span> risco de deterioração clínica.
                </h2>
                <h2>{totalScore}</h2>
            </section>
        </Section>
    );
}

// MainSectionBody.jsx
function MainSectionBody({onTotalScoreChange}) {
    return (
        <div className="card-section__body">
            <section className="card-section__body-content">
                <Form onTotalScoreChange={onTotalScoreChange} />
            </section>
        </div>
    );
}
