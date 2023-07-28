import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import bcgMobile from "../../images/bcgMobile.jpg";
import bcgTablet from "../../images/bcgTablet.jpg";

export const Conatiner = styled.div`
  background-color: var(--secondaryBgColor);
  height: 95vh;
  text-align: center;
`;

export const WrapForm = styled.div`
  padding: 32px 0;
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${bcgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnGoogle = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-left: 14px;
  padding-right: 36px;
  color: #707375;
  margin: 0 auto;
  margin-bottom: 28px;
  font-size: 16px;

  font-weight: 700;
  line-height: 38px; /* 237.5% */

  background: #f5f7fa;
  box-shadow: 0px 2px 2px 0px rgba(9, 30, 63, 0.15);
`;

export const TitleLabel = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;

  font-weight: 600;
`;

export const Decoration = styled.span`
  color: #f25137;
  font-family: Montserrat;
  font-size: 14px;

  font-weight: 600;
`;
