import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import {
  Container,
  Title,
  Decs,
  DecsAuth,
  BcgFon,
  WrapNav,
  Quote,
  Decoration,
  TitleAuhtor,
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
            <Decoration>“</Decoration>
            <Quote>
              Є тільки один спосіб дізнатися, що таке справжнє щастя - це сісти
              в крісло і зануритися в чудовий світ книжок. Вони надають нам
              необмежені крила, піднімаючи нас в небеса, і дозволяють зазирнути
              в глибини самих себе. Книги збагачують наше життя мудрістю
              поколінь, дарують нам безліч емоцій - радість, смуток,
              вдумливість. Вони стають нашими найкращими друзями у тих моментах,
              коли нам самотньо, і у той час, коли ми прагнемо знайти відповіді
              на складні питання. Читання - це магія, яка здатна змінити наше
              бачення світу і надати змогу кожному з нас стати кращою версією
              самого себе.
            </Quote>
            <div style={{ position: "relative", marginTop: "44px" }}>
              <TitleAuhtor>Рай Бредбері</TitleAuhtor>
            </div>
          </div>

          <DecsAuth>
            Уже маєте обліковий запис?{" "}
            <StyledLink to="/login">Увійти</StyledLink>
          </DecsAuth>

          <StyledLink to="/register">Зареєструватися</StyledLink>
        </motion.div>
      </WrapNav>
    </Container>)



}

export default AuthPage;