import React from "react";

const CurrencyInput = ({ label, currency, onCurrencyChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
