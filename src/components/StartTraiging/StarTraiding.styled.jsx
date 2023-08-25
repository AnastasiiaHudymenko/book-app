import styled from "styled-components";

export const WrapGoal = styled.div`
  width: 284px;
  height: 60px;
  margin: 0 auto;
  margin-top: 20px;
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
