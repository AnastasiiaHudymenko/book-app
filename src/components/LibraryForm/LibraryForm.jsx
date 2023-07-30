import { Formik } from "formik";
import BtnAdd from "../BtnAdd/BtnAdd";
import {
  StyledForm,
  LabelTitle,
  StyledField,
  Label,
  WrapInput,
} from "./LibraryForm.styled";
import { useState } from "react";

const LibraryForm = () => {
  const [isFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const bcg = isFocused ? "#fff" : "#f6f7fb";
  return (
    <Formik initialValues={{ name: "", auhtor: "", year: "", page: "" }}>
      <StyledForm>
        <Label>
          <LabelTitle> Назва книги</LabelTitle>

          <StyledField isFirstInput placeholder="..." type="text" name="name" />
        </Label>
        <WrapInput>
          <Label>
            <LabelTitle>Автор книги</LabelTitle>
            <StyledField
              isFirstInput
              placeholder="..."
              type="text"
              name="auhtor"
            />
          </Label>
          <Label>
            <LabelTitle> Рік випуску</LabelTitle>

            <StyledField placeholder="..." type="text" name="year" />
          </Label>
          <Label>
            <LabelTitle> Кількість сторінок</LabelTitle>

            <StyledField placeholder="..." type="text" name="page" />
          </Label>
        </WrapInput>

        <BtnAdd type="submit" />
      </StyledForm>
    </Formik>
  );
};

export default LibraryForm;
