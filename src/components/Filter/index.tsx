import { useContext } from "react";
import Button from "../Button"
import MultiRangeSlider from "./Ranger";
import { FilterCard } from "./style"
import { SlideContext } from "../../provider/SlideContext";

const FilterCars = () => {
    const { filterPriceMin, setFilterPriceMin, filterPriceMax, setFilterPriceMax, filterKmMin, filterKmMax,  setFilterKmMin, setFilterKmMax } = useContext(SlideContext);

    return(
        <>
        <FilterCard>
            <h2 className="textHeading6600">Marca</h2>
                <ul>
                    <li><a href="">General Motors</a></li>
                    <li><a href="">Fiat</a></li>
                    <li><a href="">Ford</a></li>
                    <li><a href="">Honda</a></li>
                    <li><a href="">Porsche</a></li>
                    <li><a href="">volswagen</a></li>
                </ul>

            <h2 className="textHeading6600">Modelo</h2>
                <ul>
                    <li><a href="">Civic</a></li>
                    <li><a href="">Corolla</a></li>
                    <li><a href="">Cruze</a></li>
                    <li><a href="">Fit</a></li>
                    <li><a href="">Goal</a></li>
                    <li><a href="">Ka</a></li>
                    <li><a href="">Onix</a></li>
                    <li><a href="">Porsche 718</a></li>
                </ul>
                
            <h2 className="textHeading6600">Cor</h2>
                <ul>
                    <li><a href="">Azul</a></li>
                    <li><a href="">Branca</a></li>
                    <li><a href="">Cinza</a></li>
                    <li><a href="">Prata</a></li>
                    <li><a href="">Preta</a></li>
                    <li><a href="">Verde</a></li>
                </ul>

            <h2 className="textHeading6600">Ano</h2>
                <ul>
                    <li><a href="">2022</a></li>
                    <li><a href="">2021</a></li>
                    <li><a href="">2018</a></li>
                    <li><a href="">2015</a></li>
                    <li><a href="">2013</a></li>
                    <li><a href="">2012</a></li>
                    <li><a href="">2010</a></li>
                </ul>

            <h2 className="textHeading6600">Combustível</h2>
                <ul>
                    <li><a href="">Elétrico</a></li>
                    <li><a href="">Flex</a></li>
                    <li><a href="">Híbrido</a></li>
                </ul>
            <h2 className="textHeading6600">Km</h2>
            <div>
                <span className="kmAndPrice">
                    <p>{filterKmMin}km</p> <p>{filterKmMax}km</p>
                </span>
                <MultiRangeSlider min={0} max={100}  onChange={({ min, max }: { min: number; max: number }) => {setFilterKmMin(min), setFilterKmMax(max) }}/>
            </div>
                
            <h2 className="textHeading6600">Preço</h2>
            <div>
                <span className="kmAndPrice">
                    <p>R$ {filterPriceMin}</p> <p>R$ {filterPriceMax}</p>
                </span>
                <MultiRangeSlider min={0} max={100}  onChange={({ min, max }: { min: number; max: number }) => {setFilterPriceMin(min), setFilterPriceMax(max) }}/>
            </div>
            <Button name="Limpar filtros" variant="primary"></Button>
        </FilterCard>
        </>
    )
}

export default FilterCars