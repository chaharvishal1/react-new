import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_NAME);
  

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Welcome to our mega project</h1>
    </>
  )
}

export default App
