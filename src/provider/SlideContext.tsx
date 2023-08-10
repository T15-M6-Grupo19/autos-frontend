/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useState } from "react";


export const SlideContext = createContext({} as any);

export const GlobalProvider = ({ children }: any) => {
     const [ filterPriceMin, setFilterPriceMin] = useState(0)
     const [ filterPriceMax, setFilterPriceMax] = useState(0)

     const [ filterKmMin, setFilterKmMin] = useState(0)
     const [ filterKmMax, setFilterKmMax] = useState(0)



  return (
    <SlideContext.Provider value={{filterPriceMin, setFilterPriceMin, filterPriceMax, setFilterPriceMax, filterKmMin, filterKmMax,  setFilterKmMin, setFilterKmMax}}>
      {children}
    </SlideContext.Provider>
  );
};