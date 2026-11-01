import React, {useState} from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Mohit");
  return (
    <div className="bg-blue-500 md:bg-green-500 lg:bg-red-500">
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};