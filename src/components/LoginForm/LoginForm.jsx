import { Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import { quoteLoginPage, authorLoginPage } from "../../components/data/data";
import QuoteComponent from "../QuoteComponent/QuoteComponent";
import BtnForm from "../BtnForm/BtnForm";
import WrapFormComponent from "../WrapFormComponent/WrapFormComponent";
import BtnGoogle from "../BtnGoogle/BtnGoogle";

import {
  Conatiner,
  TitleLabel,
  Decoration,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledLink,
} from "./Login.styled";

const LoginForm = () => {
  const { pathname } = useLocation();

  return (
    <Conatiner>
      <WrapFormComponent>
        <Formik initialValues={{ email: "", password: "" }}>
          <StyledForm autoComplete="off">
            <BtnGoogle />
            <StyledLabel>
              <TitleLabel>
                Електронна адреса <Decoration>*</Decoration>
              </TitleLabel>
              <StyledField
                placeholder="your@email.com"
                type="email"
                name="email"
              />
            </StyledLabel>
            <StyledLabel>
              <TitleLabel>
                Пароль <Decoration>*</Decoration>
              </TitleLabel>
              <StyledField
                placeholder="Пароль"
                type="password"
                name="password"
              />
            </StyledLabel>
            <BtnForm type="submit" text="Увійти" />

            <StyledLink to="/register">Реєстрація</StyledLink>
          </StyledForm>
        </Formik>
      </WrapFormComponent>

      <QuoteComponent
        path={pathname}
        author={authorLoginPage}
        desc={quoteLoginPage}
      />
    </Conatiner>
  );
};

export default LoginForm;
