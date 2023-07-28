import styled from "styled-components";

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
