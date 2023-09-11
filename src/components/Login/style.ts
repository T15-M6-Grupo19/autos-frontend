import { styled } from 'styled-components';

export const ContainerAlign = styled.div`
  box-sizing: border-box;
  width: 97.9%;
  @media (min-width: 1023px) {
    display: flex;
    justify-content: center;
  }
`;

export const LoginContainer = styled.div`
  box-sizing: border-box;
  top: 0;
  background-color: black;
  background-color: var(--color-Grey10);
  width: 95vw;
  height: 592px;
  margin-left: 2.5vw;
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  margin-bottom: 71px;
  padding-top: 44px;
  padding-left: 28px;
  box-sizing: border-box;
  @media (min-width: 1023px) {
    width: 412px;
  }
`;

export const LoginContainerTitle = styled.div`
  box-sizing: border-box;
`;

export const EmailLabel = styled.p`
  color: var(--color-Grey1);
  font-size: var(--input-label);
  margin-top: 32px;
  box-sizing: border-box;
`;

export const EmailInput = styled.input`
  margin-top: 8px;
  width: 75vw;
  max-width: 471px;
  height: 48px;
  box-sizing: border-box;
  padding: 16px;
  border: solid 2px var(--color-Grey7);
  border-radius: 4px;
  @media (min-width: 1023px) {
    width: 315px;
  }
`;

export const PasswordLabel = styled.p`
  margin-top: 44px;
  color: var(--color-Grey1);
  font-size: var(--input-label);
  box-sizing: border-box;
`;

export const PasswordInput = styled.input`
  margin-top: 8px;
  width: 75vw;
  max-width: 471px;
  height: 48px;
  box-sizing: border-box;
  padding: 16px;
  border: solid 2px var(--color-Grey7);
  border-radius: 4px;
  box-sizing: border-box;
  @media (min-width: 1023px) {
    width: 315px;
  }
`;

export const ForgetPassword = styled.a`
  margin-top: 9px;
  color: var(--color-Grey2);
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
  cursor: pointer;
`;
export const ForgetPasswordAlign = styled.div`
  height: 24px;
  display: flex;
  justify-content: flex-end;
  width: 74vw;
  max-width: 471px;
  box-sizing: border-box;
  @media (min-width: 1023px) {
    width: 315px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
  width: 230px;
  height: 48px;
  width: 75vw;
  max-width: 471px;
  border: none;
  box-sizing: border-box;

  background-color: var(--color-Brand2);
  color: var(--color-WhiteFixed);

  font-size: 1.6rem;
  font-family: 'Inter';
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;

  &:hover {
    background-color: var(--color-Grey1);
  }
  @media (min-width: 1023px) {
    width: 315px;
  }
`;

export const TextAccount = styled.p`
  color: var(--color-Grey2);
  margin-top: 24px;
  box-sizing: border-box;
`;

export const TextAlign = styled.div`
  display: flex;
  width: 74vw;
  max-width: 471px;
  justify-content: space-around;
  box-sizing: border-box;
  @media (min-width: 1023px) {
    width: 315px;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
  width: 230px;
  height: 48px;
  width: 75vw;
  max-width: 471px;
  background-color: white;
  border: solid 2px var(--color-Grey4);
  box-sizing: border-box;

  /* color: var(--color-Gray0); */

  font-size: 1.6rem;
  font-family: 'Inter';
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;

  &:hover {
    /* background-color: var(--color-Grey10); */
  }
  @media (min-width: 1023px) {
    width: 315px;
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
`;
