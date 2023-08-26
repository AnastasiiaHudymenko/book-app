import { useMediaQuery } from "react-responsive";
import MyGoal from "../../components/MyGoal/MyGoal";
import ListBookWorkout from "../../components/ListBookWorkout/ListBookWorkout";
import Schedule from "../../components/Schedule/Schedule";
import BtnAdd from "../../components/BtnAdd/BtnAdd";
import { Container } from "../../pages/LibraryPage/LibraryPage.styled";
import { useState } from "react";
import BtnBack from "../../components/BtnBack/BtnBack";
import StarTraiding from "../../components/StartTraiging/StarTraiding";
import ListBookMobile from "../../components/ListBookMobile/ListBookMobile";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getUserBook } from "../../redux/bookApi/operations";

const TraindingPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [openAddBook, setOpenAddBook] = useState(false);
  const currentlyBooks = useSelector(
    (state) => state.userBook?.books?.currentlyReading
  );
  const dispatch = useDispatch();

  const openForm = () => {
    setOpenAddBook(!openAddBook);
  };

  const onClickBtn = () => {
    setOpenAddBook(!openAddBook);
  };

  const deleteBookUser = async (bookId) => {
    console.log(bookId);
    await dispatch(deleteBook(bookId));
    await dispatch(getUserBook());
  };
  if (isMobile) {
    return (
      <Container>
        {!openAddBook ? (
          <>
            <MyGoal />
            {currentlyBooks?.length !== 0 ? (
              <ListBookMobile
                deleteBookUser={deleteBookUser}
                books={currentlyBooks}
              />
            ) : (
              <ListBookWorkout />
            )}

            <Schedule />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BtnAdd openForm={openForm} type="button" />
            </div>
          </>
        ) : (
          <>
            <BtnBack onClickBtn={onClickBtn} />
            <StarTraiding />
          </>
        )}
      </Container>
    );
  }
  return (
    <Container>
      <MyGoal />
    </Container>
  );
};

export default TraindingPage;
