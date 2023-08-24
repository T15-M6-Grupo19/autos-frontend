import { iButton } from './types';

import styled, { css } from 'styled-components';

export const StyledButton = styled.button<iButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 48px;

  border: none;

  transition: ease 0.3s;

  ${({ variant, clicked }) => {
    switch (variant) {
      default:
      case 'primary':
        return css`
          background-color: var(--color-Brand2);
          color: var(--color-WhiteFixed);

          border-radius: 4px;

          font-size: 1.1rem;
          font-family: 'Inter';
          font-weight: 700;
          font-style: normal;
          text-decoration: none;
          text-transform: none;

          &:hover {
            background-color: var(--color-Grey1);
          }
        `;
      case 'secondary':
        return css`
          height: 48px;
          width: 160px;

          padding: 12px 20px;
          margin: 60px 0 0 0;

          border-radius: 4px;
          border: 1.5px;

          font: 600 16px 'inter';

          background-color: var(--color-WhiteFixed);
          color: var(--color-Brand1);

          gap: 10px;

          border: 1.5px solid #4529e6;
          &:hover {
            background-color: var(--color-Brand1);
            color: var(--color-WhiteFixed);
          }
        `;
      case 'Editar':
        return css`
          width: 80px;
          height: 38px;

          background-color: transparent;
          border: 2px solid var(--color-Grey1);
          border-radius: 0.25rem;

          color: var(--color-Grey1);

          font-family: Inter;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 600;

          &:hover {
            background-color: var(--color-Brand1);
            border: 2px solid var(--color-Brand1);
            color: var(--color-Grey1);
          }
        `;
      case 'Ver Detalhes':
        return css`
          width: 126px;
          height: 38px;

          background-color: transparent;
          border: 2px solid var(--color-Grey1);
          border-radius: 0.25rem;

          color: var(--color-Grey1);

          font-family: Inter;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 600;

          &:hover {
            background-color: var(--color-Brand1);
            border: 2px solid var(--color-Brand1);
            color: var(--color-Grey1);
          }
        `;
      case 'tipo de conta':
        return css`
          background-color: ${clicked ? '#4529e6' : '#f8f9fa'};
          color: ${clicked ? '#edeafd' : '868e96'};

          border: 2px solid var(--color-Grey4);
          border-radius: 4px;

          font-size: 1rem;
          font-family: 'Inter';
          font-weight: 700;
          font-style: normal;
          text-decoration: none;
          text-transform: none;

          &:hover {
            background-color: var(--color-Brand2);
            color: var(--color-WhiteFixed);
            border: none;
          }
        `;

      case 'registerButton':
        return css`
          background: var(--color-Brand1);

          color: var(--color-WhiteFixed);

          border-radius: 4px;

          font-size: 1.1rem;
          font-family: 'Inter';
          font-weight: 700;
          font-style: normal;
          text-decoration: none;
          text-transform: none;

          &:hover {
            background-color: var(--color-Grey1);
          }

          @media (min-width: 620px) {
            width: 320px;
          }
        `;
      case 'addImgGallery':
        return css`
          background-color: var(--color-Brand4);

          height: 38px;
          width: 315px;

          padding: 4px 0px;

          color: var(--color-Brand1);

          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
        `;
      case 'Disable':
        return css`
        background-color: var(--color-Brand3);

        height: 38px;
        width: 315px;

        padding: 4px 0px;

        border-radius: 4px;

        color: #EDEAFD;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
      `;

    }
  }}
`;
