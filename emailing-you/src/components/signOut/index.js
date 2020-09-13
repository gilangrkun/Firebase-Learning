import React from "react";
import { withFirebase } from "../firebase";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { NotificationManager } from "react-notifications";

const LogOutButton = ({ isColor, firebase }) => {
  const history = useHistory();

  const handleLogOut = (e) => {
    firebase
      .signOut()
      .then((res) => {
        createNotification("success", "You're log out now. Uhh so sad! :(");
        setTimeout(() => {
          history.push(ROUTES.LANDING);
        }, 1000);
      })
      .catch((error) => {
        createNotification("error", error.message);
      });

    e.preventDefault();
  };

  return isColor === true ? (
    <button
      className="btn btn-sm btn-outline-light"
      type="button"
      onClick={handleLogOut}
    >
      <strong>Log Out</strong>
    </button>
  ) : (
    <button
      className="btn btn-sm btn-primary"
      type="button"
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
};

const createNotification = (type, message) => {
  switch (type) {
    case "info":
      NotificationManager.info(message, "FYI", 3000);
      break;
    case "success":
      NotificationManager.success(message, "Success", 3000);
      break;
    case "warning":
      NotificationManager.warning(message, "Warning", 3000);
      break;
    case "error":
      NotificationManager.error(message, "Error", 4000, () => {
        alert("callback");
      });
      break;
    default:
      NotificationManager.error(
        "So sorry, I don't know what happened :(",
        "Error",
        3000
      );
  }
};

export default withFirebase(LogOutButton);
