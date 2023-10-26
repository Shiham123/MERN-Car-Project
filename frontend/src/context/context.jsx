import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createContext } from 'react';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const logInUserEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const info = {
    googleSignIn,
    createUserEmailPassword,
    logInUserEmailPassword,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
