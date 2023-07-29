import styled from "styled-components";
import bcgMobile from "../../images/bcgMobile.jpg";
import bcgTablet from "../../images/bcgTablet.jpg";
import bcgDesktop from "../../images/bcgDesktop.jpg";

export const WrapForm = styled.div`
  padding: 32px 0;
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${bcgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bcgTablet});
    padding: 64px 0;
  }
  @media screen and (min-width: 1280px) {
    flex-basis: 47%;

    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bcgDesktop});
  }
`;
