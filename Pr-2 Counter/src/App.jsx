import { useState } from "react";
import Counter from "./Component/Counter"; 

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } 
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="text-center">
      <Counter count={count} increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
}

export default App;