function calc() {
    const valueDolar = parseFloat(document.querySelector(".name-dolar").value);
    const stateFee = parseFloat(document.querySelector(".name-card").value);

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

    window.location.href=`/main.html?result=${result.toFixed(2)}`



}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function () {
    const result = getParameterByName("result");

    if (result) {
        document.querySelector(".value-result").textContent = `R$ ${result}`;
    }
};


// async function getSingleCharacter(id) {
//     fetch(`https://economia.awesomeapi.com.br/json/last/:moedas`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
    
//       });
  
  
//   }
