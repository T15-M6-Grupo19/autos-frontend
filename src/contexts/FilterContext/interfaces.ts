export interface IFilterContext {
  filter: {
    Marca: string;
    Modelo: string;
    Combustível: string;
    Cor: string;
    Ano: number | null;
    Km: number | null;
    Preço: number | null;
  };

  setFilter: React.Dispatch<
    React.SetStateAction<{
      Marca: string;
      Modelo: string;
      Combustível: string;
      Cor: string;
      Ano: null;
      Km: null;
      Preço: null;
    }>
  >;
}

export interface IFilterProvider {
  children: React.ReactNode;
}
