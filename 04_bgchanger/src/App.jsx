import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("gray")

  return (
    <>
      <div className='container' style={{backgroundColor: bgColor}}>
        <div className='d-flex justify-content-center align-items-center gap-3 py-5 px-3'>
          <button className='btn btn-primary rounded-pill border-0' onClick={() => setBgColor("red")} style={{backgroundColor: "red", minWidth: "100px"}}>Red</button>
          <button className='btn btn-primary rounded-pill border-0' onClick={() => setBgColor("blue")} style={{backgroundColor: "blue", minWidth: "100px"}}>Blue</button>
          <button className='btn btn-primary rounded-pill border-0' onClick={() => setBgColor("purple")} style={{backgroundColor: "purple", minWidth: "100px"}}>Purple</button>
          <button className='btn btn-primary rounded-pill border-0' onClick={() => setBgColor("green")} style={{backgroundColor: "green", minWidth: "100px"}}>Green</button>
          <button className='btn btn-primary rounded-pill border-0' onClick={() => setBgColor("coral")} style={{backgroundColor: "coral", minWidth: "100px"}}>Coral</button>
        </div>
      </div>
    </>
  )
}

export default App
