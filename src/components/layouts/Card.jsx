// Card.jsx
import React, { useState } from "react";
import { MainSection, DisplaySection } from "./Section";

export default function Card({ children }) {
    const [totalScore, setTotalScore] = useState(0);
    const riskLevel = "green";

    const handleTotalScoreChange = (score) => {
        setTotalScore(score);
    };

    return (
        <section className="card">
            <DisplaySection totalScore={totalScore} riskLevel={riskLevel} />
            <MainSection onTotalScoreChange={handleTotalScoreChange} />
        </section>
    );
}

// Calculator.jsx
export function Calculator({totalScore}) {
    const riskLevel = "green";

    return (
        <Card>
            {({ onTotalScoreChange }) => (
                <>
                    <DisplaySection totalScore={totalScore} riskLevel={riskLevel} />
                    <MainSection onTotalScoreChange={onTotalScoreChange} />
                </>
            )}
        </Card>
    );
}
