import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App🚀</h1>
      <Button text={'+'} counter={count} onClick={() => setCount((count) => count + 1)} />
      <span>{count}</span>
      <Button text={'-'} counter={count} onClick={() => setCount((count) => count - 1)} />
      <Button text={'Reset'} counter={count} onClick={() => setCount(0)} />
    </>
  )
}

export default App
