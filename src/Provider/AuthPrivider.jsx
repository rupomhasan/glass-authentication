import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Config";

export const AuthContext = createContext(null);

const AuthPrivider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Login and Register social

  const loginMeida = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Email and Passwrod Login

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user LogOut
  const logOutUser = () => {
    return signOut(auth);
  };

  //Observe login
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const authentication = {
    loginMeida,
    createUser,
    loginUser,
    logOutUser,
    user,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthPrivider.propTypes = {
  children: PropTypes.node,
};
export default AuthPrivider;
