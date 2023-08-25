import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: var(--color-Grey8);
  position: relative;
`;

export const BlueBackground = styled.div`
  height: 516px;
  width: 100%;
  background-color: var(--color-Brand1);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

export const SectionBackground = styled.section`
  height: 600px;
`;

export const CarImageContainer = styled.div`
  height: 355px;
  width: 93.6vw;
  background-color: var(--color-WhiteFixed);
  border-radius: 4px;
  border: 1px solid #868e9680;
  margin-top: 400px;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.img`
  width: 78.4vw;
  height: 253px;
`;

export const ContainerAlign = styled.div``;

export const CarInfoContainer = styled.div`
  height: auto;
  width: 93.6vw;
  background-color: var(--color-WhiteFixed);
  border-radius: 4px;
  border: 1px solid #868e9680;
  margin-top: 17px;
  display: flex;
  z-index: 1;
  padding: 28px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CarInfoText = styled.h2``;

export const CarInfoBalloon = styled.text`
  width: 70px;
  height: 30px;
  padding: 0 5px;

  width: fit-content;

  border-radius: 4px;

  background-color: var(--color-Brand4);
  color: var(--color-Brand2);

  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  text-transform: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarInfoBalloonAlign = styled.div`
  display: flex;
  gap: 20px;
`;

export const CarPrice = styled.p``;

export const CarBallonPriceAlign = styled.div`
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BuyButton = styled.button`
  width: 100px;
  height: 38px;
  border-radius: 4px;
  background-color: var(--color-Brand1);
  color: #ffffff;
  size: 14px;
`;

export const DescriptionContainer = styled.div`
  height: auto;
  width: 93.6vw;
  background-color: var(--color-WhiteFixed);
  border-radius: 4px;
  border: 1px solid #868e9680;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 28px;
  gap: 32px;
  box-sizing: border-box;
`;

export const DescriptionTitle = styled.h2``;
export const Description = styled.p`
  color: #495057;
`;


