const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libratoday = 4.3


    if(currencySelect.value == "dolar"){
        //se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)

    }

    if(currencySelect.value == "euro"){
        //se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value == "libra"){
        //se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { 
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libratoday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage =document.querySelector(".logo-USA")

if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano"
    currencyImage.src = "./assets/dolar.png"
}

if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src ="./assets/euro.png"
}

if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src ="./assets/libra 1 (1).png"
}


convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


