import { Btn } from "./BtnAdd.styled";

const BtnAdd = ({ type, openForm }) => {
  return (
    <Btn onClick={openForm} type={type}>
      Додати
    </Btn>
  );
};

export default BtnAdd;
