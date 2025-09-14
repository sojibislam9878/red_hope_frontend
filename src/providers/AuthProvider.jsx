import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfiq";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  
  const googleProvider = new GoogleAuthProvider();
  const googleSignUP = () => {
    signInWithPopup(auth, googleProvider);
  };
  const myName = "sojib islam"


  const values = {
    googleSignUP,
    myName,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
