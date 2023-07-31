import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "../../pages/AuthPage/AuthPage";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import LibraryPage from "../../pages/LibraryPage/LibraryPage";
import TraindingPage from "../../pages/TraindingPage/TrandingPage";
import RestictedRoute from "../RestictedRoute/RestictedRoute";
import { PrivateRoute } from "../PrivateRouter/PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, getRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshUser({ sid: getRefresh }));
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthPage />} />
        <Route
          path="/login"
          element={
            <RestictedRoute redirectTo="/library" component={<LoginForm />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestictedRoute
              redirectTo="/library"
              component={<RegisterForm />}
            />
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute redirectTo="/login" component={<LibraryPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
