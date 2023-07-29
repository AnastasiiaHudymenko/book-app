import {
  Decoration,
  Quote,
  TitleAuhtor,
  Container,
} from "./QuoteComponent.styled";

const QuoteComponent = ({ desc, author, path }) => {
  const isMainPage = path === "/";

  return (
    <Container>
      <Decoration>“</Decoration>
      <Quote isMainPage={isMainPage}>{desc}</Quote>
      <div>
        <TitleAuhtor isMainPage={isMainPage}>{author}</TitleAuhtor>
      </div>
    </Container>
  );
};

export default QuoteComponent;
