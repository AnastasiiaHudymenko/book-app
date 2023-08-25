import BtnBack from "../BtnBack/BtnBack";
import { useNavigate } from "react-router-dom";
import {
  ContainerGoal,
  WrapGoal,
  GoalTitle,
  WrapCount,
  CountContainer,
  CountTitle,
  DescTitleCount,
  MainWrapCount,
} from "./MyGoal.styled";
const MyGoal = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
  };
  return (
    <>
      <BtnBack onClickBtn={onClickBtn} />
      <ContainerGoal>
        <WrapGoal>
          <GoalTitle>Моя мета прочитати</GoalTitle>
        </WrapGoal>
        <WrapCount>
          <MainWrapCount>
            <CountContainer>
              <CountTitle>0</CountTitle>
            </CountContainer>
            <DescTitleCount>Кількість книжок</DescTitleCount>
          </MainWrapCount>

          <MainWrapCount>
            <CountContainer>
              <CountTitle>0</CountTitle>
            </CountContainer>
            <DescTitleCount>Кількість днів</DescTitleCount>
          </MainWrapCount>
        </WrapCount>
      </ContainerGoal>
    </>
  );
};

export default MyGoal;
