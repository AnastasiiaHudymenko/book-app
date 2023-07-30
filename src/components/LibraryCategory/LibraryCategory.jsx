import { useMediaQuery } from "react-responsive";
import ListBookMobile from "../ListBookMobile/ListBookMobile";
import CaptionListCategory from "../CaptionListCategory/CaptionListCategory";

const LibraryCategory = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      {!isTablet && <ListBookMobile />}
      {isTablet && <CaptionListCategory />}
    </div>
  );
};

export default LibraryCategory;
