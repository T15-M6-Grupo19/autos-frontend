export interface car {
  imageURL: string;
  name: string;
  description: string;
}

export interface ICar {
  car: car;
}

export interface IListCards {
  listCard: car[];
}

export interface IListCard {
  view: string;
}

export interface MockCar {
  imageURL: string;
  Marca: string;
  Modelo: string;
  Combustível: string;
  Cor: string;
  Ano: number;
  Km: number;
  Preço: number;
}

export interface IMockCarList {
  listCard: MockCar[];
}

export interface IMockCar {
  car: MockCar;
}
