import styled from "styled-components";

export const Quote = styled.p`
  margin-top: -35px;
  font-size: ${(props) => (props.isMainPage ? "10px" : "13px")}; 
  line-height: 1.8;
  text-align: ${(props) => (props.isMainPage ? "left" : "center")}; 
  padding: 0 22px;
  color: ${(props) =>
    props.isMainPage ? "var(--secondaryTextColor)" : "var(--mainTextColor)"} ;
    
  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.isMainPage ? "12px" : "24px")};
    width: ${(props) => (props.isMainPage ? "" : "526px")};
    margin: ${(props) => (props.isMainPage ? "" : "auto")}; 
   }

   

  @media screen and (min-width: 1280px) {
    font-size: 18px;
   }
}
`;

export const TitleAuhtor = styled.p`
  color: var(--secondaryTextColor);
  position: relative;

  ::before {
    content: "";
    background: var(--secondaryTextColor);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 1px;
    top: -6px;
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Decoration = styled.span`
  color: var(--mainAccentColor);
  text-align: center;
  font-family: Abril Fatface;
  font-size: 69px;
  font-weight: 400;
`;
