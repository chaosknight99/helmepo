import React, { useState } from 'react';  // Import useState hook
import './App.css';  // Import custom CSS for styles

function App() {
  const [count, setCount] = useState(0);  // Initialize counter state

  // Functions to update the counter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>

        <div className="button-container">
          <button className="button decrement" onClick={decrement}>-</button>
          <div className="counter-display">
            <p>{count}</p>
          </div>
          <button className="button increment" onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
