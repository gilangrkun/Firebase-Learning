import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../firebase";

import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: String(),
  password: String(),
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (e) => {
    const { email, password } = this.state;

    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Success\n", res);
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div
        style={{ width: "100%", height: "89vh" }}
        className="container d-flex flex-column justify-content-center align-items-center"
      >
        <div
          style={{ width: "30%" }}
          className="d-none d-sm-none d-md-none d-lg-block card pr-4 pl-4 tshadow"
        >
          <div className="card-body m-1 mb-0 pb-0">
            <form className="mb-2" onSubmit={this.onSubmit}>
              <div className="mb-3 row">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="Your Email"
                  aria-label="email"
                  name="email"
                  value={email}
                  autoComplete="username"
                />
              </div>

              <div className="mb-4 row">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Your Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-4 row">
                <button type="submit" className="btn btn-primary">
                  <strong>Log In</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* separate */}
        <div
          style={{ width: "40%" }}
          className="d-none d-sm-none d-md-block d-lg-none card pr-4 pl-4 tshadow"
        >
          <div className="card-body m-1 mb-0 pb-0">
            <form className="mb-2" onSubmit={this.onSubmit}>
              <div className="mb-3 row">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="Your Email"
                  aria-label="email"
                  name="email"
                  value={email}
                  autoComplete="username"
                />
              </div>

              <div className="mb-4 row">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Your Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-4 row">
                <button type="submit" className="btn btn-primary">
                  <strong>Log In</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* separate */}
        <div
          style={{ width: "60%" }}
          className="d-none d-sm-block d-md-none card pr-4 pl-4 tshadow"
        >
          <div className="card-body m-1 mb-0 pb-0">
            <form className="mb-2" onSubmit={this.onSubmit}>
              <div className="mb-3 row">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="Your Email"
                  aria-label="email"
                  name="email"
                  value={email}
                  autoComplete="username"
                />
              </div>

              <div className="mb-4 row">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Your Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-4 row">
                <button type="submit" className="btn btn-primary">
                  <strong>Log In</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* separate */}
        <div
          style={{ width: "70%" }}
          className="d-block d-sm-none card pr-2 pl-2 tshadow"
        >
          <div className="card-body m-1 mb-0 pb-0">
            <form className="mb-2" onSubmit={this.onSubmit}>
              <div className="mb-3 row">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="Your Email"
                  aria-label="email"
                  name="email"
                  value={email}
                  autoComplete="username"
                />
              </div>

              <div className="mb-4 row">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Your Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-4 row">
                <button type="submit" className="btn btn-primary">
                  <strong>Log In</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-2">
          <p>
            Don't have an account? Please{" "}
            <NavLink to={ROUTES.SIGN_UP}>
              <strong>SignUp</strong>
            </NavLink>
            .
          </p>
        </div>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
