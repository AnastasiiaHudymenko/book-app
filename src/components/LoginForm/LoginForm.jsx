import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { quoteLoginPage, authorLoginPage } from "../../components/data/data";
import QuoteComponent from "../QuoteComponent/QuoteComponent";
import {
  Conatiner,
  WrapForm,
  BtnGoogle,
  TitleLabel,
  Decoration,
  StyledForm,
} from "./Login.styled";

const LoginForm = () => {
  return (
    <Conatiner>
      <WrapForm>
        <Formik initialValues={{ email: "", password: "" }}>
          <StyledForm autoComplete="off">
            <BtnGoogle type="button">
              <FcGoogle size={18} />
              Google
            </BtnGoogle>
            <label>
              <TitleLabel>
                Електронна адреса <Decoration>*</Decoration>
              </TitleLabel>
              <Field placeholder="your@email.com" type="email" name="email" />
            </label>
            <label>
              <TitleLabel>
                Пароль <Decoration>*</Decoration>
              </TitleLabel>
              <Field placeholder="Пароль" type="password" name="password" />
            </label>
            <button type="submit">Увійти</button>
            <Link to="/register">Реєстрація</Link>
          </StyledForm>
        </Formik>
      </WrapForm>

      <QuoteComponent author={authorLoginPage} desc={quoteLoginPage} />
    </Conatiner>
  );
};

export default LoginForm;
