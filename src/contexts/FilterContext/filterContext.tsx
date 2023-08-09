import { createContext, useState } from "react";
import { IFilterProvider, IFilterContext } from "./interfaces";

export const FilterContext = createContext<IFilterContext>(
  {} as IFilterContext
);

const FilterProvider: React.FC<IFilterProvider> = ({ children }) => {
  const [filter, setFilter] = useState({
    name: "",
    brand: "",
    color: "",
    year: "",
    fuel: "",
    price: "",
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
