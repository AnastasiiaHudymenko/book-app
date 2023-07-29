import { Btn } from "./BtnForm.styled";

const BtnForm = ({ type, text }) => {
  return <Btn type={type}>{text}</Btn>;
};

export default BtnForm;
