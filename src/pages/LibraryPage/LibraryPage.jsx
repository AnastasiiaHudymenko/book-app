import LibraryEmpty from "../../components/LibraryEmpty/LibraryEmpty";
import LibraryCategory from "../../components/LibraryCategory/LibraryCategory";
import { Container } from "./LibraryPage.styled";

const LibraryPage = () => {
  return (
    <Container>
      <LibraryEmpty />
      <LibraryCategory />
    </Container>
  );
};

export default LibraryPage;
