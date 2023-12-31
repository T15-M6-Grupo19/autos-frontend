import { styled } from 'styled-components';

const PaginationStyle = styled.section`
  height: 120px;
  width: 100%;

  margin: 20px 0;

  flex-direction: column;
  display: flex;

  div {
    width: 100%;
    height: 50%;

    justify-content: center;
    flex-direction: row;
    align-items: center;
    display: flex;
    
    &:hover {
      cursor: pointer;
    }
  
  }

  

  div:nth-child(1) {
    :nth-child(1) {
      color: var(--color-Grey3);

      margin-right: 5px;
    }

    :nth-child(2) {
      color: var(--color-Grey4);
    }
  }

  div:nth-child(2) {
    color: var(--color-Brand2) !important;
  }

  div .Icon {
    padding-top: 4px;
  }

  @media (min-width: 1023px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      width: 150px;
    }
  }
`;

export { PaginationStyle };
