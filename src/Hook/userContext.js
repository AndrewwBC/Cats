import React, { createContext } from 'react';

export const UserContext = createContext();

let userCod = localStorage.getItem('usercod');

export const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: userCod }}>
      {children}
    </UserContext.Provider>
  );
};
