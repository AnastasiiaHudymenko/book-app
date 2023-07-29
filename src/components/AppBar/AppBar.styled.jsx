import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  padding: 17px 0;
  padding: 16px 32px;
  border-bottom: 1px solid var(--secondaryBgColor);
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  background-color: var(--secondaryBgColor);
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
