import styled from 'styled-components';

export const StyledModal = styled.div`
  .modal-background {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
  }

  .modal-container {
    width: 450px;
    height: 550px;
    background-color: white;
    border-style: none;
    color: black;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    font-family: "Inter";
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    overflow-y: auto;
    border-radius: 0.5rem;
  }

  input, select {
    padding: 0.5rem;
    color: var(--color-Grey3);
    border: 1px solid;
    border-radius: 5px;
    font-weight: 200;
  }

  .delete-modal-div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .div-teste {
    display: flex;
    gap: 1rem;
  }

  h4 {
    padding: 1rem;
  }

  .div-filha {
    display: flex;
    flex-direction: column;
    width: 50%;
  }



  .addImgGal {
    width: 100%;
  }

  .div-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  .div-buttons > button {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    border-radius: 0.3rem;
  }

  .close-button {

    background-color: white;
    font-size: 18px;
    color: var(--color-Grey4);

  }

  .create-button {
    background-color: var(--color-Brand3);
    color: white;
  }
`;
