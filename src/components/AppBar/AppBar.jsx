import { Header } from "./AppBar.styled";
import logo from "../../images/logo.png";

const AppBar = () => {
  return (
    <Header>
      <div>
        <img src={logo} alt="logo app" />
      </div>
    </Header>
  );
};

export default AppBar;
