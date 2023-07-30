import styled from "styled-components";

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  color: #898f9f;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  padding-right: ${(props) => props.first && "276px"};
  padding-right: ${(props) => props.second && "169px"};
  padding-right: ${(props) => props.third && "40px"};
`;
