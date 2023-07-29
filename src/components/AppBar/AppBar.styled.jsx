import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  padding: 17px 0;
  padding: 16px 32px;
  border-bottom: 1px solid #e6e9f1;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  background-color: var(--secondaryBgColor);
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
