import React from "react";
import CardSection from "../../components/card-section";
import useDisplay from "./hook";

const CLASSIFICATION = {
    green: "baixo",
    yellow: "médio",
    red: "alto",
};

const DESCRIPTION = {
    green: "Deve ser avaliado por profissional de enfermagem com habilidades para decidir se há necessidade de aumentar a frequência do monitoramento e/ou escalonamento de cuidados clínicos",
    yellow: "Avaliação urgente por um clínico qualificado com competências na avaliação de doenças agudas.",
    red: "Avaliação de emergência por médico instensivista, com possível transferência do paciente para uma área de cuidados críticos."
};

function Display({ newsScore }) {
    const { defineRiskLevel } = useDisplay();
    const riskLevel = defineRiskLevel(newsScore);

    return (
        <CardSection id="display">
            <div className="wrapper">
                <div className={`card-section__viewer--${riskLevel}`}></div>
                <h2 className="card-section__caption">
                    Paciente com <span>{CLASSIFICATION[riskLevel]}</span> risco
                    de deterioração clínica.
                </h2>
                <p className="card-section__description">{DESCRIPTION[riskLevel]}</p>
            </div>
        </CardSection>
    );
}

export default Display;
