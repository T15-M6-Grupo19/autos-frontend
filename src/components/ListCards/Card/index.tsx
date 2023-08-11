import { ContainerCard } from './style';

import { IMockCar } from '../types';

export const Card = ({ car }: IMockCar) => {
  return (
    <ContainerCard>
      <figure>
        <img src={car.imageURL} />
      </figure>
      <div>
        <div className='fist'>
          <h2>
            {' '}
            {car.Marca} - {car.Modelo}{' '}
          </h2>
          <div> {car.descrição} </div>
        </div>
        <div className='second'>
          <div className='ballon-name'>
            <span>SL</span>
          </div>
          <span>Silva Luiz</span>
        </div>
        <div className='thirsd'>
          <div className='detail'>
            <span>{car.Km}km</span>
            <span>{car.Ano}</span>
          </div>
          <div className='wrap-price'>
            <span className='price'>
              {car.Preço.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Card;
