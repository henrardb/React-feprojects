import { useState } from "react";

function Hcounter() {
  const [counter, setCounter] = useState(10);

  const increase = () => {
    console.log("increase");
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Hcounter</h1>
      <p>Counter is {counter}</p>
      <button onClick={increase} value="Increase">
        Increase
      </button>
      <button onClick={decrease} value="Decrease">
        Decrease
      </button>
    </div>
  );
}

export default Hcounter;
