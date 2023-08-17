import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { ListCardContainer } from "./style";
import { CarContext } from "../../providers/CarContext";
import { useLocation } from "react-router-dom";


const ListCards = () => {
  const { searchResult } = useContext(CarContext)
  const [isProfile, setIsProfile] = useState(false);

  
  const page = useLocation();
  useEffect(() => {
    page.pathname.split('/')[1] === 'Profile' && setIsProfile(true);
  }, [page]);
 

  return (
    <ListCardContainer view={ isProfile ? "allSpace" : "spaceTwo"}>
      {searchResult!.map((car) => (
        <Card key={car.km} car={car} />
      ))}
    </ListCardContainer>
  );
};

export default ListCards;
