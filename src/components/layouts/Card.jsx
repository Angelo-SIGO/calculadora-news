// Card.jsx
import React from "react";
import { MainSection, DisplaySection } from "./Section";

export default function Card({ children }) {
    return <section className="card">{children}</section>;
}

// Calculator.jsx
export function Calculator() {
    const riskLevel = "green";

    return (
        <Card>
            <DisplaySection riskLevel={riskLevel} />
            <MainSection />
        </Card>
    );
}
