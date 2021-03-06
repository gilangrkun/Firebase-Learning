import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  /**
   * Create New USER
   */
  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  /**
   * Create Login USER
   */
  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  /**
   * Create SignOut USER
   */
  signOut = () => this.auth.signOut();

  /**
   * Create Password RESET
   */
  sendPasswordResetEmail = (email) => this.auth.sendPasswordResetEmail(email);

  /**
   * Edit Password USER
   */
  updatePassword = (password) => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
