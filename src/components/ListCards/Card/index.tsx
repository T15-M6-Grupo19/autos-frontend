import { ContainerCard } from "./style";
import { ICar } from "../types";

export const Card = ({ car }: ICar) => {
  return (
    <ContainerCard>
      <figure>
        <img src={car.imageURL} />
      </figure>
      <div>
        <div className="fist">
          <h2> {car.name} </h2>
          <div> {car.description} </div>
        </div>
        <div className="second">
          <div className="ballon-name">
            <span>SL</span>
          </div>
          <span>Silva Luiz</span>
        </div>
        <div className="thirsd">
          <div className="detail">
            <span>Km</span>
            <span>Ano</span>
          </div>
          <div className="wrap-price">
            <span className="price">R$ 00,00</span>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Card;
