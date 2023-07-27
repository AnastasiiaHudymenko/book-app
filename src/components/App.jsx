import { Route, Routes } from "react-router-dom";

import AuthPage from "../pages/AuthPage/AuthPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import TraindingPage from "../pages/TraindingPage/TrandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/trainding" element={<TraindingPage />} />
    </Routes>
  );
};

export default App;
