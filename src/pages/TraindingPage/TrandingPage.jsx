import { useMediaQuery } from "react-responsive";
import MyGoal from "../../components/MyGoal/MyGoal";
import ListBookWorkout from "../../components/ListBookWorkout/ListBookWorkout";
import Schedule from "../../components/Schedule/Schedule";
import BtnAdd from "../../components/BtnAdd/BtnAdd";
import { Container } from "../../pages/LibraryPage/LibraryPage.styled";
import { useState } from "react";
import BtnBack from "../../components/BtnBack/BtnBack";
import StarTraiding from "../../components/StartTraiging/StarTraiding";

const TraindingPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [openAddBook, setOpenAddBook] = useState(false);

  const openForm = () => {
    setOpenAddBook(!openAddBook);
  };

  const onClickBtn = () => {
    setOpenAddBook(!openAddBook);
  };
  if (isMobile) {
    return (
      <Container>
        {!openAddBook ? (
          <>
            <MyGoal />
            <ListBookWorkout />
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
