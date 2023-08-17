import { useContext, useEffect } from "react";
import Card from "./Card";
import { ListCardContainer } from "./style";
import { CarContext } from "../../providers/CarContext";


const ListCards = () => {
  const { searchResult } = useContext(CarContext)

  

  return (
    <ListCardContainer>
      {searchResult!.map((car) => (
        <Card key={car.km} car={car} />
      ))}
    </ListCardContainer>
  );
};

export default ListCards;
