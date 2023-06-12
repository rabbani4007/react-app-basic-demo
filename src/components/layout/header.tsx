import React from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../App";
const Header = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse">
          {/* Brand/logo */}
          <a className="navbar-brand" href="/">
            <img src="/mgr-logo.png" alt="logo" style={{ width: "25px" }} />
          </a>
          <NavLink className="navbar-brand" to="/">
            My React Demo App
          </NavLink>
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
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/news"
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/examples"
                >
                  Examples
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Apps
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink
                    className="dropdown-item"
                    to="/news"
                    activeClassName="active"
                  >
                    News
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/weather"
                    activeClassName="active"
                  >
                    Weather
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/quiz"
                    activeClassName="active"
                  >
                    Quiz
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink
                    className="dropdown-item"
                    to="/login"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/register"
                    activeClassName="active"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    activeClassName="active"
                    to="/search"
                  >
                    Search
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <span style={{ color: "#fff" }}>Rabbani</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
