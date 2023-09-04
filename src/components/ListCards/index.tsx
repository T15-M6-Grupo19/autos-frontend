import { useEffect, useState } from 'react';
import Card from './Card';
import { ListCardContainer } from './style';
import { useLocation } from 'react-router-dom';
import { ICar } from '../../providers/CarContext';
import { Link } from 'react-router-dom';

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
            <Link to={`ad/${car.id}`}>
              <Card key={car.id} car={car} isOwner={isOwner} />
            </Link>
          );
        })}
      </ListCardContainer>
    )
  );
};

export default ListCards;
