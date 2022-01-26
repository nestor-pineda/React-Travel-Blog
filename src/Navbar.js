import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Traveler's Blog</Link>
      </h1>

      <div className="links">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/create">Add Travel</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
