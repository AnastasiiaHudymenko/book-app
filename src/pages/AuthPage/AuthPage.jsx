import { Link } from "react-router-dom";
import { Container, Title, Decs, DecsAuth } from "./AuthPage.styled";

const AuthPage = () => {
  return (
    <Container>
      <Title>Books Reading</Title>
      <Decs>
        Наш додаток Books Reading - ідеальний вибір для всіх любителів книг! Тут
        ви зможете насолоджуватися безліччю захоплюючих книжок, отримувати нові
        знання та занурюватися у світ незабутніх пригод. Не зволікайте!
        Приєднуйтесь до нашої спільноти любителів читання прямо зараз!
      </Decs>
      <DecsAuth>
        Уже маєте обліковий запис? <Link to="/login">Увійти</Link>
      </DecsAuth>
      <Link to="/register">Зареєструватися</Link>
    </Container>
  );
};

export default AuthPage;
