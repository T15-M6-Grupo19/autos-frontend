import { iButtonStyles } from "./types";

import styled, { css } from "styled-components";

export const StyledButton = styled.button<iButtonStyles>`
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

          font-size: 1.6rem;
          font-family: "Inter";
          font-weight: 700;
          font-style: normal;
          text-decoration: none;
          text-transform: none;
          
          &:hover { 
            background-color: var(--color-Grey1)
          }
        `;
      case "secondary":
        return css`
          xxx
          :hover {
           xxx
          }
        `;
    }
  }}
`;
