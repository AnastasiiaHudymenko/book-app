import styled from "styled-components";
import bcgMobile from "../../images/bcgMobile.jpg";
import bcgTablet from "../../images/bcgTablet.jpg";

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
  }
`;
