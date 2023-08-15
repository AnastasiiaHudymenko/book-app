import { MdMenuBook, MdOutlineHome } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import {
  Header,
  StyledWrapIcon,
  WrapContent,
  Btn,
  StyledWrapName,
  NameUser,
  WrapContentNameIcon,
  FullNameUser,
} from "./AppBar.styled";
import logo from "../../images/logo.png";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggeIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClickLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Header>
      <>
        <img src={logo} alt="logo app" />
        {!isMobile && isLoggeIn && (
          <WrapContentNameIcon>
            <StyledWrapName>
              <NameUser>{name[0]}</NameUser>
            </StyledWrapName>
            <FullNameUser>{name}</FullNameUser>
          </WrapContentNameIcon>
        )}
        {isLoggeIn && (
          <WrapContent>
            <MdMenuBook size={24} fill="#A6ABB9" />
            <StyledWrapIcon>
              <MdOutlineHome size={24} fill="#A6ABB9" />
            </StyledWrapIcon>
            {isMobile && (
              <StyledWrapName>
                <NameUser>{name[0]}</NameUser>
              </StyledWrapName>
            )}

            <Btn onClick={handleClickLogOut} type="botton">
              Вихід
            </Btn>
          </WrapContent>
        )}
      </>
    </Header>
  );
};

export default AppBar;
