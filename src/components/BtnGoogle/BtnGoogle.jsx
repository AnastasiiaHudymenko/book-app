import { FcGoogle } from "react-icons/fc";
import { BtnGoogleStyled } from "./BtnGoogle.styled";

const BtnGoogle = () => {
  return (
    <BtnGoogleStyled type="button">
      <FcGoogle size={18} />
      Google
    </BtnGoogleStyled>
  );
};

export default BtnGoogle;
