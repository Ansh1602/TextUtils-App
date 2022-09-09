import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch mx-2">
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              name="toggle"
              htmlFor="mode"
              role="switch"
              for="mode"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              DarkMode
            </label>
          </div>
          <div className="form-check form-switch mx-2">
            <input
              onClick={props.blueMode}
              className="form-check-input"
              type="checkbox"
              name="toggle"
              role="switch"
              htmlFor="mode"
              for="mode"
              id="flexSwitchCheckDefault1"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Blue DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // If undefined show error
  aboutText: PropTypes.string,
};

Navbar.defaultProps = { title: "Set title here" };
