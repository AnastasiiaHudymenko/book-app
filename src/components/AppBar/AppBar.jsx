import { Header } from "./AppBar.styled";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

const AppBar = () => {
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Header>
      <>
        <button onClick={handleClickLogOut} type="botton">
          LogOut
        </button>
        <img src={logo} alt="logo app" />
      </>
    </Header>
  );
};

export default AppBar;
