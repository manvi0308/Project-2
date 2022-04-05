import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="TopContainer">
      <div className="Navbar topNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue font-white fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://files.codingninjas.in/new-logo-03-11984.svg"
                width="140"
                height="60"
                alt="Logo"
                className="logo"
              />
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown outside-list-items">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Data Structures and Algorithms
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Competitive Programming
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Interview Preparation
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Web Development
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Analytics and Data Science
                      </a>
                    </li>{" "}
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Android Development
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Career Camp Freshers
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Career Camp Professionals
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown  outside-list-items">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mock Interviews
                  </a>
                </li>
                <li className="nav-item dropdown  outside-list-items">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Community
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Events
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Blogs
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Placement Prep
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Placement Cell
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Campus Ninja
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown  outside-list-items">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Practice
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Contest
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Guided Paths{" "}
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Code Problems
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Interview Experiences
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Mock Tests
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown  outside-list-items">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Career Camp
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Professionals
                      </a>
                    </li>
                    <li className="inside-list-items">
                      <a className="dropdown-item inside-links" href="#">
                        Freshers
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown  outside-list-items">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
              <button className="loginButton">Login</button>
              <button className="enrolButton">Enrol Now</button>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
