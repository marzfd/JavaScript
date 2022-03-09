const celsiusInput =  document.querySelector('#celsius > input');
const fahrenheitInput =  document.querySelector('#fahrenheit > input');
const kelvinInput =  document.querySelector('#kelvin > input');

// In order to get rid of too many numbers after decimal !
function roundNum(num) {
  return Math.round(num * 100)/100;
}

// Method #1 :
function main() {
  celsiusInput.addEventListener('input', function() {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
  });
  
  fahrenheitInput.addEventListener('input', function() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp - 32) * (5/9) + 273.15;
    celsiusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
  });
  
  kelvinInput.addEventListener('input', function() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = ((kTemp - 273.15) * (9/5)) + 32;
    fahrenheitInput.value = roundNum(fTemp);
    celsiusInput.value = roundNum(cTemp);
  });
}

main();


/* 
// Method #2 :

function celsiusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp - 32) * (5/9) + 273.15;
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFahrenheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (kTemp - 273.15) * (9/5) + 32;
  fahrenheitInput.value = roundNum(fTemp);
  celsiusInput.value = roundNum(cTemp);
}

function main() {
celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}

main ();
 */