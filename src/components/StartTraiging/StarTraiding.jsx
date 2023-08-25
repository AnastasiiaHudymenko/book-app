import { WrapGoal, GoalTitle } from "./StarTraiding.styled";
import Calendar from "../Calendar/Calendar";

const StarTraiding = () => {
  return (
    <div>
      <WrapGoal>
        <GoalTitle>Моє тренування</GoalTitle>
      </WrapGoal>
      <Calendar />
    </div>
  );
};

export default StarTraiding;
