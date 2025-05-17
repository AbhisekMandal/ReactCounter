import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter Value: </h1>
    <h3>=================</h3>
    <button onClick={counter}>Add value</button>
    <button onClick={counter}>Remove value</button>
    <footer>Footer: {counter}</footer>
    
    </>
  )
}

export default App
