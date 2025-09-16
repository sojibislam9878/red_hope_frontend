import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfiq";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(false);
  
  const googleProvider = new GoogleAuthProvider();
  const googleSignUP = () => {
    signInWithPopup(auth, googleProvider);
  };

  const facebookProvider = new FacebookAuthProvider()
  const facebookSingUP = () => {
    signInWithPopup(auth, facebookProvider)
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogedInUser(user);
      }
      setAuthLoading(false);
    });
    return () => unsubcribe();
  }, []);

  const logout = () => {
    setLogedInUser(null);
    signOut(auth);
  };

  const values = {
    googleSignUP,
    facebookSingUP,
    logedInUser,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
