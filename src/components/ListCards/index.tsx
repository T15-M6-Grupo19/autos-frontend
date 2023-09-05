import { useEffect, useState } from 'react';
import Card from './Card';
import { ListCardContainer } from './style';
import { useLocation, useParams } from 'react-router-dom';
import { ICar } from '../../providers/CarContext';

type tListCarsProps = {
  carList: Array<ICar>;
  isOwner?: boolean;
};

const ListCards = ({ carList, isOwner }: tListCarsProps) => {
  const [isProfile, setIsProfile] = useState(false);

  const page = useLocation();
  useEffect(() => {
    page.pathname.split('/')[1] === 'profile' && setIsProfile(true);
  }, [page]);


  return (
    carList[0] && (
      <ListCardContainer view={isProfile ? 'allSpace' : 'spaceTwo'}>
        {carList.map((car) => {
          
          return (
              <Card key={car.id} car={car} isOwner={isOwner} />
          );
        })}
      </ListCardContainer>
    )
  );
};

export default ListCards;
