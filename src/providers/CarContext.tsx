import { createContext, useEffect, useState } from "react";
import { mockList } from "../database/Mock2";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { api } from "../services/api";
import { EditAddress } from "../components/Modal/ModalEditAddress/valdiators";

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
  EditAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>
  updateAddress: (formData: {
    number: string;
    ZIP_code: string;
    state: string;
    city: string;
    street: string;
    additional_details?: string | null | undefined;
}) => Promise<void>
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
  const [filteredCars, setFilteredCars] = useState("");
  const [kmRange, setKmRange] = useState<number[]>([0, 650000]);
  const [priceRange, setPriceRange] = useState<number[]>([10000, 550000]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [userData, setUserData] = useState({ name: "name", account_type: "anunciante" });
  const [ EditAddress, setEditAddress ] = useState(true);


  const getNameCharacters = (name: string = "name") => {
    return name.split(" ")[1]
      ? name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)
      : name.charAt(0);
  };

  let searchResult = cars.filter((car) => {
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

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const { sub }: string = jwt_decode(token);

        const userResponse = await api.get("/users/" + sub);

        setUserData(await userResponse.data);
      } else {
        navigate("/login");
      }
    })();
  }, []);

  const updateAddress = async (formData: EditAddress) => {
      const token = localStorage.getItem('@TOKEN');
      
      if(token){
        const { sub }: string = jwt_decode(token);

        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token!)}`;


        try {
         await api.patch(`/users/${sub}`, formData)
          setEditAddress(false)

        }catch (error) {
          console.error(error)
        }
      }
  };


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
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
