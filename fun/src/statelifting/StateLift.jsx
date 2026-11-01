import React, {useState} from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const StateLift = ({ props }) => {
  const [msg, setMsg] = useState('Initial Message');
  return (
    <div className="container">
      <ChildA msg={msg} setMsg={setMsg} />
      <ChildB msg={msg} />
    </div>
  );
};

export default StateLift;