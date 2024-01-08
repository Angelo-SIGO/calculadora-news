import React from "react";
import CardSection from "../../components/card-section";
import useDisplay from "./hook";

const CLASSIFICATION = {
    green: "baixo",
    yellow: "médio",
    red: "alto",
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
            </div>
        </CardSection>
    );
}

export default Display;
