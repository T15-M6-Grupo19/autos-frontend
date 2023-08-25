import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: var(--color-Grey8);
  position: relative;
  height: auto;
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
  @media (min-width: 1024px) {
    justify-content:normal;
  }
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
  margin-top: 1094px;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: 47vw;
    margin-left:11vw;
    margin-top: 350px;
  }
`;

export const CarImage = styled.img`
  width: 78.4vw;
  height: 253px;
  @media (min-width: 1024px) {
    width: 27.56vw;
  }
`;

export const ContainerAlign = styled.div`
 @media (min-width: 1024px) {
   display:flex;
   gap:2.9vw;
    
  }
/* flex-direction:column; */
/* flex-wrap:wrap; */

`;

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
  @media (min-width: 1024px) {
    width: 47vw;
    margin-left:11vw;
  }
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
  @media (min-width: 1024px) {
    justify-content: space-between;

    flex-direction: row;
    align-items:center;
  }
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
  @media (min-width: 1024px) {
    width: 47vw;
    margin-left:11vw;
  }
`;

export const DescriptionTitle = styled.h2``;
export const Description = styled.p`
  color: #495057;
`;

export const CarPhotosContainer = styled.div`
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
  @media (min-width: 1024px) {
    width: 27.5vw;
  }
`;

export const CarPhotosTitle = styled.h2``;

export const CarPhotosList = styled.ul`
  display: flex;
  gap: 5.5px;
  flex-wrap: wrap;
`;

export const CarPhotosListItem = styled.li`
  width: 90px;
  height: 90px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CarPhoto = styled.img`
  width: 70px;
  height: 54px;
`;

export const FooterAlign = styled.div`
  margin-top: 1100px;
   @media (min-width: 1024px) {
    margin-top: 400px;
  }
`;

export const UserInfoContainer = styled.div`
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
  align-items: center;
  gap: 28px;
  @media (min-width: 1024px) {
    width: 27.5vw;
  }
`;

export const UserInfoBalloon = styled.h2`
  color: #ffffff;
  background-color: var(--color-Brand1);
  width: 77px;
  height: 77px;
  display: flex;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  border-radius: 155px;
`;

export const UserInfoName = styled.h2``;

export const UserInfoDescription = styled.p`
  color: #495057;
`;
export const UserInfoShowAdsButton = styled.button`
  color: #ffffff;
  background-color: #0b0d0d;
  width: 206px;
  height: 48px;
  border-radius: 4px;
  size: 16px;
`;

export const PhotoAndUserAlign = styled.section`
margin-top:0px;
max-width:auto;
  @media (min-width: 1024px) {
    max-width: 27.5vw;
    margin-top: 333px;
    
  }
`
