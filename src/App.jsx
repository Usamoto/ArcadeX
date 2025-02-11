import { useState } from 'react'
import { ParaModal } from "@getpara/react-sdk";
import para from "./clients/para";
import "@getpara/react-sdk/styles.css";
import reactLogo from './assets/ludo.png'

import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);  // <--- Fehlender State für Modal

    return (
        <>
            <div>
                <h1>Arcade Game Ludo</h1>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="ludo" alt="React logo" />
                </a>
            </div>

            <div>
                <button onClick={() => setIsOpen(true)}>Sign in with Para</button>
                <ParaModal
                    para={para}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    appName="Ludo OnChain"
                    logo="https://yourapp.com/logo.png"
                    theme={{ backgroundColor: "#ffffff", foregroundColor: "#000000" }}
                />
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
                Welcome to the Mammothon Hackathon by Celestia! Happy Hacking!
            </p>
        </>
    )
}

export default App;
