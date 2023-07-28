import { Decoration, Quote, TitleAuhtor } from "./QuoteComponent.styled";

const QuoteComponent = ({ desc, author }) => {
  return (
    <>
      <Decoration>“</Decoration>
      <Quote>{desc}</Quote>
      <div style={{ position: "relative", marginTop: "44px" }}>
        <TitleAuhtor>{author}</TitleAuhtor>
      </div>
    </>
  );
};

export default QuoteComponent;
