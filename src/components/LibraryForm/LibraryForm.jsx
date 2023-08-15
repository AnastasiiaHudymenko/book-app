import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/bookApi/operations";
import BtnAdd from "../BtnAdd/BtnAdd";
import {
  StyledForm,
  LabelTitle,
  StyledField,
  Label,
  WrapInput,
} from "./LibraryForm.styled";

const LibraryForm = () => {
  const [isFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSubmit = (values) => {
    dispatch(addBook(values));
  };

  const bcg = isFocused ? "#fff" : "#f6f7fb";
  return (
    <Formik
      initialValues={{ title: "", author: "", publishYear: "", pagesTotal: "" }}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label>
          <LabelTitle> Назва книги</LabelTitle>

          <StyledField
            isFirstInput
            placeholder="..."
            type="text"
            name="title"
          />
        </Label>
        <WrapInput>
          <Label>
            <LabelTitle>Автор книги</LabelTitle>
            <StyledField
              isFirstInput
              placeholder="..."
              type="text"
              name="author"
            />
          </Label>
          <Label>
            <LabelTitle> Рік випуску</LabelTitle>

            <StyledField placeholder="..." type="text" name="publishYear" />
          </Label>
          <Label>
            <LabelTitle> Кількість сторінок</LabelTitle>

            <StyledField placeholder="..." type="text" name="pagesTotal" />
          </Label>
        </WrapInput>

        <BtnAdd type="submit" />
      </StyledForm>
    </Formik>
  );
};

export default LibraryForm;
