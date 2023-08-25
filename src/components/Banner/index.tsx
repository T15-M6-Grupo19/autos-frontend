import { useContext } from "react";
import Button from "../Button";
import {
  AdvertiserStyle,
  BackgroundGradientStyle,
  BannerColorStyle,
  BannerStyle,
  FirstLettersSquareStyle,
  SellerDataSquareStyle,
  TextStyle,
} from "./style";
import { CarContext } from "../../providers/CarContext";
import { ModalCreate } from "../ModalCreate";

export const Banner = () => {
  return (
    <BannerStyle>
      <BackgroundGradientStyle>
        <TextStyle>
          <h1 className="textHeading5500">Motor Shop</h1>
          <h2 className="textBody2500">
            A melhor plataforma de anúncios de carros do país
          </h2>
        </TextStyle>
      </BackgroundGradientStyle>
    </BannerStyle>
  );
};

export const BannerColor = ({
  name,
  account_type,
}: {
  name: string;
  account_type: string;
}) => {
  const { openCreateModal, setOpenCreateModal, getNameCharacters } =
    useContext(CarContext);

  return (
    <BannerColorStyle>
      <SellerDataSquareStyle>
        <FirstLettersSquareStyle>
          {getNameCharacters(name)}
        </FirstLettersSquareStyle>
        <AdvertiserStyle>
          <h2 className="advertiser_name ">{name}</h2>
          <div className="advertiser_tag ">{account_type}</div>
        </AdvertiserStyle>
        <p className="descripition">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          excepturi neque suscipit sapiente odio omnis labore rerum officia
          sequi assumenda vero aliquid, nemo fugiat placeat.
        </p>
        <Button
          onClick={() => setOpenCreateModal(true)}
          name={"Criar anuncio"}
          variant="secondary"
        />
      </SellerDataSquareStyle>
    </BannerColorStyle>
  );
};
