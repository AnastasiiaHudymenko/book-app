import {
  MdMenuBook,
  MdOutlineSubdirectoryArrowRight,
  MdOutlinedFlag,
} from "react-icons/md";
import {
  WrapContent,
  StepTitle,
  DescStep,
  SubDescStep,
  WrapSubContent,
  Btn,
  List,
  Item,
} from "./LibraryInfoStep.styled";

const LibraryInfoStep = () => {
  return (
    <div>
      <List>
        <Item>
          <StepTitle>Крок 1.</StepTitle>
          <WrapContent>
            <MdMenuBook size={22} fill="#A6ABB9" />
            <DescStep>Створіть особисту бібліотеку</DescStep>
          </WrapContent>
          <WrapSubContent>
            <MdOutlineSubdirectoryArrowRight size={24} fill=" #FF6B08" />
            <SubDescStep>
              Додайте до неї книжки, які маєте намір прочитати.
            </SubDescStep>
          </WrapSubContent>
        </Item>
        <Item isSecondLi>
          <StepTitle>Крок 2.</StepTitle>
          <WrapContent>
            <MdOutlinedFlag size={22} fill="#A6ABB9" />
            <DescStep>Сформуйте своє перше тренування</DescStep>
          </WrapContent>
          <WrapSubContent>
            <MdOutlineSubdirectoryArrowRight size={24} fill=" #FF6B08" />
            <SubDescStep>
              Визначте ціль, оберіть період, розпочинайте тренування.
            </SubDescStep>
          </WrapSubContent>
        </Item>
        <Btn type="button">Ok</Btn>
      </List>
    </div>
  );
};

export default LibraryInfoStep;
