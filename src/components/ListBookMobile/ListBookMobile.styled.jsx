import styled from "styled-components";

export const Title = styled.h2`
  color: #242a37;
  font-size: 19px;
  font-weight: 600;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 500px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    max-width: 760px;
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  background: #fff;
  position: relative;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  padding: 20px 20px 28px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 66px;
  }
`;

export const WrapIconContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: auto;
  }
`;

export const TitleList = styled.p`
  margin: 0;
  color: #242a37;

  font-size: 12px;

  font-weight: 500;
`;

export const WrapOthetContentOne = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 23px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-left: 0;
    margin-right: 104px;
  }
`;

export const WrapOthetContent = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 23px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-left: 0;
  }
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
  @media screen and (min-width: 768px) {
  }
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

export const BtnAdd = styled.button`
  width: 171px;
  height: 42px;

  border: none;
  background-color: var(--mainAccentColor);
  transform: translateX(-50%);

  margin-left: 50%;
  margin-top: 40px;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export const BtnDelete = styled.button`
  padding: 0;
  top: 0;
  right: 0;

  border: none;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
`;
