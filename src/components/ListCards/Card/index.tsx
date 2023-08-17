/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ICar } from "../../../providers/CarContext";
// import { ContainerCard } from "./style";

// interface ICarProps {
//   car: ICar
// }

// export const Card = ({ car }: ICarProps) => {
//   return (
//     <ContainerCard>
//       <figure>
//         <img src={car.imageURL} />
//       </figure>
//       <div>
//         <div className="first">
//           <h2> {car.marca} </h2>
//           <div> {car.modelo} </div>
//         </div>
//         <div className="second">
//           <div className="balloon-name">
//             <span>SL</span>
//           </div>
//           <span>Silva Luiz</span>
//         </div>
//         <div className="third">
//           <div className="detail">
//             <span>{car.km}km</span>
//             <span>{car.ano}</span>
//           </div>
//           <div className="wrap-price">
//             <span className="price">
//               {car.preco.toLocaleString("pt-BR", {
//                 style: "currency",
//                 currency: "BRL",
//               })}
//             </span>
//           </div>
//         </div>
//       </div>
//     </ContainerCard>
//   );
// };

// export default Card;




import { ContainerCard } from './style';
// import { IMockCar } from '../types';
import Button from '../../Button';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface MockCar {
  imageURL: string;
  marca: string;
  modelo: string;
  combustivel: string;
  cor: string;
  ano: number;
  km: number;
  preco: number;
}

export interface IMockCarList {
  listCard: MockCar[];
}

export interface IMockCar {
  car: MockCar;
}

export const Card = ({ car }: IMockCar) => {

  console.table(car)
  const [isProfile, setIsProfile] = useState(false);
  const page = useLocation();
  useEffect(() => {
    page.pathname.split('/')[1] !== '' && setIsProfile(true);

    return;
  }, [page, isProfile]);

  return (
    <ContainerCard>
      <figure>
        <img src={car.imageURL} />
      </figure>
      <div className='box-div'>
        <div className='fist'>
          <h2>
            {' '}
            {car.marca} - {car.modelo}{' '}
          </h2>
          <div> {car.modelo} </div>
        </div>
        <div className='second'>
          <div className='ballon-name'>
            <span>SL</span>
          </div>
          <span>Silva Luiz</span>
        </div>
        {/* <div className='thirsd'>
          <div className='detail'>
            <span>
              {car.km} <span>KM</span>
            </span>
            <span>{car.ano}</span>
          </div>
          <div className='wrap-price'>
            <span className='price'>
              {car.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div> */}
         <div className='thirsd'>
          <div className='detail'>
            <span>
              {car.km} <span>KM</span>
            </span>
            <span>{car.ano}</span>
          </div>
          <div className='wrap-price'>
            <span className='price'>
              {car.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>
        {isProfile ? (
          <div className='fourth'>
            <Button variant='Editar' name={'Editar'} />
            <Button variant='Ver Detalhes' name={'Ver Detalhes'} />
          </div>
        ) : null}
      </div>
    </ContainerCard>
  );
};

export default Card;