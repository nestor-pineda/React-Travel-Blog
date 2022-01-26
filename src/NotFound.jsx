import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 Not Found</h2>
      <p>The page cannot be found...</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
