import { useContext } from 'react';
import Banner from '../Banner';
import Card from './Card';

import { ListCardContainer } from './style';

import { IMockCarList } from './types';
import { FilterContext } from '../../contexts/FilterContext';
import { mockList } from '../../database/Mock2';
import { SlideContext } from '../../provider/SlideContext';

const ListCards = ({ listCard }: IMockCarList) => {
  const { filter } = useContext(FilterContext);
  const { filterPriceMin, filterPriceMax, filterKmMin, filterKmMax } =
    useContext(SlideContext);

  let filteredCars = mockList;

  if (filter.Marca) {
    filteredCars = filteredCars.filter(
      (car) => car.Marca.toLowerCase() === filter.Marca.toLowerCase()
    );
  }
  if (filter.Modelo) {
    filteredCars = filteredCars.filter(
      (car) => car.Modelo.toLowerCase() === filter.Modelo.toLowerCase().trim()
    );
  }
  if (filter.Ano) {
    filteredCars = filteredCars.filter((car) => car.Ano === Number(filter.Ano));
  }
  if (filter.Cor) {
    filteredCars = filteredCars.filter(
      (car) => car.Cor.toLowerCase() === filter.Cor.toLowerCase().trim()
    );
  }
  if (filter.Combustível) {
    filteredCars = filteredCars.filter(
      (car) => car.Combustível === filter.Combustível.trim()
    );
  }
  if (filterPriceMin) {
    filteredCars = filteredCars.filter((car) => car.Preço > filterPriceMin);
  }
  if (filterPriceMax) {
    filteredCars = filteredCars.filter((car) => car.Preço < filterPriceMax);
  }
  if (filterKmMin) {
    filteredCars = filteredCars.filter((car) => car.Km > filterKmMin);
  }
  if (filterKmMax) {
    filteredCars = filteredCars.filter((car) => car.Km < filterKmMax);
  }

  if (filter!) {
    <p>Nenhum veículo corresponde aos critérios.</p>;
  }

  if (listCard.length === 0) {
    return <Banner />;
  }

  return (
    <ListCardContainer>
      {filteredCars.map((Car) => (
        <Card car={Car} />
      ))}
    </ListCardContainer>
  );
};

export default ListCards;
