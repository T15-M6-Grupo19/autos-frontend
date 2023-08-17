import { createContext, useState } from "react";
import { mockList } from "../database/Mock2";

export interface IProviderProps {
    children: React.ReactNode;
}

export interface ICar {
    imageURL: string,
    marca: string,
    modelo: string,
    combustivel: string,
    cor: string,
    ano: number,
    km: number,
    preco: number
}

interface ICarContext{
    cars: ICar[],
    setCars: React.Dispatch<React.SetStateAction<ICar[]>>,
    filteredCars: string,
    setFilteredCars: React.Dispatch<React.SetStateAction<string>>,
    searchResult: ICar[],
    kmRange: number[],
    setKmRange: React.Dispatch<React.SetStateAction<number[]>>,
    priceRange: number[],
    setPriceRange: React.Dispatch<React.SetStateAction<number[]>>


}

export const CarContext = createContext({} as ICarContext)

export const CarProvider = ({children}: IProviderProps) =>{
    const [cars, setCars] = useState<ICar[]>(mockList)
    const [filteredCars, setFilteredCars] = useState("")
    const [kmRange, setKmRange] = useState<number[]>([0, 650000])
    const [priceRange, setPriceRange] = useState<number[]>([10000,550000])

    
    let searchResult = cars.filter((car)=>{
        if(car.km <= kmRange[0] || car.km >= kmRange[1]){
            return
        }else if(car.preco <= priceRange[0] || car.preco >= priceRange[1]){
            return
        }else if(filteredCars == ""){
        return true
        }

        return car.marca.includes(filteredCars) ||
        car.modelo.includes(filteredCars) || 
        car.cor.includes(filteredCars) ||
        car.ano.toString().includes(filteredCars) ||
        car.combustivel.includes(filteredCars)
    })



    return (
        <CarContext.Provider value={{cars, setCars, filteredCars, setFilteredCars, 
            searchResult, kmRange, setKmRange, priceRange, setPriceRange
        }}>
            {children}
        </CarContext.Provider>
    )
}