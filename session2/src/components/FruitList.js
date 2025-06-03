//having a component to accept a list of fruits
//and show their name in the page
export default function FruitList(props) {
  const fruits = props.fruits;
  //   console.log(fruits);
  return (
    <ul>
      {fruits.map((fruit, indx) => (
        <li key={indx}>{fruit}</li>
      ))}
    </ul>
  );
}
