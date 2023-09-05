import { ContainerCard } from './style';
import Button from '../../Button';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Ferrari from '../../../assets/Ferrari.svg';
import { CarContext } from '../../../providers/CarContext';
import { User } from '../../../providers/UserContext/interfaces';
import { Link } from 'react-router-dom';

export interface Iphotos {
  id: string;
  photo_url: string;
}

export interface iCardCar {
  id: string;
  brand: string;
  model: string;
  fuel: string;
  color: string;
  year: number;
  kilometers: number;
  price: number;
  photos: Iphotos[];
  user: User;
}

export interface IPropsCar {
  car: iCardCar;
  isOwner?: boolean;
}

export const Card = ({ car, isOwner }: IPropsCar) => {
  const [isProfile, setIsProfile] = useState(false);
  const page = useLocation();
  const { setEditAdModal, getNameCharacters } = useContext(CarContext);

  useEffect(() => {
    if (
      page.pathname.split('/')[1] === 'profile' &&
      !page.pathname.split('/')[2]
    ) {
      setIsProfile(true);
    }

    return;
  }, [page, isProfile]);

  return (
    <ContainerCard>
      <figure>
        <Link to={`/ad/${car.id}`} >
          <img src={car.photos ? car.photos[0]?.photo_url : Ferrari} />
        </Link>
      </figure>
      <div>
        <div className='fist'>
          <h2>
            {' '}
            {car.brand} - {car.model}{' '}
          </h2>
          <div> {car.model} </div>
        </div>
        <div className='second'>
          <div className='ballon-name'>
            <span className='first-letters'>{getNameCharacters(car.user?.name)}</span>
          </div>
          <span>{car.user?.name}</span>
        </div>
        <div className='thirsd'>
          <div className='detail'>
            <span>
              {car.kilometers} <span>KM</span>
            </span>
            <span>{car.year}</span>
          </div>
          <div className='wrap-price'>
            <span className='price'>
              {car.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>
        {isOwner ? (
          <div className='fourth'>
            <Button
              onClick={() => setEditAdModal(car)}
              variant='Editar'
              name={'Editar'}
            />
            <Link to={`/ad/${car.id}`} >
            
              <Button variant='Ver Detalhes' name={'Ver Detalhes'} />
            </Link>
          </div>
        ) : null}
      </div>
    </ContainerCard>
  );
};

export default Card;
