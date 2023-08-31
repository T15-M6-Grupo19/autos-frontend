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

import { ContainerCard } from "./style";
// import { IMockCar } from '../types';
import Button from "../../Button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Ferrari from "../../../assets/Ferrari.svg";

export interface MockCar {
  brand: string;
  model: string;
  fuel: string;
  color: string;
  year: number;
  kilometers: number;
  price: number;
  photos: Iphotos[];
}

export interface Iphotos {
  id: string;
  photo_url: string;
}

export interface IMockCarList {
  listCard: MockCar[];
}

export interface IMockCar {
  car: MockCar;
  isOwner: boolean;
}

export const Card = ({ car, isOwner }: IMockCar) => {
  const [isProfile, setIsProfile] = useState(false);
  const page = useLocation();

  useEffect(() => {
    if (
      page.pathname.split("/")[1] === "profile" &&
      !page.pathname.split("/")[2]
    ) {
      setIsProfile(true);
    }

    return;
  }, [page, isProfile]);
  
  
  return (
    <ContainerCard>
      <figure>
        <img src={car.photos ? car.photos[0]?.photo_url : Ferrari} />
      </figure>
      <div className="box-div">
        <div className="fist">
          <h2>
            {" "}
            {car.brand} - {car.model}{" "}
          </h2>
          <div> {car.model} </div>
        </div>
        <div className="second">
          <div className="ballon-name">
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
        <div className="thirsd">
          <div className="detail">
            <span>
              {car.kilometers} <span>KM</span>
            </span>
            <span>{car.year}</span>
          </div>
          <div className="wrap-price">
            <span className="price">
              {car.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
        {isOwner ? (
          <div className="fourth">
            <Button variant="Editar" name={"Editar"} />
            <Button variant="Ver Detalhes" name={"Ver Detalhes"} />
          </div>
        ) : null}
      </div>
    </ContainerCard>
  );
};

export default Card;
