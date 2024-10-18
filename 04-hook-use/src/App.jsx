import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
    return () => {
      console.log('Cleanup code here if needed');
    }
  }, [count]); 

  return (
    <>
      <h1>counter</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>

   

  )
}

export default App
