import { styled } from 'styled-components';

export const ResetFormContainer = styled.form`
  border: 2px solid var(--color-Grey3);
  border-radius: 8px;

  box-shadow: 0 0 5px 2px rgba(0, 0, 255, 0.5);

  margin: 50px 0;

  background-color: transparent;
`;

export const ResetFormBox = styled.div`
  min-height: 300px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  h2 {
    color: var(--color-Grey1);
  }

  .input-wraper {
    width: 100%;
    display: flex;
    flex-direction: column;

    position: relative;

    input {
      height: 40px;
      padding: 1rem;
      border: 2px solid var(--color-Grey3);
      border-radius: 8px;
      outline: none;

      &:focus {
        box-shadow: 0 0 5px 2px rgba(0, 0, 255, 0.5);
      }
    }
  }
  button {
    height: 35px;
    width: 100%;
    background-color: var(--color-Brand1);
    border-radius: 8px;
    color: var(--color-Grey10);

    &:hover {
      box-shadow: 0 0 5px 2px rgba(0, 0, 255, 0.5);
    }
  }
`;

const BaseStyledEye = styled.span`
  position: relative;

  bottom: 28px;
  left: 230px;

  cursor: pointer;
`;

export const ShowPassEye = styled(BaseStyledEye)``;
export const ShowConfirPassEye = styled(BaseStyledEye)``;
