import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfiq";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [logedInuser, setLogedInUser] = useState(null)
  
  const googleProvider = new GoogleAuthProvider();
  const googleSignUP = () => {
    signInWithPopup(auth, googleProvider);
  };


  const values = {
    googleSignUP,
    logedInuser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
