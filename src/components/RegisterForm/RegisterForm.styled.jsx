import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin: 0 auto;
  color: var(--secondaryTextColor);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
`;

export const StyledSpan = styled.span`
  color: var(--mainAccentColor);

  text-decoration-line: underline;
`;
