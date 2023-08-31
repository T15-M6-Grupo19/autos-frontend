
import { ContainerCard } from "./style";
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
