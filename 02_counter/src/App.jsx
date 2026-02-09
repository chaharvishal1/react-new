import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(counter + 1)
    // setCounter((preCounter) => preCounter + 1)
    // setCounter((preCounter) => preCounter + 1)
    // setCounter((preCounter) => preCounter + 1)
    // setCounter((preCounter) => preCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div className='container-counter'>
        <h1>Basic Counter Example With Add & Remove Buttons</h1>
        <div className="card">
          <button onClick={addValue}>Added</button>
          <div>{counter}</div>
          <button onClick={removeValue}>Remove</button>
        </div>
      </div>
    </>
  )
}

export default App
