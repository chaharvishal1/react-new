import { useContext } from 'react';
import { UserContext } from './UserContext';

const Child = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="bg-blue-500 md:bg-green-500 lg:bg-red-500">
      <h1>This is Child</h1>
      <p>Name: {user}</p>
      <button className="bg-blue-500 md:bg-green-500 lg:bg-red-500" onClick={() => setUser("Jane Doe")}>Click Me</button>
    </div>
  );
}

export default Child;