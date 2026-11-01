import React, {useState} from 'react';

const UpdatedObject = ({ props }) => {
  const [object, setObject] = useState({ name: 'John', age: 30 });
  const handleClick = () => {
    setObject({ ...object, designation: 'Developer' });
  }
  return (
    <div className='container'>
      <h1>UpdatedObject Component</h1>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          Update Age
        </button>
        {Object.entries(object).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
    </div>
  );
};

export default UpdatedObject;