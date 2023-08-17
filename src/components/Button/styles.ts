import { iButton } from "./types";

import styled, { css } from "styled-components";

export const StyledButton = styled.button<iButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 48px;

  border: none;

  transition: ease 0.3s;

  ${({ variant }) => {
    switch (variant) {
      default:
      case "primary":
        return css`
          background-color: var(--color-Brand2);
          color: var(--color-WhiteFixed);

          border-radius: 4px;

          font-size: 1.1rem;
          font-family: "Inter";
          font-weight: 700;
          font-style: normal;
          text-decoration: none;
          text-transform: none;

          &:hover {
            background-color: var(--color-Grey1);
          }
        `;
      case "secondary":
        return css`
          background-color: var(--color-WhiteFixed);
          color: var(--color-Grey0);

          border: 2px solid var(--color-Grey4);
          border-radius: 4px;

          font-size: 1rem;
          font-family: "Inter";
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
      case "registerButton":
        return css`
          background-color: var(--color-Brand2);
          color: var(--color-WhiteFixed);

          border-radius: 4px;

          font-size: 1.1rem;
          font-family: "Inter";
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
      case "test":
        return css`
              XXX
              &:hover {
                XXX
              }
        `;
    }
  }}
`;
