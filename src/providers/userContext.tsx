import React, { createContext, useState } from 'react';

const UserContext = createContext<any>(null);

const UserStorage = ({ children }: any) => {
  const [user, setUser] = useState('');
  const [theme, setTheme] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
