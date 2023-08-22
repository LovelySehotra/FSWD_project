import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
       
      <div className="card">
        <p>{count}</p>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button className="button"  onClick={() => setCount((count) => count - 1)}>
          Decrement 
        </button>
       
      </div>
      
    </div>
  )
}

export default App
