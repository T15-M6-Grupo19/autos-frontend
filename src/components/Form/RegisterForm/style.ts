import { styled } from "styled-components";

const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
    
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

    .description {
      color: var(--color-Grey3);
      padding: 20px;
      height: 78px;

      font-size: 1.1rem;
      font-family: "Inter";
      font-weight: 400;
      font-style: normal;
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
    }

    p {
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 600;
      font-style: normal;
      line-height: 24px;
      text-decoration: none;
      text-transform: none;
    }
`;
const DivForm = styled.div`
  display: flex;
  gap: 10px;
  max-width: 320px;
  margin-bottom: 10px;
`;

export {FormComponent, DivForm}