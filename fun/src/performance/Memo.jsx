import React from 'react';
import { useState } from 'react';
import Child from './Child';

const Memo = ({ props }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child name="John" />
      <p>Count: {count}</p>
      <br></br>
      <div className="gap-4 flex flex-row justify-center">
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Memo;