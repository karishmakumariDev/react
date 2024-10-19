import { useState } from 'react';

function useCounter() {
  const [val, setVal] = useState(1);

  function increment() {
    setVal(val + 1);
  }

  function decrement() {
    setVal(val - 1);
  }

  // Return the value and the two functions
  return [val, increment, decrement];
}

export default useCounter;
