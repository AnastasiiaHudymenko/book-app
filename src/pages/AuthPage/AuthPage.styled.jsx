import styled from "styled-components";
import bcgMobile from "../../images/bcgMobile.jpg";

export const Container = styled.div`
  padding: 32px 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bcgMobile});
  height: 100vh;
  background-size: cover;
  background-position: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: var(--whiteColorText);
  font-size: 30px;

  font-family: "Abril Fatface", sans-serif;
  line-height: 38px; /* 190% */
`;

export const Decs = styled.p`
  color: var(--whiteColorText);

  font-size: 18px;
  font-weight: 500;
`;

export const DecsAuth = styled.p`
  color: var(--whiteColorText);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
