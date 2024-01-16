import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom py-3 container">
      <Link to={"/"}>
        <img src="./Hasanboy logo.png" alt="logo" width={300} />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto fs-4">
        {loggedIn ? (
          <>
            <h3>{user.username}</h3>
            <button className="btn btn-outline-danger mx-3">Log out</button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
