import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const RestictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestictedRoute;
