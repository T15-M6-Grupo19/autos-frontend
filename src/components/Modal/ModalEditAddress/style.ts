import { styled } from "styled-components";


export const ModalContainerStyle = styled.form`
     width: 98vw;
     min-height: 500px;

     padding: 12px 15px;
    
     border-radius: 8px;
     border: 1px solid green;

     background-color: #FFFFFF;
 
     flex-direction: column;
     display: flex;
     gap: 20px;

     font-family: "Lexend";
     font-size: 16px;
     font-weight: 500;
     line-height: 20px;
     
     @media screen and (min-width: 768px) {
          width: 505px;

     }

`

export const HeaderModalStyle = styled.div`
     width: 100%;
     height: 50px;

     margin: 0 auto;

     border: 1px solid transparent;

     background-color: #FFFFFF;
     color: black;


     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;

     
     button{
          font-size: 24px;

          background-color: transparent;
          color: #ADB5BD;
     }
`

export const SpaceToTwoInputsStyle = styled.div`
     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     div{
          width: 45%;
     }
`

export const SpaceToButtonsStyle = styled.div`
     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     
     :first-child{
          border-color: transparent;

          background-color: #DEE2E6;
     }
     button{
          width: 45%;
     }
`