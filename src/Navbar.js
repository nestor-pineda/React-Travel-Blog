import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">The traveler's Blog</Link>
      </h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Travel</Link>
      </div>
    </nav>
  );
};

export default Navbar;
