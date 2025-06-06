import { useState } from "react";
import CurrencyInput from "./CurrencyInput";

function tryToConvert(currency, convertFn) {
  const input = parseFloat(currency);
  if (Number.isNaN(input)) return "";
  const output = convertFn(input);
  return Math.round(output * 100) / 100;
}

function toUsd(eur) {
  return eur * 1.08;
}

function toEur(usd) {
  return usd / 1.08;
}

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState("");
  const [scale, setScale] = useState("usd");

  const handleUsdChange = (cur) => {
    setCurrency(cur);
    setScale("usd");
  };

  const handleEurChange = (cur) => {
    setCurrency(cur);
    setScale("eur");
  };

  const usd = scale === "eur" ? tryToConvert(currency, toUsd) : currency;
  const eur = scale === "usd" ? tryToConvert(currency, toEur) : currency;

  return (
    <div>
      <h2>Currency Converter</h2>
      <CurrencyInput
        label="USD"
        currency={usd}
        onCurrencyChange={handleUsdChange}
      />
      <CurrencyInput
        label="EUR"
        currency={eur}
        onCurrencyChange={handleEurChange}
      />
    </div>
  );
}
