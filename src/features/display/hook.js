function useDisplay() {
    const defineRiskLevel = (score) => {
        if (score >= 5) return "red";
        else if (score >= 3) return "yellow";
        return "green";
    };

    return { defineRiskLevel };
}

export default useDisplay;
