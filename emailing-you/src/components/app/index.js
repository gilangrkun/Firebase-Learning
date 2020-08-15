import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "../firebase";

import Navigation from "../navigation";
import LandingPage from "../landing";
import SignUpPage from "../signUp";
import SignInPage from "../signIn";
import PasswordForgetPage from "../passwordForget";
import HomePage from "../home";
import AccountPage from "../account";
import AdminPage from "../admin";

import * as ROUTES from "../../constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount = () => {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  };

  componentWillUnmount = () => {
    this.listener();
  };

  render() {
    const { authUser } = this.state;

    return (
      <Router>
        <div>
          <Navigation authUser={authUser} />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <div className="bg-light text-dark">
            <div
              className="container d-flex justify-content-center align-items-center"
              style={{ height: "4vh" }}
            >
              <p
                className="d-none d-sm-block text-dark m-0"
                style={{ fontSize: "10px" }}
              >
                <strong>©2020 KUNTIA. All rights reserved.</strong>
              </p>
              {/* separate */}
              <p
                className="d-block d-sm-none text-dark m-0"
                style={{ fontSize: "9px" }}
              >
                <strong>©2020 KUNTIA. All rights reserved.</strong>
              </p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
