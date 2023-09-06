import styled from 'styled-components';

export const ModalContent = styled.div`
  max-width: 374px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  img {
    width: 100%;
    border-radius: 6px;
  }

  @media screen  and (min-width: 768px) {
    max-width: 420px;
  }
  @media screen  and (min-width: 1024px) {
    max-width: 520px;
  }
`;

export const DivForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    
    h2 {
    font-size: 1rem;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: var(--color-Grey1);
    }

    button {
      background: none;
      width: 24px;
      font-size: 18px;
      color: var(--color-Grey4);
    }

`