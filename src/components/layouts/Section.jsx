import React from "react";

export default function Section({ id, children }) {
    return <section id={id} className="card-section">{children}</section>
}

export function MainSection() {
    return (
        <Section id="main">

        </Section>
    )
}

export function DisplaySection() {
    return (
        <Section id="display">
            
        </Section>
    )
}