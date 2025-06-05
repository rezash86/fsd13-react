export function BoilingVerdict({ celsius }) {
  if (celsius > 100) {
    return <p> water would boil</p>;
  }
  return <p>water would not boil</p>;
}
