import { useState } from "react";

function useTotalScore() {
    const [totalScore, setTotalScore] = useState(0);

    const handleTotalScoreChange = (score) => {
        setTotalScore(score);
    };

    return { totalScore, handleTotalScoreChange };
}

export default useTotalScore;
