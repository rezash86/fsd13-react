export function ToggleButton({ switchName, toggleLight }) {
  return <button onClick={toggleLight}>{switchName}</button>;
}
