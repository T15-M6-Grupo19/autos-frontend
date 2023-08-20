import { useEffect, useState } from "react";
import Card from "./Card";
import { ListCardContainer } from "./style";
import { useLocation } from "react-router-dom";

const ListCards = ({ carList }) => {
  const [isProfile, setIsProfile] = useState(false);

  const page = useLocation();
  useEffect(() => {
    page.pathname.split("/")[1] === "profile" && setIsProfile(true);
  }, [page]);

  return (
    carList[0] && (
      <ListCardContainer view={isProfile ? "allSpace" : "spaceTwo"}>
        {carList.map((car) => (
          <Card key={car.kilometers} car={car} />
        ))}
      </ListCardContainer>
    )
  );
};

export default ListCards;
