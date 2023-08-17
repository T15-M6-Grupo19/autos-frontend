import { css, styled } from "styled-components";
export interface IListCard {
  view: string;
}
const ListCardContainer = styled.ul<IListCard>`
  
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 10px 10px 10px 20px;

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


  @media (max-width: 1023px) {
  
    flex-direction: row;
    flex-wrap: unset;
    overflow-x: auto;

  }
`;

export { ListCardContainer };
