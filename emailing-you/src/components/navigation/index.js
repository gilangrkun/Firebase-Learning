import React from "react";
import { Link } from "react-router-dom";

import LogOutButton from "../signOut";
import * as ROUTES from "../../constants/routes";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => {
  return (
    <nav
      style={{ height: "7vh" }}
      className="p-0 navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs navbar navbar-dark bg-primary"
    >
      <div className="container">
        <div className="col-xs-6 col-sm-6 col-lg-6 d-flex justify-content-start align-items-center">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-envelope-open-fill text-warning"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
          </svg>
          <div>
            <Link className="ml-2 navbar-brand" to={ROUTES.LANDING}>
              <strong>Emailing You</strong>
            </Link>
          </div>
          <div className="d-none d-sm-block">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={ROUTES.HOME}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={ROUTES.ACCOUNT}
                >
                  Account
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={ROUTES.ADMIN}
                >
                  Admin
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          <ul className="d-none d-sm-block navbar-nav">
            <li className="nav-item">
              <LogOutButton isColor={true} />
            </li>
          </ul>
          {/* Example split danger button */}
          <div className="d-block d-sm-none btn-group">
            <Link to={ROUTES.ACCOUNT}>
              <button type="button" className="btn btn-sm btn-outline-light">
                Username
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-sm btn-outline-light dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li>
                <Link
                  className="dropdown-item disabled"
                  aria-disabled="true"
                  to="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item disabled"
                  aria-disabled="true"
                  to="#"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <LogOutButton isColor={false} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavigationNonAuth = () => {
  return (
    <nav
      style={{ height: "7vh" }}
      className="p-0 navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs navbar navbar-dark bg-primary"
    >
      <div className="container">
        <div className="col-xs-6 col-sm-6 col-lg-6 d-flex justify-content-start align-items-center">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-envelope-open-fill text-warning"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
          </svg>
          <div>
            <Link className="ml-2 navbar-brand" to={ROUTES.LANDING}>
              <strong>Emailing You</strong>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          <ul className="d-none d-sm-block navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to={ROUTES.SIGN_IN}
              >
                <button type="button" className="btn btn-outline-light btn-sm">
                  <strong>Log In</strong>
                </button>
              </Link>
            </li>
          </ul>
          {/* Example split danger button */}
          <div className="d-block d-sm-none btn-group">
            <Link to={ROUTES.SIGN_IN}>
              <button type="button" className="btn btn-sm btn-outline-light">
                Log In
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-sm btn-outline-light dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li>
                <Link className="dropdown-item" to={ROUTES.SIGN_UP}>
                  Sign Up?
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
