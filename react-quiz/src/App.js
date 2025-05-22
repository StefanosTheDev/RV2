import React, { useReducer, useEffect } from 'react';

const initialState = {
  count: 0,
  step: 1,
};

// Load saved state from localStorage
function getInitialState() {
  const saved = localStorage.getItem('counterState');
  return saved ? JSON.parse(saved) : initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      // Prevent negative or invalid step values
      const value = action.payload;
      return { ...state, step: value < 1 ? 1 : value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, getInitialState);
  const { count, step } = state;

  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem('counterState', JSON.stringify(state));
  }, [state]);

  // Calculate the future date
  const baseDate = new Date('2027-06-21');
  const updatedDate = new Date(baseDate);
  updatedDate.setDate(baseDate.getDate() + count);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>📆 Smart Date Counter</h1>

      <h2>Count: {count}</h2>
      <p>Date: {updatedDate.toDateString()}</p>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => dispatch({ type: 'increment' })}>
          + Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          - Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>

      <div>
        <label>Step: </label>
        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) =>
            dispatch({ type: 'setStep', payload: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
}

export default App;
