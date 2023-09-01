import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--color-Grey8);
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: block;
  }
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
    justify-content: normal;
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
    margin-left: 11vw;
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
    margin-left: 11vw;
  }
`;

export const CarInfoText = styled.h2``;

export const CarInfoBalloon = styled.p`
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
    align-items: center;
  }
`;

export const BuyButton = styled.button`
  width: 100px;
  height: 38px;
  border-radius: 4px;
  background-color: var(--color-Brand1);
  color: #ffffff;
  size: 14px;
  font-family: "Inter";
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
    margin-left: 11vw;
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
  max-height: 200px;
  overflow: auto;
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

  margin-top: 20px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 100%;
    margin-top: 20px;
  } 
   @media (min-width: 1024px) {
    margin-top: 45px;
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
  margin-top: 0px;
  max-width: auto;
  @media (min-width: 1024px) {
    max-width: 27.5vw;
    margin-top: 333px;
  }
`;
export const ContainerComments = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;


  margin-top: 985px;
  margin-left: 2vw;


  min-height: 300px;
  width: 93.6vw;

  padding: 36px 26px;

  background-color: var(--color-WhiteFixed);
  border: 1px solid #868e9680;
  border-radius: 4px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    h2 {
      font-family: Lexend;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: var(--color-Grey1);
    }
  }

  @media screen and (min-width: 600px) {
    margin-top: 955px;
  }

  @media screen and (min-width: 1024px) {

    margin: 345px 0 0 11vw; 
    width: 47vw;
  }
  @media screen and (min-width: 1195px) {
    margin: 325px 0 0 11vw; 
  }
`;


export const Comment = styled.li`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;


  div {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    span {
      background-color: var(--color-Random1);
      color: var(--color-WhiteFixed);

      height: 32px;
      width: 32px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 0px;
    }

    p {
      &::after {
        content: "";
        border-radius: 50%;
        height: 0.5rem;
        width: 0.5rem;
        background-color: var(--color-Grey4);
      }
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: var(--color-Grey2);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const ContainerTextAreaComment = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #868e9680;
  border-radius: 4px;

  margin-top: 17px; 
  /* margin-left: 2vw; */


  padding: 26px 36px;

  min-height: 300px;
  width: 93.6vw;

  background-color: var(--color-Grey10);

  .text-area-header {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      background-color: var(--color-Brand1);
      color: var(--color-WhiteFixed);

      height: 32px;
      width: 32px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 0px;
    }
  }

  .text-comment-area {
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 100%;
    height: 160px;
    flex-shrink: 0;

    textarea {
      flex: 1;
      border: 1.5px solid var(--color-Grey7);

      outline: none;

      width: 90%;
      resize: none;
      padding: 13px 0 0 16px;

      color: var(--color-Grey3);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      height: 38px;
      width: 108px;

      padding: 12px 20px;
      border-radius: 4px;

      background-color: var(--color-Brand1);
      color: var(--color-WhiteFixed);
    }

    @media screen and (min-width: 1024px) {
      border: 1.5px solid var(--color-Grey7);
      align-items: end;
      padding: 10px;

      textarea {
        border: none;
        width: 100%;
        padding: 0;
      }
    }
  }

  .text-precoment-option {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    margin-top: 10px;

    span {
      background-color: var(--color-Grey7);
      border-radius: 24px;
      padding-inline: 12px;

      width: fit-content;

      color: var(--color-Grey3);
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 18px 0 0 11vw; 

    width: 47vw;
  }
`;
