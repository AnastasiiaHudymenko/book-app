import { Navigate } from "react-router-dom";

const RestictedRoute = ({ component: Component, redirectTo = "/" }) => {
  return false ? <Navigate to={redirectTo} /> : Component;
};

export default RestictedRoute;
