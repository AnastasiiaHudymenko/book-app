import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div>
      Hello Auth
      <Link to="/library">
        <button>Link to library</button>
      </Link>
      <Link to="/trainding">
        <button>Link to Trainding</button>
      </Link>
    </div>
  );
};

export default AuthPage;
