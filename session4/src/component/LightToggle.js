import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export default function LightToggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h2>Light Toggle</h2>
      <p>the Light is {isOn ? "ON" : "OFF"}</p>
      {/* <button onClick={toggleLight}>Switch 1</button>
      <button onClick={toggleLight}>Switch 2</button> */}
      <ToggleButton toggleLight={toggleLight} switchName="Switch 1" />
      <ToggleButton toggleLight={toggleLight} switchName="Switch 2" />
      <ToggleButton toggleLight={toggleLight} switchName="Switch 3" />
    </div>
  );
}
