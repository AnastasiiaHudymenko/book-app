import { MdMenuBook } from "react-icons/md";
import {
  List,
  WrapIconContent,
  WrapOthetContentOne,
  WrapOthetContent,
  Desc,
  SubDesc,
  TitleList,
} from "../ListBookMobile/ListBookMobile.styled";
import { Item, WrapList } from "./ListBookWorkout.styled";

const ListBookWorkout = () => {
  return (
    <WrapList>
      <List>
        <Item>
          <WrapIconContent>
            <MdMenuBook size={28} fill="#A6ABB9" />
            <TitleList>...</TitleList>
          </WrapIconContent>
          <WrapOthetContentOne>
            <Desc>Автор:</Desc>
            <SubDesc>-</SubDesc>
          </WrapOthetContentOne>
          <WrapOthetContent>
            <Desc>Рік:</Desc>
            <SubDesc>-</SubDesc>
          </WrapOthetContent>
          <WrapOthetContent>
            <Desc>Стор.:</Desc>
            <SubDesc>-</SubDesc>
          </WrapOthetContent>
        </Item>
      </List>
    </WrapList>
  );
};

export default ListBookWorkout;
