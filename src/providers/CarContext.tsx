import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import {
  tResePWD,
  tResetPWDEmail,
} from "../components/Form/RegisterForm/validator";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { EditAddress } from "../components/Modal/ModalEditAddress/valdiators";
import { updateData, userData } from "./types";

export interface IProviderProps {
  children: React.ReactNode;
}

interface iPhotos {
  photos: string[];
}

export interface ICar {
  id: string;
  photos: iPhotos;
  brand: string;
  model: string;
  fuel: string;
  color: string;
  year: number;
  kilometers: number;
  price: number;

}

export interface IPhoto {
  id: string;
  photo_url: string;
}

export interface IEditCar {
  brand: string;
  color: string;
  description: string;
  fuel: string;
  good_deal: boolean;
  id: string;
  kilometers: number;
  model: string;
  photos: IPhoto[];
  price: number;
  published: boolean;
  year: string;
}

interface ICarContext {
  cars: ICar[];
  EditAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
  EditUserModal: boolean;
  setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateAddress: (formData: {
    number: string;
    ZIP_code: string;
    state: string;
    city: string;
    street: string;
    additional_details?: string | null | undefined;
  }) => Promise<void>;
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
  userData: userData;
  getNameCharacters: (name: string) => string;

  editAdModal: updateData | null;
  setEditAdModal: React.Dispatch<React.SetStateAction<updateData | null>>;

  getNextAmount: () => void;
  getPrevAmount: () => void;
  prevAmount: string | null;
  nextAmount: string | null;
  count: number | null;
  page: number;

  refreshPage: () => void;
  
}

export const CarContext = createContext({} as ICarContext);

export const CarProvider = ({ children }: IProviderProps) => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [filteredCars, setFilteredCars] = useState("");
  const [kmRange, setKmRange] = useState<number[]>([0, 650000000000]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000000000]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [EditAddress, setEditAddress] = useState(false);
  const [EditUserModal, setEditUserModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editAdModal, setEditAdModal] = useState<updateData | null>(null);
  const [nextAmount, setNextAmount] = useState("");
  const [prevAmount, setPrevAmount] = useState("");
  const [count, setCount] = useState<number | null>(0);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const getNameCharacters = (name: string = "name") => {
    return name.split(" ")[1]
      ? name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)
      : name.charAt(0);
  };

  const sendEmail = (data: tResetPWDEmail) => {
    api
      .post("/users/resetPassword", data)
      .then(() => {
        alert("email enviado, verifique sua caixa de mensagens ou spam");
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        console.error(error);
        alert("Ops, algo deu errado. Favor verifique seus dados");
      });
  };

  const resetPassword = (data: tResePWD, token: string) => {
    api
      .patch(`/users/resetPassword/${token}`, { password: data.password })
      .then(() => {
        alert("Senhas alteradas com sucesso");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao tentar trocar a senha");
      });
  };

  useEffect(() => {
    const getAllAds = async () => {
      try {
        setLoading(!loading);
        const response = await api.get("/salesAd");
        
        if (response.data.data) {
          setCars([...response.data.data]);
        } else {
          setCars([...response.data]);
          
        }
        setNextAmount(response.data.nextAmount);
        setCount(Math.ceil(response.data.count / 9));
        setPage(response.data.page);
      } catch (error) {
        alert(error);
        console.error(error);
      } finally {
        setLoading(!loading);
      }
    };

    getAllAds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPrevAmount = async () => {
    try {
      setLoading(!loading);
      if (prevAmount !== null) {
        const response = await api.get(prevAmount);

        setPrevAmount(response.data.prevAmount);
        setNextAmount(response.data.nextAmount);
        setPage(response.data.page);

        setCars([...response.data.data]);
      }
    } catch (error) {
      alert(error);
      console.error(error);
    } finally {
      setLoading(!loading);
    }
  };

  const getNextAmount = async () => {
    try {
      setLoading(!loading);

      const response = await api.get(nextAmount);

      setNextAmount(response.data.nextAmount);
      setPrevAmount(response.data.prevAmount);
      setPage(response.data.page);
      setCars([...response.data.data]);
      
    } catch (error) {
      alert(error);
      console.error(error);
    } finally {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const { sub }: string = jwt_decode(token);

        const userResponse = await api.get("/users/" + sub);

        setUserData(await userResponse.data);
      } else {
        // navigate('/login');
      }
    })();
  }, []);

  const updateAddress = async (formData: EditAddress) => {
    let token = localStorage.getItem("@TOKEN");
    token = JSON.parse(token!);

    if (token) {
      const { sub }: string = jwt_decode(token);

      try {
        await api.patch(`/users/${sub}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEditAddress(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  
  const searchResult = cars.filter((car) => {
    if (car.kilometers <= kmRange[0] || car.kilometers >= kmRange[1]) {
     
      return;
    } else if (car.price <= priceRange[0] || car.price >= priceRange[1]) {
      
      return;
    } else if (filteredCars == "") {
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
        EditAddress,
        setEditAddress,
        updateAddress,
        sendEmail,
        resetPassword,
        EditUserModal,
        setEditUserModal,
        editAdModal,
        setEditAdModal,
        getNextAmount,
        getPrevAmount,
        prevAmount,
        nextAmount,
        count,
        page,
        refreshPage,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
