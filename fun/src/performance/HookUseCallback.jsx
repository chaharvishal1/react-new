import React, { useState, useCallback } from 'react';
import Child from './Child';

const HookUseCallback = ({ props }) => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log('Child component clicked');
  }, []);
  return (
    
    <div>
        <h3>Use Callback</h3>
        <Child onClick={handleClick} />
        <p>result: {count}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
            Increase
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count - 1)}>
            Decrease
        </button>
    </div>
  );
};

export default HookUseCallback;