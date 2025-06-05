export function TemperatureInput({ lable, temperature, onTemperatureChange }) {
  const handleInputChange = (e) => {
    // I need to do something BUT what I need to do is in the parent ?!??!?!?!
    // lifting the state UP is happening
    onTemperatureChange(e.target.value);
  };

  return (
    <div>
      {/* <lable>Celsius or Fahrenheit</lable> */}
      <lable>{lable}</lable>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        // onChange={handleInputChange}
      ></input>
    </div>
  );
}
