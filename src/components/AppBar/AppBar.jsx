import { Header } from "./AppBar.styled";
import logo from "../../images/logo.png";

const AppBar = () => {
  return (
    <Header>
      <>
        <img src={logo} alt="logo app" />
      </>
    </Header>
  );
};

export default AppBar;
