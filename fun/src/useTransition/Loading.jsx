import React from 'react';
import { useTransition } from 'react';

const Loading = ({ props, children }) => {
  
  const [pending, startTransition] = useTransition();
  const handleClick = () => {
    console.log(pending);
    startTransition( async() => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });
  };
  return (
    <>
        <h2>Use Transition</h2>
        <br></br>
        <br></br>
        {pending && <p>Loading...</p>}
        <button disabled={pending} type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleClick}>Click me</button>
        {children}
    </>
  );
}; 

export default Loading;