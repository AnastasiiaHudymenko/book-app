import { BsArrowLeft } from "react-icons/bs";
import { Btn } from "./BtnBack.styled";

const BtnBack = ({ onClickBtn }) => {
  return (
    <Btn onClick={() => onClickBtn()} type="button">
      <BsArrowLeft size={18} fill="var(--mainAccentColor)" />
    </Btn>
  );
};
export default BtnBack;
