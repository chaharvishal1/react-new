import React from 'react';
import Child from '../contextAPI/Child.jsx';

const Parent = ({ props }) => {
  return (
    <div className="bg-blue-500 md:bg-green-500 lg:bg-red-500">
      <h1>This is Parent</h1>
      <Child />
    </div>
  );
};

export default Parent;