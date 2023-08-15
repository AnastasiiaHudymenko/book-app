import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
  padding: 16px 32px;
  border-bottom: 1px solid #e6e9f1;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  background-color: var(--secondaryBgColor);
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledWrapIcon = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  border-radius: 100%;
  ::before {
    content: "";
    position: absolute;
    left: 24px;
    width: 33px;
    background-color: #e0e5eb;
    transform: rotate(90deg);
    height: 1px;
  }
`;

export const StyledWrapName = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  border-radius: 100%;
`;

export const Btn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  color: #242a37;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  text-decoration-line: underline;
`;

export const NameUser = styled.p`
  color: #242a37;
  font-size: 14px;
  font-weight: 600;
`;

export const WrapContentNameIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-left: 68px;
`;

export const FullNameUser = styled.p`
  color: #242a37;
  font-size: 14px;
  font-weight: 300;
`;
