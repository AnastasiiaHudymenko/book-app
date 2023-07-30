import { List, Item } from "./CaptionListCategory.styled";

const CaptionListCategory = () => {
  return (
    <>
      <List>
        <Item first>Назва книги</Item>
        <Item second>Автор</Item>
        <Item third>Рік</Item>
        <Item>Стор.</Item>
      </List>
    </>
  );
};

export default CaptionListCategory;
