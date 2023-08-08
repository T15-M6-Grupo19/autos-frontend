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
          :hover {
            background-color: var(--color-Brand3);
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
