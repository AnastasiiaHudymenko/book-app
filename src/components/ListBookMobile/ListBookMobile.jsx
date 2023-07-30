import { MdMenuBook } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Title,
  Item,
  WrapIconContent,
  TitleList,
  List,
  WrapOthetContent,
  Desc,
  SubDesc,
} from "./ListBookMobile.styled";

const ListBookMobile = () => {
  return (
    <div>
      <Title>Маю намір прочитати</Title>
      <List>
        <Item>
          <WrapIconContent>
            <MdMenuBook size={28} fill="#A6ABB9" />
            <TitleList>
              Scrum. Революционный метод управлениями проектами.
            </TitleList>
          </WrapIconContent>
          <WrapOthetContent>
            <Desc>Автор:</Desc>
            <SubDesc>Джефф Сазерленд</SubDesc>
          </WrapOthetContent>
          <WrapOthetContent>
            <Desc>Рік:</Desc>
            <SubDesc>2014</SubDesc>
          </WrapOthetContent>
          <WrapOthetContent>
            <Desc>Стор.:</Desc>
            <SubDesc>25</SubDesc>
          </WrapOthetContent>
        </Item>
        <Item>
          <WrapIconContent>
            <MdMenuBook size={28} fill="#A6ABB9" />
            <TitleList>
              Scrum. Революционный метод управлениями проектами.
            </TitleList>
          </WrapIconContent>
          <WrapOthetContent>
            <Desc>Автор:</Desc>
            <SubDesc>Джефф Сазерленд</SubDesc>
          </WrapOthetContent>
          <WrapOthetContent>
            <Desc>Рік:</Desc>
            <SubDesc>2014</SubDesc>
          </WrapOthetContent>
          <WrapOthetContent>
            <Desc>Стор.:</Desc>
            <SubDesc>25</SubDesc>
          </WrapOthetContent>
        </Item>
      </List>
      <button type="button">
        <AiOutlinePlus size={24} fill="#fff" />
      </button>
    </div>
  );
};

export default ListBookMobile;
