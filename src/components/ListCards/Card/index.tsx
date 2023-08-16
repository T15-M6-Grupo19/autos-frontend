import { ICar } from "../../../providers/CarContext";
import { ContainerCard } from "./style";

interface ICarProps {
  car: ICar
}

export const Card = ({ car }: ICarProps) => {
  return (
    <ContainerCard>
      <figure>
        <img src={car.imageURL} />
      </figure>
      <div>
        <div className="fist">
          <h2> {car.marca} </h2>
          <div> {car.modelo} </div>
        </div>
        <div className="second">
          <div className="ballon-name">
            <span>SL</span>
          </div>
          <span>Silva Luiz</span>
        </div>
        <div className="thirsd">
          <div className="detail">
            <span>{car.km}km</span>
            <span>{car.ano}</span>
          </div>
          <div className="wrap-price">
            <span className="price">
              {car.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Card;
