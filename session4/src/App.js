import Calculator from "./component/calculator/Calculator";
import CounterSync from "./component/counter/CounterSync";
import CurrencyConverter from "./component/currency/CurrncyConverter";
import LightToggle from "./component/vote/LightToggle";
import VotingCalculator from "./component/vote/VotingCalculator";

function App() {
  return (
    <div>
      <Calculator />
      <CounterSync />
      <LightToggle />
      <VotingCalculator />
      <CurrencyConverter />
    </div>
  );
}

export default App;
