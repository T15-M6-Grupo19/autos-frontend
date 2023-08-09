
import { useContext } from "react";
import InfoListCards from "../../database/Mock";
import { FilterContainer, ModelContainer, YearContainer } from "./styles";
import { FilterContext } from "../../contexts/FilterContext/filterContext";

export const FilterComponent = () => {
  const { setFilter } = useContext(FilterContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    /* Tentei usar event.currentTarget mas não funcionou; 
    o código sempre quebrava no segundo clique sobre o target, porque o innerText retornava sempre null */
    const key = target.getAttribute("data-key");
    const value = target.innerText;
    if (key) {
      setFilter((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
    console.log();
  };

  return (
    <FilterContainer>
      <h1>Filtros</h1>
      <ModelContainer>
        <p>
          <strong> Marcas </strong>
        </p>
        {InfoListCards.map((item) => (
          <li data-key="name" onClick={handleClick}>
            {item.name}
          </li>
        ))}
      </ModelContainer>
      <YearContainer>
        <p>
          <strong>Ano</strong>
        </p>
        {InfoListCards.sort((a, b) => Number(a.year) - Number(b.year)).map(
          (item) => (
            <li data-key="year" onClick={handleClick}>
              {item.year}
            </li>
          )
        )}
      </YearContainer>
    </FilterContainer>
  );
};
=======
import Button from "../Button"
import { FilterCard } from "./style"

interface IFilters {
    maxPrice: number;
    minPrice: number;
    maxKm: number;
    minKm: number;
}


const FilterCars = ({maxPrice, minPrice, maxKm, minKm}: IFilters ) => {
    
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
                        <p>{minKm}km</p> <p>{maxKm}km</p>
                    </span>
                    <input type="range" min={minKm} max={maxKm}/>
                </div>
                
            <h2 className="textHeading6600">Preço</h2>
            <div>
            <span className="kmAndPrice">
                    <p>R$ {minPrice}</p> <p>R$ {maxPrice}</p>
                </span>
                <input type="range" min={minPrice} max={maxPrice}/>
            </div>
            <Button name="Limpar filtros" variant="primary"></Button>
        </FilterCard>
        </>
    )
}

export default FilterCars;
