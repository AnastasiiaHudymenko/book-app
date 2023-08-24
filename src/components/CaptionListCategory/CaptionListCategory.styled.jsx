import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  @media screen and (min-width: 768px) {
    max-width: 737px;
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  color: #898f9f;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  padding-right: ${(props) => props.first && "40%"};
  padding-right: ${(props) => props.second && "22%"};
  padding-right: ${(props) => props.third && "9%"};
`;
