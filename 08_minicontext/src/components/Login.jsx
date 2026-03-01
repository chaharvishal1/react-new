import React, { useState, useContext } from 'react';
import userContext from '../context/userContent';

const Login = ({ props }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(userContext)
  const handleSubmit = (e)=> {
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <>
        <input type='text' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='button' onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;