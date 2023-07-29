import { BtnLogin, BtnRegister, WrapBtn } from "./BtnInfoPage.styled";

const BtnInfoPage = () => {
  return (
    <WrapBtn>
      <BtnLogin type="button">Увійти</BtnLogin>
      <BtnRegister type="button">Реєстрація</BtnRegister>
    </WrapBtn>
  );
};

export default BtnInfoPage;
