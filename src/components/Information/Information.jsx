import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { info, infoHelp } from "../data/data";
import BtnInfoPage from "../BtnInfoPage/BtnInfoPage";
import {
  Container,
  Title,
  SubTitle,
  DescItem,
  Item,
} from "./Information.styled";

const Information = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <Container>
      <Title>Books Reading</Title>
      <SubTitle>Допоможе вам</SubTitle>
      <ul>
        {infoHelp.map(({ desc }, i) => (
          <Item key={i}>
            <IoIosArrowForward fill="var(--mainAccentColor)" />
            <DescItem>{desc}</DescItem>
          </Item>
        ))}
      </ul>
      <SubTitle>Також ви зможете </SubTitle>
      <ul>
        {info.map(({ desc }, i) => (
          <Item key={i}>
            <IoIosArrowForward fill="var(--mainAccentColor)" />
            <DescItem>{desc}</DescItem>
          </Item>
        ))}
      </ul>
      {!isTablet && <BtnInfoPage />}
    </Container>
  );
};

export default Information;
