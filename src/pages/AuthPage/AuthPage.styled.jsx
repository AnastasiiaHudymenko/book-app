import styled from "styled-components";
import bcgMobile from "../../images/bcgMobile.jpg";
import bcgTablet from "../../images/bcgTablet.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  background-color: var(--mainBgColor);
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const BcgFon = styled.div`
  padding: 32px 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bcgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (min-width: 768px) {
    flex-basis: 60%;
    display: flex;

    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${bcgTablet});
  }
`;

export const WrapNav = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 40%;
    background-color: var(--mainBgColor);
  }
  @media screen and (min-width: 1280px) {
    padding: 0 40px;
  }
`;

export const Title = styled.h1`
  color: var(--whiteColorText);
  font-size: 30px;

  font-family: "Abril Fatface", sans-serif;
  line-height: 38px; /* 190% */

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`;

export const Decs = styled.p`
  color: var(--mainBgColor);

  font-size: 18px;
  font-weight: 500;
`;

export const DecsAuth = styled.p`
  margin-top: 30px;
  color: var(--mainTextColor);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const StyledLink = styled(Link)`
  transition: color 0.9ms ease-in;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
