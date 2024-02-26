import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useAuth } from "react-router-dom";
import { auth } from "./Firebase/FirebaseConfig";

function PrivateRoute({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
    const user = auth.currentUser;
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }, []);

  const location = useLocation();

  if (!isLogin) {
    // Redirect to login page if not authenticated
    return <Navigate to="/super/admin" replace state={{ from: location }} />;
  }

  return children; // Render child component if authenticated
}

export default PrivateRoute;
