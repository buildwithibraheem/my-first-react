import { useState } from "react";

function App() {
  const [Count, setCount] = useState(5);
  const [obtainedmarks, setobtainedmarks] = useState(0);
  const [totalmarks, setTotalmarks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function increment() {
    if (Count < 20) {
      setCount(Count + 1);
    }
  }

  function decrement() {
    if (Count > 0) {
      setCount(Count - 1);
    }
  }

  function calculate(e) {
    e.preventDefault();

    const calcPercentage = (obtainedmarks / totalmarks) * 100;

    setPercentage(calcPercentage.toFixed(2));
  }

  return (
    <div>
      <div>This is Counter Site</div>

      <h1>Counter : {Count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <form onSubmit={calculate}>
        <div>
          <input
            type="number"
            id="obtainedmarks"
            placeholder="Enter obtained marks"
            onChange={(e) => setobtainedmarks(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            id="total"
            placeholder="Enter total marks"
            onChange={(e) => setTotalmarks(e.target.value)}
          />
        </div>

        <button type="submit">Calculate</button>
      </form>

      <h2>Percentage: {percentage}%</h2>
    </div>
  );
}

export default App;