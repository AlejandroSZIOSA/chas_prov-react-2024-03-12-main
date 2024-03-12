// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

function useCounter(initialCount = 10) {
  const [count, setCount] = useState(initialCount);
  const sum = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };
  return { count, sum, sub };
}

function App() {
  const { count, sum, sub } = useCounter(10);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={sum}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
}

export default App;
