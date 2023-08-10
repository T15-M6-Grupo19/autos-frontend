import { styled } from "styled-components";
import Banner from "../../assets/Banner.png";

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

export { BannerStyle, BackgroundGradientStyle, TextStyle };
