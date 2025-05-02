// Date Counter JS
// I have a Date That I will be changing.
// If i click + in the account it will in crease bby 1 day. If i click - it subtracts.
// If I click step + 1. When I click Count it will ttake that step value and add it to the click value in the increasement amount of days.

import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count); // this can be the count
  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}> - </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}> + </button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>

      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days ago is`
          : `${Math.abs(count)}`}
      </span>
      <p>{date.toDateString()}</p>
    </div>
  );
}
