import { styled } from "styled-components";

const ListCardContainer = styled.ul`
  height: 55vh;
  width: 100%;

  margin: 40px 0;
  padding: 0 20px;

  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 15px;

  overflow-y: auto;

  @media (min-width: 1024px) {
    height: auto;
    width: 68vw;
    margin: 0px;

    align-items: normal;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    overflow: hidden;
  }
`;

export { ListCardContainer };
