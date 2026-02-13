import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAlw, setNumAlw] = useState(false)
  const [charAlw, setCharAlw] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass= ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAlw){
      str = str + '0123456789'
    }
    if(charAlw) {
      str = str + "!@#$%^&*-_+=[]{}~`"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAlw, charAlw, setPassword])

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 6)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAlw, charAlw, passwordGenerator])

  return (
    <>
    <div className='container'>
      <div className='form-wrap'>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Username" value={password} ref={passwordRef} />
          <button className='btn btn-primary' type="button" onClick={copyPasswordClipboard}>Copy</button>
        </div>
        <div className='other-fields'>
          <div className='form-check'>
            <input type="range" className="form-range" id="range1" min={6} max={100} value={length} onChange={(e)=> {setLength(e.target.value)}}></input>
            <label for="range1" className="form-label">Password Length ({length})</label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" id="checkDefault" onChange={() => {setNumAlw((prev) => !prev)}} />
          <label className="form-check-label" for="checkDefault">Number Allow</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="checkChecked" onChange={() => {setCharAlw((prev) => !prev)}} />
          <label className="form-check-label" for="checkChecked">Character Allow</label>
        </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
