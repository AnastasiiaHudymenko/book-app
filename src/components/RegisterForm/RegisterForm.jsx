import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "", confirm: "" }}
      >
        <Form autoComplete="off">
          <button type="button">Google</button>
          <label>
            <p>
              Ім'я <span>*</span>
            </p>
            <Field placeholder="Ваше ім'я" type="text" name="name" />
          </label>
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
          <label>
            <p>
              Підтвердити пароль <span>*</span>
            </p>
            <Field
              placeholder="Підтвердити пароль"
              type="password"
              name="confirm"
            />
          </label>
          <button type="submit">Зареєструватися</button>
          <Link to="/login">
            <p>
              Вже з нами?<span> Увійти</span>
            </p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
