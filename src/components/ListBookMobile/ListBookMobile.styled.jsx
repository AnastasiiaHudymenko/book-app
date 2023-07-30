import styled from "styled-components";

export const Title = styled.h2`
  color: #242a37;
  font-size: 19px;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  padding: 20px 20px 28px;
`;

export const WrapIconContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const TitleList = styled.p`
  margin: 0;
  color: #242a37;

  font-size: 12px;

  font-weight: 500;
`;

export const WrapOthetContent = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 23px;
  margin-bottom: 14px;
`;

export const Desc = styled.p`
  margin: 0;
  min-width: 41px;
  color: #898f9f;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
`;

export const SubDesc = styled.p`
  margin: 0;
  color: #242a37;
  font-size: 12px;
  font-weight: 500;
`;

export const Btn = styled.button`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;

  background-color: #ff6b08;
  border: none;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  cursor: pointer;
`;
