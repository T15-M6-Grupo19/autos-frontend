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
  top: 45px;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.img`
  width: 78.4vw;
  height: 253px;
`;

export const ContainerAlign = styled.div`

`
