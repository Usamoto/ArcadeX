import { useState } from 'react'
import reactLogo from './assets/ludo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Arcade Game Ludo</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="ludo" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Welcome to the Mammothon Hackathon by Celestia
      </p>
    </>
  )
}

export default App
