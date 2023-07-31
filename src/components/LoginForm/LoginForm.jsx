import { Formik } from "formik";
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
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <Conatiner>
      <WrapFormComponent>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "" }}
        >
          <StyledForm path={pathname} autoComplete="off">
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
