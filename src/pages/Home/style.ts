import { styled } from 'styled-components';

const SimulateComponentHeaderStyle = styled.header`
  height: 15vh;
  width: 100%;

  border: 1px solid black;
`;

const MainStructure = styled.main`
  @media (min-width: 1023px) {
    height: 1680px;
    width: 95vw;

    gap: 20px;
    margin: 20px;
    margin-top: 50px;
    display: flex;
  }
`;

const ContainerButtonFilterStyle = styled.div`
  height: 15vh;
  width: 100%;

  margin: 15px 0;

  justify-content: center;
  flex-direction: columns;
  align-items: center;
  display: flex;

  @media (min-width: 1023px) {
    display: none;
  }
`;

export {
  SimulateComponentHeaderStyle,
  ContainerButtonFilterStyle,
  MainStructure,
};
