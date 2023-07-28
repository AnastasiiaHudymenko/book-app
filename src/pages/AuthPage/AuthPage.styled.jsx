import styled from "styled-components";
import bcgMobile from "../../images/bcgMobile.jpg";
import bcgTablet from "../../images/bcgTablet.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 95vh;
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
    background-color: var(--secondaryBgColor);
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

export const Quote = styled.p`
  margin-top: -35px;
  font-size: 10px;
  line-height: 1.8;
  text-align: left;
  padding: 0 22px;
  color: var(--secondaryTextColor);
  @media screen and (min-width: 1280px) {
    font-size: 18px;
   
  }

  
}
`;

export const TitleAuhtor = styled.p`
  color: var(--secondaryTextColor);

  ::before {
    content: "";
    background: var(--secondaryTextColor);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 1px;
    bottom: 36px;
    @media screen and (min-width: 1280px) {
      width: 200px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Decoration = styled.span`
  color: #ff6b08;
  text-align: center;
  font-family: Abril Fatface;
  font-size: 69px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
