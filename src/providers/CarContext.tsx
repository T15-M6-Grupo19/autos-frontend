import { createContext, useState } from 'react';
import { mockList } from '../database/Mock2';
import { api } from '../services/api';
import {
  tResePWD,
  tResetPWDEmail,
} from '../components/Form/RegisterForm/validator';
import { useNavigate } from 'react-router-dom';

export interface IProviderProps {
  children: React.ReactNode;
}

export interface ICar {
  imageURL: string;
  brand: string;
  model: string;
  fuel: string;
  color: string;
  year: number;
  kilometers: number;
  price: number;
}

interface ICarContext {
  cars: ICar[];
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  filteredCars: string;
  setFilteredCars: React.Dispatch<React.SetStateAction<string>>;
  searchResult: ICar[];
  kmRange: number[];
  setKmRange: React.Dispatch<React.SetStateAction<number[]>>;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  openCreateModal: boolean;
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  sendEmail: (data: tResetPWDEmail) => void;
  resetPassword: (data: tResePWD, token: string) => void;
  setUserData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      account_type: string;
    }>
  >;
  userData: any;
  getNameCharacters: (name: string) => string;
}

export const CarContext = createContext({} as ICarContext);

export const CarProvider = ({ children }: IProviderProps) => {
  const [cars, setCars] = useState<ICar[]>(mockList);
  const [filteredCars, setFilteredCars] = useState('');
  const [kmRange, setKmRange] = useState<number[]>([0, 650000]);
  const [priceRange, setPriceRange] = useState<number[]>([10000, 550000]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [userData, setUserData] = useState({
    name: 'name',
    account_type: 'anunciante',
  });

  const navigate = useNavigate();
  const getNameCharacters = (name: string = 'name') => {
    return name.split(' ')[1]
      ? name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0)
      : name.charAt(0);
  };

  const sendEmail = (data: tResetPWDEmail) => {
    api
      .post('/users/resetPassword', data)
      .then(() => {
        alert('email enviado, verifique sua caixa de mensagens ou spam');
        setTimeout(() => navigate('/'), 2000);
      })
      .catch((error) => {
        console.error(error);
        alert('Ops, algo deu errado. Favor verifique seus dados');
      });
  };

  const resetPassword = (data: tResePWD, token: string) => {
    api
      .patch(`/users/resetPassword/${token}`, { password: data.password })
      .then(() => {
        alert('Senhas alteradas com sucesso');
        setTimeout(() => navigate('/login'), 2000);
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao tentar trocar a senha');
      });
  };

  const searchResult = cars.filter((car) => {
    if (car.kilometers <= kmRange[0] || car.kilometers >= kmRange[1]) {
      return;
    } else if (car.price <= priceRange[0] || car.price >= priceRange[1]) {
      return;
    } else if (filteredCars == '') {
      return true;
    }

    return (
      car.brand.includes(filteredCars) ||
      car.model.includes(filteredCars) ||
      car.color.includes(filteredCars) ||
      car.year.toString().includes(filteredCars) ||
      car.fuel.includes(filteredCars)
    );
  });

  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
        filteredCars,
        setFilteredCars,
        searchResult,
        kmRange,
        setKmRange,
        priceRange,
        setPriceRange,
        openCreateModal,
        setOpenCreateModal,
        userData,
        setUserData,
        getNameCharacters,
        sendEmail,
        resetPassword,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
