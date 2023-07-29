import styled from "styled-components";

export const WrapBtn = styled.div`
  display: flex;
  gap: 20px;
`;

const Btn = `
width: 130px;
text-align: center;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
border: none;
 cursor: pointer;
 padding: 12px 0;

`;

export const BtnLogin = styled.button`
  ${Btn}
  border: 1px solid #000;
  background-color: transparent;
  color: black;
`;

export const BtnRegister = styled.button`
  ${Btn}
  background: #FF6B08;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
`;
