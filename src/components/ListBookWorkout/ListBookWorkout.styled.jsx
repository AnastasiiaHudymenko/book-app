import styled from "styled-components";

export const WrapList = styled.div`
  border-bottom: 1px solid #e0e5eb;
  border-top: 1px solid #e0e5eb;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 300px;
`;

export const Item = styled.li`
  background: #f6f7fb;
  position: relative;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  padding: 20px 20px 28px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 66px;
  }
`;
