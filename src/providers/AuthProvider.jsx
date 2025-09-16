import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfiq";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [userData, setUserData]=useState(null)
  const [logedInUser, setLogedInUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(false);
  
  useEffect(() => {
    const signupUser = async () => {
      if (logedInUser) {
        const userData = {
          firstName: logedInUser?.displayName,
          lastName: "",
          email: logedInUser?.email,
          photo: logedInUser?.photoURL,
          phone: "",
          provider: logedInUser?.providerData[0]?.providerId,
          terms: true,
        };
        
        try {
          const res = await axios.post(
            "http://localhost:3000/social-login",
            userData
          );
          setUserData(res.data.user);
        } catch (err) {
          console.log(err.response?.data || "Signup failed");
        }
      }
    };

    signupUser();
  }, [logedInUser]); 
  
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
    setUserData(null);
    signOut(auth);
  };

  const values = {
    googleSignUP,
    facebookSingUP,
    userData,
    setLogedInUser,
    setUserData,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
