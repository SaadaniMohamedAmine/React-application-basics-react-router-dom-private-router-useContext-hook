import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../hooks/authContext";

const Navigate = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          React app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/books">
                Books
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {auth.status ? (
              <React.Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/profile"
                    onClick={auth.login}
                  >
                    Logout
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/login"
                    onClick={auth.login}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/register">
                    Register
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
