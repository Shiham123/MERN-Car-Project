import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const info = {
    googleSignIn,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
