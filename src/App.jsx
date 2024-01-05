// App.jsx (ou o componente pai que renderiza Card e Calculator)
import React, { useState } from "react";
import Card, { Calculator } from "./components/layouts/Card";

export default function App() {
    const [totalScore, setTotalScore] = useState(0);

    const handleTotalScoreChange = (score) => {
        setTotalScore(score);
    };

    return (
        <Card totalScore={totalScore} />
    );
}
