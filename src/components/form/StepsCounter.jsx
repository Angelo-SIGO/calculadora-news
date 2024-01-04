import React from "react";

export default function StepsCounter({ steps, current = 1 }) {
    return (
        <div className="steps-counter">{renderSteps(steps, current)}</div>
    )
}

function Step({ number, current }) {
    return <div className={`steps-counter__step${current ? "--current" : ""}`}>{number}</div>
}

function renderSteps(totalSteps, currentStep) {
    const steps = []

    for (let i = 1; i <= totalSteps; i++) {
        steps.push(<Step key={i} number={i} current={i === currentStep} />)

        if (i !== totalSteps) {
            steps.push(<hr key={`line-${i}`} className="steps-counter__line" />)
        }
    }

    return steps;
}