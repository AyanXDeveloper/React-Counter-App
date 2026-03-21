import { useState } from 'react'
import './App.css'
import CounterCard from './components/CounterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterCard />
    </>
  )
}

export default App
