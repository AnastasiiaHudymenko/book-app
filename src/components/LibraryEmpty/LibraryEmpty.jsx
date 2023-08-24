import LibraryForm from "../LibraryForm/LibraryForm";
import BtnBack from "../BtnBack/BtnBack";
import LibraryInfoStep from "../LibraryInfoStep/LibraryInfoStep";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ListBookMobile from "../ListBookMobile/ListBookMobile";
import { useDispatch, useSelector } from "react-redux";

import {
  getUserBook,
  addBook,
  deleteBook,
} from "../../redux/bookApi/operations";

const LibraryEmpty = () => {
  const [isActive, setIsActive] = useState(false);
  const [newBook, setNewBook] = useState([]);
  const isTablet = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();

  const books = useSelector((state) => state?.userBook?.books?.goingToRead);

  useEffect(() => {
    const getBooks = async () => {
      await dispatch(getUserBook());
    };
    getBooks();
  }, [newBook]);

  const addNewBook = async (values) => {
    const res = await dispatch(addBook(values));

    setNewBook(res.payload);
  };

  const handleClickOpen = () => {
    setIsActive(!isActive);
  };

  const deleteBookUser = async (bookId) => {
    await dispatch(deleteBook(bookId));
    await dispatch(getUserBook());
  };
  return (
    <>
      {!isTablet && <BtnBack onClickBtn={handleClickOpen} />}
      {isActive ? (
        <LibraryInfoStep clickBack={handleClickOpen} />
      ) : (
        <div>
          <LibraryForm addNewBook={addNewBook} />
          {books?.length !== 0 ? (
            <ListBookMobile books={books} deleteBookUser={deleteBookUser} />
          ) : (
            isTablet && <LibraryInfoStep />
          )}
        </div>
      )}
    </>
  );
};

export default LibraryEmpty;
