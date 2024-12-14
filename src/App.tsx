//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Wolt Delivery Fee Calculator</h1>
      </header>

      <form>
        <div className="form-group">
          <label htmlFor="cartValue">Cart Value</label>
          <input
            type="number"
            id="cartValue"
            name="cartValue"
            placeholder="Enter cart value"
            min="0"
            step="0.1"
          />
          <span>€</span>

        </div>

      </form>
    </>
  )
}

export default App
