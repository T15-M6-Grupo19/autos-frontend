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
    flex-direction: row;
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

export const ContainerNavAdvertiser = styled.nav`
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

      /* display: flex;
      flex-direction: column;
      align-items: center; */

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

export const ContainerNavSeller = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;

  position: fixed;
  top: 0;

  height: 80px;
  width: 100%;

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
    height: 80px;

    right: 0;
    top: 79px;

    .login-link-mobile {
      padding: 12px 20px;
      border-radius: 4px;
      border: 2px transparent solid;
      background-color: transparent;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: var(--color-WhiteFixed);
      transition: ease 0.3s;

      position: fixed;
      top: 5rem;

      display: flex;
      flex-direction: column;
      align-items: center;

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

    .second {
      display: flex;
      flex-direction: row;
      align-items: center;

      font-size: 14px;
      font-family: "Inter";
      font-weight: 500;
      font-style: normal;
      text-decoration: none;
      text-transform: none;

      color: var(--color-Grey2);

      min-width: 200px;
      gap: 10px;
      justify-content: center;

      .ballon-name {
        width: 32px;
        height: 32px;

        background-color: var(--color-Brand1);
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
          color: var(--color-WhiteFixed);
        }
      }
    }
  }

  .box-handle-desktop {
    flex-direction: column;
    align-items: center;
    display: flex;

    position: relative;
    border-left: 2.73px solid var(--color-Grey6);

    padding-left: 25px;

    height: 80px;
    width: 290px;

    .user-desktop {
      padding: 12px 20px;
      padding-top: 25px;

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

      .second {
        flex-direction: row;
        align-items: center;
        display: flex;
      }

      .ballon-name {
        width: 32px;
        height: 32px;

        margin-right: 10px;

        background-color: var(--color-Brand1);
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
          color: var(--color-WhiteFixed);

          font-family: "Inter";
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0em;
          text-align: left;
        }
      }

      .name_profile {
        color: var(--color-Grey2);

        font-family: "Inter";
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;
