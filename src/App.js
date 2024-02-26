import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Donate from "./Pages/Donate/Donate";
import Error from "./Pages/Error/Error";
import Navbar from "./Components/Navbar/Navbar";
import { Button } from "flowbite-react";
import NavTwo from "./Components/Navbar/NavTwo";
import AboutUS from "./Pages/About/AboutUS";
import GetInvolve from "./Pages/GetInvolve/GetInvolve";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News/News";
import "preline/preline";
import DetailNews from "./Pages/News/DetailNews";
import NavPP from "./Components/Navbar/NavPP";
import Volunteer from "./Pages/Volunteer/Volunteer";
import ProgramAreas from "./Pages/ProgramAreas/ProgramAreas";
import SuperAdmin from "./Pages/SuperAdmin/SuperAdmin";
import SuperAdminDashboard from "./Pages/SuperAdminDashbord/SuperAdminDashboard";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/FirebaseConfig";
import Auth from "./Components/Auth/Auth";
function App() {
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user);
        setIsLogin(true);
        // ...
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
  return (
    <div>
      <NavPP />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whoweare" element={<AboutUS />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getinvolve" element={<GetInvolve />} />
        <Route path="/programAreas" element={<ProgramAreas />} />
        <Route path="/programAreas/:id" element={<ProgramAreas />} />
        <Route path="/blog" element={<News />} />
        <Route path="/blog/:id" element={<DetailNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/super/admin/none" element={<Auth status={"create"} />} />
        <Route path="*" element={<Error />} />

      

        {isLogin ? (
            <Route
              path="/super/admin/dashboard"
              element={<SuperAdminDashboard />}
            />
            
        ) : (
          <Route path="/super/admin" element={<SuperAdmin />} />
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
