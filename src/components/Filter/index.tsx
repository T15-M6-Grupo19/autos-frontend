import { useContext } from 'react';
import Button from '../Button';
import { FilterCard } from './style';
import { CarContext } from '../../providers/CarContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterCars = () => {
  const {
    searchResult,
    setFilteredCars,
    setCars,
    cars,
    kmRange,
    setKmRange,
    priceRange,
    setPriceRange,
  } = useContext(CarContext);

  function handleClick(value: string | number) {
    setFilteredCars(value.toString());
    setCars(searchResult);
  }

  function eraseFilter() {
    setFilteredCars('');
    setCars(cars);
    setKmRange([0, 650000]);
    setPriceRange([10000, 550000]);
  }

  function handleKmRange(newRange: any) {
    setKmRange(newRange);
  }

  function handlePriceRange(newRange: any) {
    setPriceRange(newRange);
  }

  const brands: string[] = [];
  searchResult.map((car) => {
    if (!brands.includes(car.brand)) {
      brands.push(car.brand);
    }
  });
  brands.sort();

  const models: string[] = [];
  searchResult.map((car) => {
    if (!models.includes(car.model)) {
      models.push(car.model);
    }
  });
  models.sort();

  const colors: string[] = [];
  searchResult.map((car) => {
    if (!colors.includes(car.color)) {
      colors.push(car.color);
    }
  });
  colors.sort();

  const years: number[] = [];
  searchResult.map((car) => {
    if (!years.includes(car.year)) {
      years.push(car.year);
    }
  });
  years.sort();

  const fuelTypes: string[] = [];
  searchResult.map((car) => {
    if (!fuelTypes.includes(car.fuel)) {
      fuelTypes.push(car.fuel);
    }
  });
  fuelTypes.sort();

  return (
    <FilterCard>
      <div>
        <h2 className='textHeading6600'>Marca</h2>
        <ul>
          {brands.map((brand) => (
            <li onClick={() => handleClick(brand)} key={brand}>
              {brand}
            </li>
          ))}
        </ul>
        <h2 className='textHeading6600'>Modelo</h2>
        <ul>
          {models.map((model) => (
            <li onClick={() => handleClick(model)} key={model}>
              {model}
            </li>
          ))}
        </ul>
        <h2 className='textHeading6600'>Cor</h2>
        <ul>
          {colors.map((color) => (
            <li onClick={() => handleClick(color)} key={color}>
              {color}
            </li>
          ))}
        </ul>
        <h2 className='textHeading6600'>Ano</h2>
        <ul>
          {years.map((year) => (
            <li onClick={() => handleClick(year)} key={year}>
              {year}
            </li>
          ))}
        </ul>
        <h2 className='textHeading6600'>Combustível</h2>
        <ul>
          {fuelTypes.map((fuel) => (
            <li onClick={() => handleClick(fuel)} key={fuel}>
              {fuel}
            </li>
          ))}
        </ul>
      </div>
      <h2 className='textHeading6600'>Km</h2>
      <div>
        <span className='kmAndPrice'>
          <p>{kmRange[0]}km</p>
          <p>{kmRange[1]}km</p>
        </span>
        <Slider
          range
          min={0}
          max={650000}
          defaultValue={kmRange}
          onChange={handleKmRange}
        />
      </div>

      <h2 className='textHeading6600'>Preço</h2>
      <div>
        <span className='kmAndPrice'>
          <p>R$ {priceRange[0]}</p>
          <p>R$ {priceRange[1]}</p>
        </span>
        <Slider
          range
          min={10000}
          max={550000}
          defaultValue={priceRange}
          onChange={handlePriceRange}
        />
      </div>
      <Button
        name='Limpar filtros'
        variant='primary'
        onClick={eraseFilter}
      ></Button>
    </FilterCard>
  );
};

export default FilterCars;
