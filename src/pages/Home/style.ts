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

const MainStructure = styled.main`
       
     @media(min-width: 1023px){
          height: 1680px;
          width: 95vw;
     
          gap: 20px;
          margin: 20px;
          margin-top: 50px;
          display: flex;
     }
     
`

const ContainerButtonFilterStyle = styled.div`
      height: 15vh;
      widht: 100vw;
      
      margin: 15px 0;

     justify-content: center;
     flex-direction: columns;
     align-items: center;
     display: flex;

     @media(min-width: 1023px){
          display: none;
     }
`

export { ContainerButtonFilterStyle, MainStructure }


