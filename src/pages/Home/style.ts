import { styled } from "styled-components";

const HomeMainWrapperStyle = styled.main`
  display: flex;
  width: 100vw;
  width: 100%;
`;
const HomeSubWrapper = styled.div`
  /* display: flex; */
`;

const FilterWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const SimulateComponentHeaderStyle = styled.header`
  height: 15vh;
  width: 100vw;

  border: 1px solid black;
`;

const ContainerButtonFilterStyle = styled.div`
  margin: 15px 0;

  justify-content: center;
  flex-direction: columns;
  align-items: center;
  display: flex;
`;

export {
  SimulateComponentHeaderStyle,
  ContainerButtonFilterStyle,
  HomeMainWrapperStyle,
  HomeSubWrapper,
  FilterWrapper,
};
