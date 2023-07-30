import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    align-items: end;
  }
`;

export const WrapInput = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    width: 100%;
  }
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    gap: 16px;
    margin-left: 16px;
    margin-right: 48px;
  }
`;

export const Label = styled.label`
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    width: 100%;
  }
`;

export const LabelTitle = styled.p`
  color: #898f9f;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledField = styled(Field)`
  border: 1px solid #a6abb9;
  background: #f6f7fb;
  padding-left: 12px;
  min-height: 42px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.isFirstInput ? "336px" : "")};
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    width: ${(props) => (props.isFirstInput ? "300px" : "")};
  }
`;
