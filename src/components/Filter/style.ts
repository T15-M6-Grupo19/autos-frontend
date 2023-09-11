import { styled } from "styled-components";

const FilterCard = styled.aside`
  height: 98%;
  width: 22vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  ul {
    margin-left: 20px;
  }

  li {
    
      font-size: 1.1rem;
      font-family: "Lexend";
      font-weight: 500;
      font-style: normal;
      color: var(--color-Grey3);
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
      cursor: pointer;
    
  }

  .kmAndPrice {
    width: 14vw;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.85rem;
      font-family: "Lexend";
      font-weight: 500;
      font-style: normal;
      color: var(--color-Grey3);
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export { FilterCard };