import { useState } from "react";

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);

  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);


  function calculateBMI() {
    let bmi = weight / (height * height);

    console.log("BMI = " + bmi);
  }


  function calculateInterest() {
    let interest = (principal * rate * time) / 100;

    console.log("Interest = " + interest);
  }


  function calculateArea() {
    let area = length * width;

    console.log("Area = " + area);
  }


  return (
    <div>

      <div>BMI Calculator</div>

      <form>

        <input
          type="number"
          placeholder="Enter weight"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter height"
          onChange={(e) => setHeight(e.target.value)}
        />

        <button type="button" onClick={calculateBMI}>
          Calculate
        </button>

      </form>


      <div>Interest Calculator</div>

      <form>

        <input
          type="number"
          placeholder="Enter principal"
          onChange={(e) => setPrincipal(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter rate"
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter time"
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="button" onClick={calculateInterest}>
          Calculate
        </button>

      </form>


      <div>Area Calculator</div>

      <form>

        <input
          type="number"
          placeholder="Enter length"
          onChange={(e) => setLength(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter width"
          onChange={(e) => setWidth(e.target.value)}
        />

        <button type="button" onClick={calculateArea}>
          Calculate
        </button>

      </form>

    </div>
  );
}

export default App;