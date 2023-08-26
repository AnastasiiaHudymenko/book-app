import styled from "styled-components";

export const ContainerMainForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const WrapCalendarInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 5px;
  width: 280px;
  height: 42px;
  border: 1px solid #a6abb9;
  background: #f6f7fb;
`;

export const WrapCalendarPosition = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
`;

export const TitleInputCalendar = styled.p`
  color: #a6abb9;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const WrapContent = styled.div`
  display: flex;
  gap: 5px;
`;

export const WrapSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 42px;
  padding: 0 5px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset;
`;

export const TitleSelect = styled.p`
  color: #a6abb9;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const ListSelect = styled.ul`
  position: absolute;
  z-index: 999;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  background: #fff;
  width: 100%;
  top: 44px;
  box-shadow: 0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset;
  left: 0;
`;

export const ItemSelect = styled.li`
  border-bottom: 1px solid #cccccc29;
  padding: 8px 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cccccc38;
  }
`;

export const TitleList = styled.p`
  color: #a6abb9;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;
