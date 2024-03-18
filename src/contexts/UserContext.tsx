import { FC, ReactNode, createContext, useState } from 'react';

interface IUserContext {
  user: {
    userId: number;
    username: string;
  };
  setUser: (user: IUserContext['user']) => void;
}

const UserContext = createContext<IUserContext>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserContext['user']>({
    userId: 1,
    username: 'wow',
  });
  // const [auth, setAuth] = useState(null);
  // const [refresh, setRefresh] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
