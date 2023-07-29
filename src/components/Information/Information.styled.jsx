import styled from "styled-components";

export const Container = styled.div`
  padding: 64px 0 80px 0;
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: #242a37;
  margin: 0 0 48px 0;
  font-family: Abril Fatface;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 111.765% */
`;

export const SubTitle = styled.p`
  color: #242a37;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px; /* 190% */
`;

export const Item = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const DescItem = styled.p`
  color: #898f9f;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
