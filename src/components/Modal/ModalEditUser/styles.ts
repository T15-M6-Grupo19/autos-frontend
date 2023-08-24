import { styled } from "styled-components";

const ModalEditUserDiv = styled.form`
  position: relative;
  top: 0px;
 
  width: 374px;
  height: 100%;
  padding: 18px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: var(--color-WhiteFixed);

  p {
    font-size: 0.9rem;
		font-family: "Inter";
		font-weight: 500;
		font-style: normal;
		line-height: 24px;
		text-decoration: none;
		text-transform: none;
  }

  @media(min-width: 1200px){
    top: 0px;
    width: 550px;
    height: 100%;
  }
`;

const DivForm = styled.div`
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

const SeparateInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media(min-width: 1200px){
    flex-direction: row;
  }
`

const DivFormButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  @media(min-width: 1200px){
    flex-wrap: nowrap;
  }
`

export { ModalEditUserDiv, DivForm, SeparateInputs ,DivFormButton };
