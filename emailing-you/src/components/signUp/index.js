import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import { NotificationManager } from "react-notifications";

import { withFirebase } from "../firebase";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  firstName: String(),
  lastName: String(),
  username: String(),
  email: String(),
  password: String(),
  confirmPass: String(),
  isAgree: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (e) => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPass,
    } = this.state;

    this.props.firebase
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("Success\n", authUser);
        this.createNotification("success", "New account created successfully");
        this.createNotification("info", " Please, log in to continue");
        this.setState({ ...INITIAL_STATE });
        setTimeout(() => {
          this.props.history.push(ROUTES.SIGN_IN);
        }, 4000);
      })
      .catch((error) => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  onClick = () => {
    const { isAgree } = this.state;

    this.setState({
      isAgree: !isAgree,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPass,
      isAgree,
      error,
    } = this.state;

    // const isInvalid =
    //   password !== confirmPass ||
    //   password === "" ||
    //   email === "" ||
    //   username === "" ||
    //   firstName === "" ||
    //   lastName === "" ||
    //   isAgree === false;

    return (
      <div
        style={{ width: "100%", height: "89vh" }}
        className="container d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-none d-sm-none d-md-none d-lg-block card w-50 tshadow">
          <div className="card-body">
            <form onSubmit={this.onSubmit} className="row g-3">
              <div className="col-lg-4 col-sm-4 col-xs-4">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-4">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  name="lastName"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. kuntia"
                    className="form-control"
                    id="username"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={this.onChange}
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  onChange={this.onChange}
                  name="email"
                  autoComplete="username"
                  value={email}
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="col-lg-3 col-sm-3 col-xs-3">
                <label htmlFor="password" className="form-label">
                  Pass
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  name="password"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="col-lg-3 col-sm-3 col-xs-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Pass
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPass}
                  autoComplete="new-password"
                  id="confirmPassword"
                  name="confirmPass"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="col-lg-12 col-sm-12 col-xs-12 mt-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="isAgree"
                    value={isAgree}
                    onClick={this.onClick}
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-xs-12 mt-2">
                <button
                  // disabled={isInvalid}
                  className="btn btn-primary"
                  type="submit"
                >
                  Sign Up Now
                </button>
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
        {/* separate */}
        <div
          style={{ width: "70%" }}
          className="d-block d-sm-block d-md-block d-lg-none card tshadow"
        >
          <div className="card-body">
            <form onSubmit={this.onSubmit} className="row g-3">
              <div className="row-md-4 row-sm-4 row-xs-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={this.onChange}
                  name="firstName"
                  required
                />
              </div>
              <div className="row-md-4 row-sm-4 row-xs-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  value={lastName}
                  name="lastName"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="row-md-4 row-sm-4 row-xs-4">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    autoComplete="username"
                    onChange={this.onChange}
                    name="username"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
              <div className="row-md-6 row-sm-6 row-xs-6">
                <label htmlFor="emailRes" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  onChange={this.onChange}
                  name="email"
                  autoComplete="username"
                  value={email}
                  className="form-control"
                  id="emailRes"
                  required
                />
              </div>
              <div className="row-md-3 row-sm-3 row-xs-3">
                <label htmlFor="passwordRes" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={this.onChange}
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  className="form-control"
                  id="passwordRes"
                  required
                />
              </div>
              <div className="row-md-3 row-sm-3 row-xs-3">
                <label htmlFor="confirmPasswordRes" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  onChange={this.onChange}
                  name="confirmPass"
                  autoComplete="new-password"
                  value={confirmPass}
                  className="form-control"
                  id="confirmPasswordRes"
                  required
                />
              </div>
              <div className="row-12 d-flex justify-content-start mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={isAgree}
                    onClick={this.onClick}
                    id="checkBoxRes"
                    required
                  />
                  <label
                    style={{ fontSize: "12px" }}
                    className="form-check-label"
                  >
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div className="row-12 d-flex justify-content-center mt-3">
                <button
                  // disabled={isInvalid}
                  className="btn btn-primary"
                  type="submit"
                >
                  Sign Up Now
                </button>
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  createNotification = (type, message) => {
    switch (type) {
      case "info":
        NotificationManager.info(message, "FYI", 4000);
        break;
      case "success":
        NotificationManager.success(message, "Success", 4000);
        break;
      case "warning":
        NotificationManager.warning(message, "Warning", 4000);
        break;
      case "error":
        NotificationManager.error(message, "Error", 5000, () => {
          alert("callback");
        });
        break;
      default:
        NotificationManager.error(
          "So sorry, I don't know what happened :(",
          "Error",
          4000
        );
    }
  };
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };
