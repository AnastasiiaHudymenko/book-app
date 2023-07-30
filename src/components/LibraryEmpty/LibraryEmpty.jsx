import LibraryForm from "../LibraryForm/LibraryForm";
import BtnBack from "../BtnBack/BtnBack";
import LibraryInfoStep from "../LibraryInfoStep/LibraryInfoStep";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const LibraryEmpty = () => {
  const [isActive, setIsActive] = useState(false);
  const isTablet = useMediaQuery({ minWidth: 768 });

  const handleClickOpen = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {!isTablet && <BtnBack onClickBtn={handleClickOpen} />}
      {isActive ? <LibraryInfoStep /> : <LibraryForm />}
      {isTablet && <LibraryInfoStep />}
    </>
  );
};

export default LibraryEmpty;
