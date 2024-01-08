import { useState } from "react";

const useTotalScore = () => {
    const [temperatureScore, setTemperatureScore] = useState(0);
    const [heartRateScore, setHeartRateScore] = useState(0);
    const [bloodPressureScore, setBloodPressureScore] = useState(0);
    const [breathingRateScore, setBreathingRateScore] = useState(0);
    const [oxygenSaturationScore, setOxygenSaturationScore] = useState(0);
    const [consciusnessLevelScore, setConciusnessLevelScore] = useState(0);
    const [oxygenSuplementationScore, setOxygenSuplementationScore] = useState(0);

    const handleTemperatureScoreChange = (score) => {
        setTemperatureScore(score);
    };

    const handleHeartRateScoreChange = (score) => {
        setHeartRateScore(score);
    };

    const handleBloodPressureScoreChange = (score) => {
        setBloodPressureScore(score);
    };

    const handleBreathingRateScoreChange = (score) => {
        setBreathingRateScore(score);
    };

    const handleOxygenSaturationScoreChange = (score) => {
        setOxygenSaturationScore(score);
    };

    const handleConsciusnessLevelScoreChange = (score) => {
        setConciusnessLevelScore(score);
    }

    const handleOxygenSuplementationScoreChange = (score) => {
        setOxygenSuplementationScore(score);
    }

    const getTotalScore = () => {
        return (
            temperatureScore +
            heartRateScore +
            bloodPressureScore +
            breathingRateScore +
            oxygenSaturationScore +
            consciusnessLevelScore +
            oxygenSuplementationScore
        );
    };

    return {
        temperatureScore,
        heartRateScore,
        bloodPressureScore,
        breathingRateScore,
        oxygenSaturationScore,
        consciusnessLevelScore,
        oxygenSuplementationScore,
        handleTemperatureScoreChange,
        handleHeartRateScoreChange,
        handleBloodPressureScoreChange,
        handleBreathingRateScoreChange,
        handleOxygenSaturationScoreChange,
        handleConsciusnessLevelScoreChange,
        handleOxygenSuplementationScoreChange,
        getTotalScore,
    };
};

export default useTotalScore;
