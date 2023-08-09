export interface IFilterContext {
  filter: {
    name: string;
    brand: string;
    color: string;
    year: string;
    fuel: string;
    price: string;
  };

  setFilter: React.Dispatch<
    React.SetStateAction<{
      name: string;
      brand: string;
      color: string;
      year: string;
      fuel: string;
      price: string;
    }>
  >;
}

export interface IFilterProvider {
  children: React.ReactNode;
}
