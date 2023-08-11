import { useContext, useState } from "react";
import Button from "../Button";
import MultiRangeSlider from "./Ranger";
import { FilterCard } from "./style";
import { SlideContext } from "../../provider/SlideContext";
import { mockList } from "../../database/Mock2";
import { FilterContext } from "../../contexts/FilterContext";

const FilterCars = () => {
  const [sliderKey, setSliderKey] = useState(0);
  const { filter, setFilter } = useContext(FilterContext);
  const {
    filterPriceMin,
    setFilterPriceMin,
    filterPriceMax,
    setFilterPriceMax,
    filterKmMin,
    filterKmMax,
    setFilterKmMin,
    setFilterKmMax,
  } = useContext(SlideContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const key = target.getAttribute("data-key");
    const value = target.textContent;

    if (key) {
      setFilter((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
    console.log(filter);
  };

  const initialMaxPrice = 100000;
  const initialMinPrice = 0;
  const initialMinKm = 0;
  const initialMaxKm = 100000;

  const handleResetClick = () => {
    setFilter({
      Marca: "",
      Modelo: "",
      Combustível: "",
      Cor: "",
      Ano: null,
      Km: null,
      Preço: null,
    });

    setFilterPriceMin;

    setFilterKmMax(initialMaxKm);
    setFilterKmMin(initialMinKm);
    setFilterPriceMax(initialMaxPrice);
    setFilterPriceMin(initialMinPrice);
    setSliderKey((prevState) => prevState + 1);
  };

  const brands = [...new Set(mockList.map((item) => item.Marca))];
  const models = [...new Set(mockList.map((item) => item.Modelo))];
  const years = [...new Set(mockList.map((item) => item.Ano))];
  const colors = [...new Set(mockList.map((item) => item.Cor))];

  return (
    <FilterCard>
      <div>
        <h2 className="textHeading6600">Marca</h2>
        <ul>
          {brands.map((brand) => (
            <li onClick={handleClick}>
              <a href="" data-key="Marca">
                {brand}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="textHeading6600">Modelo</h2>
        <ul>
          {models.map((model) => (
            <li onClick={handleClick}>
              <a data-key="Modelo"> {model}</a>
            </li>
          ))}
        </ul>
        <h2 className="textHeading6600">Cor</h2>
        <ul>
          {colors.map((color) => (
            <li onClick={handleClick}>
              <a data-key="Cor"> {color}</a>
            </li>
          ))}
        </ul>
        <h2 className="textHeading6600">Ano</h2>
        <ul>
          {years.map((ano) => (
            <li onClick={handleClick}>
              <a data-key="Ano">{ano}</a>
            </li>
          ))}
        </ul>
        <h2 className="textHeading6600">Combustível</h2>
        <ul>
          <li onClick={handleClick}>
            <a data-key="Combustível"> Gasolina </a>
          </li>
          <li onClick={handleClick}>
            <a data-key="Combustível">Etanol </a>
          </li>
        </ul>
      </div>
      <h2 className="textHeading6600">Km</h2>
      <div>
        <span className="kmAndPrice">
          <p>{filterKmMin}km</p> <p>{filterKmMax}km</p>
        </span>
        <MultiRangeSlider
          key={sliderKey}
          min={0}
          max={100000}
          onChange={({ min, max }: { min: number; max: number }) => {
            setFilterKmMin(min), setFilterKmMax(max);
          }}
        />
      </div>
      <h2 className="textHeading6600">Preço</h2>
      <div>
        <span className="kmAndPrice">
          <p>R$ {filterPriceMin}</p> <p>R$ {filterPriceMax}</p>
        </span>
        <MultiRangeSlider
          key={sliderKey}
          min={0}
          max={100000}
          onChange={({ min, max }: { min: number; max: number }) => {
            setFilterPriceMin(min), setFilterPriceMax(max);
          }}
        />
      </div>
      <Button
        name="Limpar filtros"
        variant="primary"
        onClick={handleResetClick}
      ></Button>
    </FilterCard>
  );
};

export default FilterCars;
