import { FC, ReactNode, createContext, useState } from 'react';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export interface IUserContext {
  user: {
    userid: number;
    username: string;
  };
  setUser: any;
  auth: string;
  setAuth: any;
  refresh: string;
  setRefresh: any;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState({ userid: -1, username: '' });
  const [auth, setAuth] = useState(null);
  const [refresh, setRefresh] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, auth, setAuth, refresh, setRefresh }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
