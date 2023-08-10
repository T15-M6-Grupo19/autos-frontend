import { styled } from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  background-color: var(--color-Grey0);

  p {
    color: var(--color-WhiteFixed);
    font: 400 0.575rem "Inter";
  }

  a {
    min-width: 53px;
    height: 50px;

    display: grid;
    place-items: center center;

    background-color: var(--color-Grey1);
  }

  @media (min-width: 620px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 60px;

    width: 100%;
    height: 140px;
  }
`;
