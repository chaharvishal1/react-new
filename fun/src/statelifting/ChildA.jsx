import React from 'react';

const ChildA = ({ msg, setMsg }) => {
  return (
    <div>
      {/* <p>{msg}</p> */}
      <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => setMsg('Updated Message')}>Click Here</button>
    </div>
  );
};

export default ChildA;