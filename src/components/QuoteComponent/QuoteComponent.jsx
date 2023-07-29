import { Decoration, Quote, TitleAuhtor } from "./QuoteComponent.styled";

const QuoteComponent = ({ desc, author, path }) => {
  const isMainPage = path === "/";
  console.log(isMainPage);

  return (
    <>
      <Decoration>“</Decoration>
      <Quote isMainPage={isMainPage}>{desc}</Quote>
      <div>
        <TitleAuhtor isMainPage={isMainPage}>{author}</TitleAuhtor>
      </div>
    </>
  );
};

export default QuoteComponent;
