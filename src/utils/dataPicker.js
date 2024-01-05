// coleta-dados.js
document.addEventListener("DOMContentLoaded", function () {
    // Adicione aqui lógica para coletar dados ou interagir com elementos da página
    const form = document.querySelector("#calculator-form");

    // Evento de entrada para o campo de temperatura
    const temperatureInput = document.querySelector("#temperature");
    temperatureInput.addEventListener("input", function () {
        const temperature = temperatureInput.value;
        console.log("Temperatura:", temperature);
    });

    // Evento de mudança para o campo de nível de consciência (radio button)
    const consciousnessLevelInputs = document.querySelectorAll("input[name='consciousness-level']");
    consciousnessLevelInputs.forEach(function (input) {
        input.addEventListener("change", function () {
            const consciousnessLevel = input.value;
            console.log("Nível de Consciência:", consciousnessLevel);
        });
    });

    // Adicione eventos similares para outros campos conforme necessário
});
