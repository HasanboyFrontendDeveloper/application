import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../slice/auth";
import { removeItem } from "../helpers/persistance-storage";
import logo from '../img/Hasanboy logo.png'

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom py-3">
      <Link to={"/"}>
        <img src={logo} alt="logo" width={300} />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto fs-4">
        {loggedIn ? (
          <>
            <h3>{user.username}</h3>
            <button
              onClick={logoutHandler}
              className="btn btn-outline-danger mx-3"
            >
              Log out
            </button>
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
