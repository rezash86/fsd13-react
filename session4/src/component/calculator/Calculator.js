import { useState } from "react";
import { TemperatureInput } from "./TemperatueInput";
import { BoilingVerdict } from "./BoilingVerdict";

function tryToConvert(temperature, convertFn) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convertFn(input);
  return Math.round(output * 100) / 100;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export default function Calculator() {
  //I want to provide values to cels or farh based on a logic
  // If I change the event on the input of Farh ,then converstion is happening in the cels

  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("C");

  const celsius =
    scale === "F" ? tryToConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "C" ? tryToConvert(temperature, toFahrenheit) : temperature;

  const handleCelsiusChange = (temp) => {
    //do some operation
    setTemperature(temp);
    setScale("C");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("F");
  };

  return (
    <div>
      <h2>Temperator convertor</h2>
      <TemperatureInput
        lable="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        lable="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
    </div>
  );
}
