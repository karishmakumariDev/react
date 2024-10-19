import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Child from './Child';
import './App.css';
import useCounter from './useCounter';
// import React from 'react';
// import User from './User'
function App() {

  /// useState
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  const [val, increment, decrement] = useCounter();

  //useEffect
  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
    return () => {
      console.log('Cleanup code here if needed');
    };
  }, [count]);

  //useMemo
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(num), [num]);

  //useCallback
  const sum = useCallback(() => {
    let ans = 0;
    for (let i = 0; i < 1000; i++) {
      ans += i;
    }
    return ans;
  }, []);

  //useRef
  const refEllem = useRef(null);
  const[name,setName] = useState("karishma");
  console.log(refEllem);
  function reset() {
    setName("");
    refEllem.current.focus()
  }

  function handle(){
    refEllem.current.style.color="red"
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>

      <div>
        <h2>Expensive Calculation</h2>
        <p>Number: {num}</p>
        <p>Calculation: {calculation}</p>
        <button onClick={() => setNum(num + 1)}>Increase Number</button>
      </div>

      <div>********************</div>
      <div>useCallback</div>
      <Child fun={sum} />

      <div>********************************</div>
      <div>Custom Hook</div>
      <div>
        <div>{val}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>


      <div>****************************</div>
      <div>useRef</div>
      <input  ref={refEllem} type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={reset}>reset</button>
      <button onClick={handle}>handle</button>

      <div>*************************************</div>
      <h1>forwardRef in React</h1>
      <button>inputbox</button>
    </>
  );
}

export default App;
