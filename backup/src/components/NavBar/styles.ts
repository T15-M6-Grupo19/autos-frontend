import { styled } from "styled-components";

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;

  height: 80px;

  border-bottom: 2px solid var(--color-Grey6);

  background-color: var(--color-Grey10);
  padding: 1rem 40px;

  figure img {
    width: 120px;
    height: 30px;
  }

  span img {
    cursor: pointer;
  }

  .box-handle-mobile {
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    background-color: var(--color-Grey10);

    width: 100%;
    height: 180px;

    right: 0;
    top: 79px;

    .login-link-mobile {
      padding: 12px 20px;
      border-radius: 4px;
      border: 2px transparent solid;
      background-color: transparent;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: var(--color-Grey2);
      transition: ease 0.3s;
      &:hover {
        background-color: var(--color-Grey9);
      }
    }

    .register-link-mobile {
      padding: 12px 20px;
      border-radius: 4px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      border: 2px var(--color-Grey4) solid;
      background-color: transparent;
      color: var(--color-Grey0);
      transition: ease 0.3s;
      &:hover {
        background-color: var(--color-Grey1);
        border: 2px var(--color-Grey1) solid;
        color: var(--color-Grey10);
      }
    }
  }

  .box-handle-desktop {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    border-left: 2px solid var(--color-Grey6);
    padding-left: 20px;
    height: 80px;

    .login-link {
      padding: 12px 28px;
      border-radius: 4px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      border: 2px transparent solid;
      background-color: transparent;
      color: var(--color-Grey2);
      transition: ease 0.3s;
      &:hover {
        background-color: var(--color-Grey9);
      }
    }

    .register-link {
      padding: 12px 28px;
      border-radius: 4px;
      border: 2px var(--color-Grey4) solid;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      background-color: transparent;
      color: var(--color-Grey0);
      transition: ease 0.3s;
      &:hover {
        background-color: var(--color-Grey1);
        border: 2px var(--color-Grey1) solid;
        color: var(--color-Grey10);
      }
    }
  }
`;
