import { createContext, useState } from 'react';
import { IUserContext, IUserProps, User } from './interfaces';
import { api } from '../../services/api';
import jwt_decode from 'jwt-decode';


export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [specificUser, setSpecificUser] = useState<User | null>();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('')

  const token = localStorage.getItem('@TOKEN');
  if (token) {
    JSON.parse(token);
  }

  const getUserById = async (): Promise<void> => {
    const { sub }: string = jwt_decode(token!);
    setUserId(sub)

    try {
      setLoading(true);

      const response = await api.get(`/users/${sub}`);

      setSpecificUser(response.data);

      localStorage.setItem(
        '@account_type',
        JSON.stringify(response.data.account_type)
      );

      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ specificUser, getUserById, setSpecificUser, loading, userId }}
    >
      {children}
    </UserContext.Provider>
  );
};
