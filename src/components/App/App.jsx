import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "../../pages/AuthPage/AuthPage";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import LibraryPage from "../../pages/LibraryPage/LibraryPage";
import TraindingPage from "../../pages/TraindingPage/TrandingPage";
import RestictedRoute from "../RestictedRoute/RestictedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthPage />} />

        <Route path="/register" element={<RegisterForm />}>
          <Route
            path="/register"
            element={
              <RestictedRoute
                redirectTo="/library"
                component={<LibraryPage />}
              />
            }
          />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/library" element={<LibraryPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
