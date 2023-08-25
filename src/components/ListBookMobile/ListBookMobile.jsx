import { MdMenuBook } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import CaptionListCategory from "../CaptionListCategory/CaptionListCategory";
import {
  Title,
  Item,
  WrapIconContent,
  TitleList,
  List,
  WrapOthetContent,
  Desc,
  SubDesc,
  BtnAdd,
  WrapOthetContentOne,
  BtnDelete,
} from "./ListBookMobile.styled";
import { Link } from "react-router-dom";

const ListBookMobile = ({ books, deleteBookUser }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <div style={{ marginTop: "60px" }}>
      <Title>Маю намір прочитати</Title>
      {isTablet && <CaptionListCategory />}
      <List>
        {books?.map((book) => (
          <Item key={book._id}>
            <WrapIconContent>
              <MdMenuBook size={28} fill="#A6ABB9" />
              <TitleList>{book.title}</TitleList>
            </WrapIconContent>
            <WrapOthetContentOne>
              {!isTablet && <Desc>Автор:</Desc>}
              <SubDesc>{book.author}</SubDesc>
            </WrapOthetContentOne>
            <WrapOthetContent>
              {!isTablet && <Desc>Рік:</Desc>}
              <SubDesc>{book.publishYear}</SubDesc>
            </WrapOthetContent>
            <WrapOthetContent>
              {!isTablet && <Desc>Стор.:</Desc>}
              <SubDesc>{book.pagesTotal}</SubDesc>
            </WrapOthetContent>
            <BtnDelete
              onClick={() => deleteBookUser(book._id)}
              aria-label="delete book"
              type="button"
            >
              <LuDelete size={20} fill="rgb(166, 171, 185)" />
            </BtnDelete>
          </Item>
        ))}
      </List>
      <Link to={"/training"}>
        <BtnAdd type="button">Мої тренування</BtnAdd>
      </Link>
    </div>
  );
};

export default ListBookMobile;
