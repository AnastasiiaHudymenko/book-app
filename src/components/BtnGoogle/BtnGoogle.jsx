import { FcGoogle } from "react-icons/fc";
import { BtnGoogleStyled } from "./BtnGoogle.styled";

const BtnGoogle = ({ registerGoogle }) => {
  return (
    <BtnGoogleStyled type="button" onClick={() => registerGoogle()}>
      <FcGoogle size={18} />
      Google
    </BtnGoogleStyled>
  );
};

export default BtnGoogle;
