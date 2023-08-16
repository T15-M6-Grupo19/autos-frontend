// import { ContainerCard } from "./style";

// // import Porshe from "../../../assets/Porshe.svg";

// import { IMockCar } from "../types";

// export const Card = ({ car }: IMockCar) => {
//   return (
//     <ContainerCard>
//       <figure>
//         <img src={car.imageURL} />
//       </figure>
//       <div>
//         <div className="fist">
//           <h2> {car.Marca} </h2>
//           <div> {car.Modelo} </div>
//         </div>
//         <div className="second">
//           <div className="ballon-name">
//             <span>SL</span>
//           </div>
//           <span>Silva Luiz</span>
//         </div>
//         <div className="thirsd">
//           <div className="detail">
//             <span>{car.Km}km</span>
//             <span>{car.Ano}</span>
//           </div>
//           <div className="wrap-price">
//             <span className="price">
//               {car.Preço.toLocaleString("pt-BR", {
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
import { IMockCar } from '../types';
import Button from '../../Button';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Card = ({ car }: IMockCar) => {
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
            {car.Marca} - {car.Modelo}{' '}
          </h2>
          <div> {car.descricao} </div>
        </div>
        <div className='second'>
          <div className='ballon-name'>
            <span>SL</span>
          </div>
          <span>Silva Luiz</span>
        </div>
        <div className='thirsd'>
          <div className='detail'>
            <span>
              {car.Km} <span>KM</span>
            </span>
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