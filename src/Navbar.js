import { Link } from "react-router-dom";
import { useAuthDispatch, logout, useAuthState } from "./Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const { user } = useAuthState();

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };

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
        <p>
          {user ? (
            <Link to="/" onClick={() => handleLogout()}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
