import { styled } from "styled-components";

const ListCardContainer = styled.ul`
  
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 1023px) {
  
    flex-direction: row;
    flex-wrap: unset;
    overflow-x: auto;

  }
`;

export { ListCardContainer };
