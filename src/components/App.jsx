import { Route, Routes } from "react-router-dom";

import AuthPage from "../pages/AuthPage/AuthPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import TrendingPage from "../pages/TraindingPage/TrandingPage";

const App = () => {
  return (
    <AuthPage />
    // <Routes>
    //   <Route path="/" element={<AuthPage />} />
    //   <Route path="/library" element={<LibraryPage />} />
    //   <Route path="/tranding" element={<TrendingPage />} />
    // </Routes>
  );
};

export default App;
