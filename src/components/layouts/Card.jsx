import React from "react";
import { MainSection, DisplaySection } from "./Section";

export default function Card({ children }) {
    return <section className="card">{children}</section>
}

export function Calculator() {
    return (
        <Card>
            <DisplaySection/>
            <MainSection/>
        </Card>
    )
}