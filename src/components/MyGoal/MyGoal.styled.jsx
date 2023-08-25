import styled from "styled-components";

export const ContainerGoal = styled.div`
  background-color: #fff;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 44px;
    width: 285px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 23px 28px;
  }
`;

export const WrapGoal = styled.div`
  width: 284px;
  height: 60px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 44px;
  }
`;

export const GoalTitle = styled.p`
  color: #fff;

  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const WrapCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const MainWrapCount = styled.div`
  width: 100px;
  text-align: center;
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #f5f7fa;
  box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 60px;
    margin-bottom: 4px;
  }
`;

export const CountTitle = styled.p`
  color: #091e3f;
  font-size: 45px;
  font-weight: 700;
  line-height: 38px; /* 84.444% */
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const DescTitleCount = styled.span`
  color: #898f9f;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
`;
