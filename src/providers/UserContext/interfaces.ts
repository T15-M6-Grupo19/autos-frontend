import { UserType } from "../../components/Form/RegisterForm/types";
import Ad from "../../pages/Ad";

export interface IUserContext {
  specificUser: User | undefined | null;
  getUserById: () => Promise<void>;
  setSpecificUser: React.Dispatch<
    React.SetStateAction<User | undefined | null>
  >;
  loading: boolean;
  userId: string;
}

export interface IUserProps {
  children: React.ReactNode;
}

export interface Ad {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  kilometers: number;
  color: string;
  good_deal: boolean;
  price: number;
  description: string;
  published: boolean;
}


export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  CPF: string;
  mobile: string;
  birth_date: Date | string;
  description?: string | undefined | null;
  ZIP_code: string;
  state: string;
  street: string;
  number: string;
  additional_details?: string | undefined | null;
  account_type: UserType;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  ads?: Ad[];
}
