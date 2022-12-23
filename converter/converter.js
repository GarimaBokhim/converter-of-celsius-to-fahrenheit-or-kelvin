const input = document.getElementById('input')
const btnFahrenheit = document.getElementById('fahrenheit')
const btnKelvin = document.getElementById('kelvin')
const output = document.getElementById('output')

function convertToFahrenheit() {
    const fahrenheitValue = parseInt(input.value) * (9/5) + 32
    output.innerHTML = fahrenheitValue + '°F'
}

function converterK() {
    output.innerHTML = parseInt(input.value) + 273.15 + '°K'
}

btnFahrenheit.addEventListener('click', convertToFahrenheit)
btnKelvin.addEventListener('click', converterK) 
