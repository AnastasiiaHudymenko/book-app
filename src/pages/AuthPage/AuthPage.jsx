import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import {
  quoteWelcomePage,
  authorWelcomePage,
} from "../../components/data/data";
import QuoteComponent from "../../components/QuoteComponent/QuoteComponent";

import {
  Container,
  Title,
  Decs,
  DecsAuth,
  BcgFon,
  WrapNav,
  StyledLink,
} from "./AuthPage.styled";

const AuthPage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <Container>
      <BcgFon>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Title>Books Reading</Title>

          <Decs>
            Наш додаток Books Reading - ідеальний вибір для всіх любителів книг!
            Тут ви зможете насолоджуватися безліччю захоплюючих книжок,
            отримувати нові знання та занурюватися у світ незабутніх пригод. Не
            зволікайте! Приєднуйтесь до нашої спільноти любителів читання прямо
            зараз!
          </Decs>
        </motion.div>
      </BcgFon>
      <WrapNav>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div style={{ display: isTablet ? "block" : "none" }}>
            <QuoteComponent
              desc={quoteWelcomePage}
              author={authorWelcomePage}
            />
          </div>

          <DecsAuth>
            Уже маєте обліковий запис?{" "}
            <StyledLink to="/login">Увійти</StyledLink>
          </DecsAuth>

          <StyledLink to="/register">Зареєструватися</StyledLink>
        </motion.div>
      </WrapNav>
    </Container>
  );
};

export default AuthPage;
