function calc() {
    const valueDolar = parseFloat(document.querySelector(".input.name-dolar").value);
    const stateFee = parseFloat(document.querySelector(".input.name-card").value);

    let typeBuy;
    if (document.querySelector(".radioOne").checked) {
        typeBuy = "money";
    } else if (document.querySelector(".radioTwo").checked) {
        typeBuy = "card";
    }

    let conversionRate;
    if (typeBuy === "money") {
        conversionRate = (valueDolar + stateFee) * (5.3 + 0.38); 
    } else if (typeBuy === "card") {
        conversionRate = (valueDolar + stateFee) * 5.3; 
    }

    const result = valueDolar * conversionRate;

    document.querySelector(".value-result").textContent = `R$ ${result.toFixed(2)}`;
}
