import { styled } from "styled-components";

const MainStructure = styled.main`
  height: 100%;
  width: 100%;

  background-color: var(--color-Grey8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivStructure = styled.div`
  height: 100%;
  width: 343px;

  margin: 44px 28px 44px 28px;
  border-radius: 4px;
  padding: 22px 28px 22px 28px;

  background-color: var(--color-Grey10);

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 620px){
    width: 411px;
    padding: 44px;
    transition: 1s ease;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    
    label {
      margin-bottom: 10px;
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 400;
      font-style: normal;
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
    }

    .description {
      color: var(--color-Grey3);
      padding: 20px;
      height: 78px;

      font-size: 1.1rem;
      font-family: "Inter";
      font-weight: 400;
      font-style: normal;
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
    }

    p {
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 600;
      font-style: normal;
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
    }
  }
`;

const DivForm = styled.div`
  display: flex;
  gap: 10px;
  max-width: 320px;
  margin-bottom: 10px;
`;

const ModalRegisterSucess = styled.div`
  position: relative;
  top: -140px;
  
  width: 347px;
  height: 287px;
  padding: 18px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: var(--color-WhiteFixed);

  @media(min-width: 620px){
    width: 520px;
    padding: 25px;
    transition: 1s ease;
  }

  h3 {
    font-size: 1rem;
    font-family: "Lexend";
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: var(--color-Grey1);
  }

  p {
    color: var(--color-Grey2);
    font-size: 1rem;
    font-family: "Inter";
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    text-decoration: none;
    text-transform: none;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;

    h3 {
      font-size: 1.2rem;
      font-family: "Lexend";
      font-weight: 500;
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
  }
`;

export { MainStructure, DivStructure, DivForm, ModalRegisterSucess };
