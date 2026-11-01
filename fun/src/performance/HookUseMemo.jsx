import React from 'react';
import {useState, useMemo} from 'react';

const HookUseMemo = ({ props }) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

    const complexCalcalation = () => {
        console.log('Complex calculation is running...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result = result + number;
        }
        return result;
    }

  const result = useMemo(() => complexCalcalation(), [number]);
  return (
    <div>
        <h1>HookUseMemo Component</h1>
        <p>Result: {result}</p>
        <br></br>
      <p>Count: {count}</p>
      <br></br>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default HookUseMemo;