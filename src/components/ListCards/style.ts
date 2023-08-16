import { styled } from "styled-components";

const ListCardContainer = styled.ul`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;


  @media (max-width: 1022px) {
  
    flex-direction: row;
    flex-wrap: unset;
    overflow-x: auto;

  }
`;

export { ListCardContainer };
