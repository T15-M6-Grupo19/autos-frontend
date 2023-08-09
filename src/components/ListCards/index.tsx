import { useContext } from "react";
import InfoListCards from "../../database/Mock";
import Banner from "../Banner";
import Card from "./Card";

import { ListCardContainer } from "./style";

import { IListCards } from "./types";
import { FilterContext } from "../../contexts/FilterContext/filterContext";

const ListCards = ({ listCard }: IListCards) => {
  const { filter } = useContext(FilterContext);

  let filteredCars = InfoListCards;

  if (filter.name) {
    filteredCars = filteredCars.filter((car) =>
      car.name.toLowerCase().includes(filter.name.toLowerCase())
    );
  }

  if (filter.year) {
    filteredCars = filteredCars.filter(
      (car) => Number(car.year) === Number(filter.year)
    );
  }

  if (filteredCars.length === 0) {
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
