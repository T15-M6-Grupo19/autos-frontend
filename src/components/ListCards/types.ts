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

export interface MockCar {
  imageURL: string;
  Marca: string;
  Modelo: string;
  Combustível: string;
  Cor: string;
  Ano: number;
  Km: number;
  Preço: number;
  descrição: string;
}

export interface IMockCarList {
  listCard: MockCar[];
}

export interface IMockCar {
  car: MockCar;
}
