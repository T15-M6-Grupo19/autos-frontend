export interface RegisterType {
  toggleModal: () => void;
}

export enum UserType {
  ANUNCIANTE = "anunciante",
  COMPRADOR = "comprador",
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
}

