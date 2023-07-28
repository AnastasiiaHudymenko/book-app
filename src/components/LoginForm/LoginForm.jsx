import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <Formik initialValues={{ email: "", password: "" }}>
        <Form autoComplete="off">
          <button type="button">Google</button>
          <label>
            <p>
              Електронна адреса <span>*</span>
            </p>
            <Field placeholder="your@email.com" type="email" name="email" />
          </label>
          <label>
            <p>
              Пароль <span>*</span>
            </p>
            <Field placeholder="Пароль" type="password" name="password" />
          </label>
          <button type="submit">Увійти</button>
          <Link to="/register">Реєстрація</Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
