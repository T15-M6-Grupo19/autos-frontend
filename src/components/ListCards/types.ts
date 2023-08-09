export interface car {
     imageURL: string;
     name: string;
     description: string;
}

export interface ICar{
     car: car;
}

export interface IListCards {
     listCard: car[];
}