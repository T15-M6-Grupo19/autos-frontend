import { styled } from 'styled-components';

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  }

  .box-handle-desktop {
    display: flex;
    gap: 40px;
    position: relative;
  }

  .divider {
    font-size: 5.6rem;
    color: var(--color-Grey6);

    position: absolute;
    right: 250px;
    top: -19px;
  }
`;
