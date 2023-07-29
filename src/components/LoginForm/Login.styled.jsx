import styled from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

export const Conatiner = styled.div`
  background-color: var(--mainBgColor);
  height: 95vh;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    background-color: #fff;
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
  }
`;

export const StyledLabel = styled.label`
  width: 98%;
`;

export const StyledField = styled(Field)`
  border: none;
  width: 98%;
  min-height: 42px;
  padding-left: 8px;
  background: #f5f7fa;
  box-shadow: var(--boxShadowInput);
`;

export const TitleLabel = styled.p`
  color: var(--whiteColorText);
  text-align: left;
  font-size: 14px;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    color: #898f9f;
    font-weight: 500;
  }
`;

export const Decoration = styled.span`
  color: #f25137;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  margin: 0 auto;
  color: var(--mainAccentColor);
  font-size: 13px;
  font-weight: 500;
`;
