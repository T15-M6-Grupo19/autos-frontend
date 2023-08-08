import { styled } from 'styled-components';

export const ContainerCard = styled.div`
  width: 312px;
  height: 350px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

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

    /* border: 1px solid red; */

    .fist {
      h2 {
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

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .wrap-price {
        justify-content: end;
      }
    }
  }
`;
