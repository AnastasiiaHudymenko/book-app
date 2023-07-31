import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  getRefreshToken,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const getRefresh = useSelector(getRefreshToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    getRefresh,
  };
};
