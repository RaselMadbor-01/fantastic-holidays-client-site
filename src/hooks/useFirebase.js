import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/Login/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]=useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
      setIsLoading(true);
    return signInWithPopup(auth, provider)
  

  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const googleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("clicked")
        setError("");
        setUser({})
        setIsLoading(true);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
      user,
      setUser,
      isLoading,
      setIsLoading,
      error,
      setError,
      googleSignIn,
      googleSignOut
  }
};

export default useFirebase;
