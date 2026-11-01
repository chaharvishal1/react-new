import React, {useState} from 'react';

const UpdateArray = () => {
  const [array, setArray] = useState(['item1', 'item2', 'item3']);
  const handleClick = () => {
    setArray([...array, `item${array.length + 1}`]);
  };
  return (
    <>
        <div className='container'>
            <h1>UpdateArray Component</h1>
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
            Add Item
            </button>
            <ul>
            {array.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    </>
  );
};

export default UpdateArray;