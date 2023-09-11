import { styled } from 'styled-components';
import Banner from '../../assets/Banner.png';

const BannerStyle = styled.section`
  height: 600px;
  width: 100%;

  background-position: center;
  background-image: url(${Banner});
  background-size: cover;

  margin: 0 0 15px 0;

  position: relative;
  z-index: 0;

  img {
    height: 100%;
    width: 100%;
  }
`;

const BackgroundGradientStyle = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  z-index: 1;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
`;

const TextStyle = styled.div`
  height: 35%;
  width: 100%;

  margin-top: 60px;

  position: absolute;
  z-index: 1;
  top: 1px;

  flex-direction: column;
  display: flex;
  gap: 20px;

  text-align: center;
  word-spacing: 1px;

  h1,
  h2 {
    color: var(--color-Grey10);
  }

  @media (min-width: 1024px) {
    top: 27%;
  }
`;













// const BannerImageStyle = styled.section`
//   height: 600px;
//   width: 100%;

//   background-position: center;
//   background-image: url(${Banner});
//   background-size: cover;

//   margin: 0 0 15px 0;

//   position: relative;
//   z-index: 0;

//   img {
//     height: 100%;
//     width: 100%;
//   }
// `;

export const BannerColorStyle = styled.section`
  height: 285px;
  width: 100%;

  background-color: var(--color-Brand1);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 80px 0 500px 0;

  position: relative;
  z-index: 0;

  transition: 1s linear;

  @media screen and (min-width: 768px) {
    margin: 80px 0 350px 0;
  }
`;

// const BackgroundGradientStyle = styled.div`
//   height: 100%;
//   width: 100%;

//   position: absolute;
//   top: 0;
//   z-index: 1;

//   background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
// `;

export const SellerDataSquareStyle = styled.div`
  height:  550px;
  width: max(80%, 300px);

  padding: 40px 29px 40px 29px;

  background-color: var(--color-WhiteFixed);

  border-radius: 4px;
  border: 1px solid #868E9680;

  position: absolute;
  top: 75px;

  flex-direction: column;
  align-items: flex-start;
  display: flex;
  gap: 15px;

  z-index: 1;

  transition: 1s linear;

  .descripition{
    color: var(--color-Grey2);

    line-height: 28px;
    font: 400 16px "Inter";
  }

  @media screen and (min-width: 768px) {
    height:  400px;
  }
`;

export const FirstLettersSquareStyle = styled.div`
  height: 104px;
  width: 104px;

  background-color: var(--color-Brand1);
  color: var(--color-WhiteFixed);

  border-radius: 100%;
  border: 1px solid var(--color-WhiteFixed);

  justify-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;

  line-height: 53px;
  font: 500 36px "Inter";
`;

export const AdvertiserStyle = styled.div`
  height: auto;
  width: min(250px, 100%);

  padding-right: 5px;
  border: 1px solid transparent;

  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  display: flex;

  .advertiser_name {
    line-height: 25px;
    font: 600 20px "Lexend";

    color: var(--color-Grey1);
  }

  .advertiser_tag{
    height:  100%;
    width: auto;
    
    padding: 0 10px;

    background-color: #EDEAFD; 

    border-radius: 4px;
    border: 1px solid transparent;

    justify-content: center ;
    flex-direction: row;
    align-items: center;
    display: flex;

    color: #4529E6;

    font: 500 14px "Inter";
  }
`;

// export const TextStyle = styled.div`
//   height: 35%;
//   width: 100%;

//   margin-top: 60px;

//   position: absolute;
//   z-index: 1;
//   top: 1px;

//   flex-direction: column;
//   display: flex;
//   gap: 20px;

//   text-align: center;
//   word-spacing: 1px;

//   h1,
//   h2 {
//     color: var(--color-Grey10);
//   }

//   @media (min-width: 1024px) {
//     top: 27%;
//   }
// `;


export { BannerStyle, BackgroundGradientStyle, TextStyle };
