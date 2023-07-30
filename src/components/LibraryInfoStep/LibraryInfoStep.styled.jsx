import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 47px;
  background-color: #fff;
  padding: 43px 20px 36px;

  @media screen and (min-width: 768px) {
    max-width: 608px;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  gap: 12px;
`;

export const WrapSubContent = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 33px;
`;

export const StepTitle = styled.p`
  color: #242a37;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
`;

export const DescStep = styled.p`
  color: #242a37;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
`;

export const SubDescStep = styled.p`
  color: #898f9f;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

export const Btn = styled.button`
  padding: 12px 52px;
  border: none;
  background: #ff6b08;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 auto;
`;

export const Item = styled.li`
  margin-bottom: ${(props) => (props.isSecondLi ? "40px" : "20px")};
`;
