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
    top: 0;
    left: 0;
  }

  .modal-container {
    width: 360px;
    height: 500px;
    background-color: white;
    border-style: none;
    color: black;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 5px 5px;
    overflow-y: auto;
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 5px 5px 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    height: 80%;
    justify-content: space-between;
    border: 100px;
  }

  input,
  select {
    padding: 0.5rem;
    background-color: var(--grey-1);
    width: 300px;
    border: 1px solid;
    border-radius: 5px;
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
  }

  h4 {
    padding: 1rem;
  }

  .div-filha {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .div-filha > input {
    width: 90%;
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
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
`;
