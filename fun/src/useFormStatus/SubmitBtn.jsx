import React from 'react';
import {useFormStatus} from 'react-dom';

const SubmitBtn = ({ props }) => {
  const {pending} = useFormStatus();
  console.log(pending)
  return (
    <>
        <input type="text" placeholder="Enter text" className="border border-gray-300 rounded py-2 px-4 mb-4" />
        <br></br>
        <input type="text" placeholder="Enter text" className="border border-gray-300 rounded py-2 px-4 mb-4" />
        <br></br>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit' }
        </button>
    </>
  );
};

export default SubmitBtn;