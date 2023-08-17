import { css, styled } from "styled-components";
import { InputProps } from "./types";

const InputStructure = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    font-size: 1rem;
    font-family: "Inter";
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    text-decoration: none;
    text-transform: none;
  }

  p {
    color: var(--color-Alert1);
  }
`;

const StyledInputField = styled.input<InputProps>`
  color: var(--color-Grey3);
  height: 48px;

  padding: 14px;

  border: 1px solid var(--color-Grey7);
  border-radius: 4px;

  font-size: 1rem;
  font-family: "Inter";
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  text-decoration: none;
  text-transform: none;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          width: 140px;
          @media (min-width: 620px) {
            width: 157px;
          }
        `;
      case "secondary":
        return css`
          height: 68px;
        `;
      case "tertiary":
        return css`
              xxx
          `;
    }
  }}
`;


export { InputStructure, StyledInputField };
