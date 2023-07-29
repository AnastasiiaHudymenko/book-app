import { Formik } from "formik";
import WrapFormComponent from "../WrapFormComponent/WrapFormComponent";
import BtnForm from "../BtnForm/BtnForm";
import BtnGoogle from "../BtnGoogle/BtnGoogle";
import Information from "../Information/Information";
import {
  StyledForm,
  StyledLabel,
  StyledField,
  TitleLabel,
  Decoration,
} from "../LoginForm/Login.styled";
import { StyledLink, StyledSpan, Container } from "./RegisterForm.styled";

const RegisterForm = () => {
  return (
    <Container>
      <WrapFormComponent>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirm: "" }}
        >
          <StyledForm autoComplete="off">
            <BtnGoogle />
            <StyledLabel>
              <TitleLabel>
                Ім'я <Decoration>*</Decoration>
              </TitleLabel>
              <StyledField placeholder="Ваше ім'я" type="text" name="name" />
            </StyledLabel>
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
            <StyledLabel>
              <TitleLabel>
                Підтвердити пароль <Decoration>*</Decoration>
              </TitleLabel>
              <StyledField
                placeholder="Підтвердити пароль"
                type="password"
                name="confirm"
              />
            </StyledLabel>
            <BtnForm type="submit" text="Зареєструватися" />

            <StyledLink to="/login">
              Вже з нами?<StyledSpan> Увійти</StyledSpan>
            </StyledLink>
          </StyledForm>
        </Formik>
      </WrapFormComponent>
      <Information />
    </Container>
  );
};

export default RegisterForm;
