import { useMediaQuery } from "react-responsive";
import MyGoal from "../../components/MyGoal/MyGoal";
import MyWorkout from "../../components/MyWorkOut/MyWorkout";
import ListBookWorkout from "../../components/ListBookWorkout/ListBookWorkout";
import Schedule from "../../components/Schedule/Schedule";
import BtnAdd from "../../components/BtnAdd/BtnAdd";
import { Container } from "../../pages/LibraryPage/LibraryPage.styled";
import { useState } from "react";

const TraindingPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [openAddBook, setOpenAddBook] = useState(false);
  if (isMobile) {
    return (
      <Container>
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
          <BtnAdd type="button" />
        </div>
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
