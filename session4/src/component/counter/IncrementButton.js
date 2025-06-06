export default function IncrementButton({ lable, increment }) {
  return <button onClick={increment}>{lable}</button>;
}
