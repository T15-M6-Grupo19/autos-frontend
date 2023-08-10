import { styled } from 'styled-components';

export const ContainerCard = styled.div`
  width: 312px;
  height: 350px;

  display: flex;
  flex-direction: column;
  gap: 1rem;



  transition: 1s linear;

  cursor: pointer;

  figure {
    width: 312px;
    height: 152px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-Grey7);

    img {
      width: 262px;
      height: 150px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    color: var(--color-Grey2);
    font-family: "Inter";
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    text-transform: none;

    .fist {
      h2 {
        font-size: 16px;
        font-family: "Lexend";
        font-weight: 600;
        font-style: normal;
        text-decoration: none;
        text-transform: none;

        color: var(--color-Grey1);
      }

      div {
        display: block;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        position: relative;
        max-height: 2.4rem;
        margin-right: -1rem;
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
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

    .thirsd {
      display: flex;
      flex-direction: row;

      justify-content: space-between;

      margin-top: 10px;

      .detail {
        display: flex;
        flex-direction: row;

        span {
          width: 50px;
          height: 30px;

          border-radius: 4px;

          background-color: var(--color-Brand4);
          color: var(--color-Brand2);

          font-size: 14px;
          font-family: "Inter";
          font-weight: 500;
          font-style: normal;
          text-decoration: none;
          text-transform: none;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .wrap-price {
        justify-content: end;

        .price{
          font-family: 'Lexend';
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;

          color: var(--color-Grey1);
        }
      }
    }
  }

  &:hover img{
    animation: ClickImage 1s linear both;

  }
  &:hover figure{
    border: 1px solid var(--color-Brand2);
    overflow: hidden;
  }

  &:not(:hover) img{
    animation: NotCLickImage 1s linear both;

  }

  @keyframes ClickImage {
    0%{
      transform: scale(1)
    }
    100%{
      transform: scale(1.2);
    }
  }

  @keyframes NotCLickImage {
    0%{
      transform: scale(1.5)
    }
    100%{
      transform: scale(0.9)

    }
  }
`;
