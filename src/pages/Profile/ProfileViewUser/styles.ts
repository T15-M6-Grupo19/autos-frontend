import { styled } from "styled-components";

const MainStructure = styled.main`
  @media (min-width: 1023px) {
    height: auto;
    width: 90vw;

    gap: 20px;
    padding: 10px 0;
    margin: 0 auto;

    display: flex;
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h2 {
    color: var(--color-Grey1);
  }
`;

export { MainStructure, NotFoundContainer };
