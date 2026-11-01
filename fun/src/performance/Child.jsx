import React, {memo} from 'react';

const Child = ({ onClick }) => {
  console.log('Child component rendered');
  return (
    <div>
      <h2>Child Component</h2>
      {/* <p>Name is {name}</p> */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
        Click me
      </button> 
    </div>
  );
}

export default memo(Child);