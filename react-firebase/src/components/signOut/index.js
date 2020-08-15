import React from "react";
import { withFirebase } from "../firebase";

const LogOutButton = ({ firebase, isColor }) =>
  isColor === true ? (
    <button
      className="btn btn-sm btn-outline-light"
      type="button"
      onClick={firebase.signOut}
    >
      <strong>Log Out</strong>
    </button>
  ) : (
    <button
      className="btn btn-sm btn-primary"
      type="button"
      onClick={firebase.signOut}
    >
      Log Out
    </button>
  );

export default withFirebase(LogOutButton);
