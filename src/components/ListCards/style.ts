import { css, styled } from "styled-components";

import { IListCard } from "./types";

const ListCardContainer = styled.ul<IListCard>`
  height: 55vh;
  width: 100%;

  margin: 40px 0;
  padding: 0 20px;

  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 15px;

  overflow-y: auto;

  ${({ view }) => {
    switch (view) {
      default:
      case "allSpace":
        return css`
          background-color: white;

          @media (min-width: 1024px) {
            height: auto;
            width: 100%;

            justify-content: space-evenly;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            display: flex;

            overflow: hidden;
          }
        `;

        case "spaceTwo":
          return css`
              @media (min-width: 1024px) {
                height: auto;
                width: 68vw;
                
                margin: 0px;

                align-items: normal;

                display: grid;
                grid-template-columns: repeat(3, 1fr);

                overflow: hidden;
              } 
          `
    }
  }}


`;

export { ListCardContainer };
