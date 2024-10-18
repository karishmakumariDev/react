import { useState } from 'react'
import './App.css'
import {Card, Card2} from './componant/Card'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Card />
      <Card2 />
      <h2>{count}</h2>
      <button className='bg-rose-500' onClick={addValue}>Increment</button>
    </>
  )
}

export default App
