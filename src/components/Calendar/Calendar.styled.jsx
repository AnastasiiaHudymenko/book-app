import styled from "styled-components";

export const ContainerMain = styled.div`
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
