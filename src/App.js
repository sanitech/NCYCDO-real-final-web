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
import { AuthProvider, useAuth } from "./AuthProvider";
import ProtectedRoute from "./ProtectRouter";
import VolunteerDashboard from "./Pages/VolunteerDashbord/VolunteerDashboard";
import Dashboard from "./Pages/VolunteerDashbord/VolunteerDashboard";
import VolunteerDetail from "./Pages/VolunteerDashbord/VolunteerDetail";
import Profile from "./Pages/Profile/Profile";
import axios from "axios";
import ContactDashboard from "./Pages/Contact/ContactDashboard";
import LoginByPassword from "./Components/Auth/LoginByPassword";
import ForgetPassword from "./Components/Auth/ForgetPassword";
import ResetPassword from "./Components/Auth/RestPassword";
import Test from "./Pages/VolunteerDashbord/Test";

function App() {
  axios.defaults.withCredentials = true;
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) ? true : false
  );
  const {showNavbar, showFooter, isLoggedIn} = useAuth()
  useEffect(() => {
    console.log("isLogin", isLogin);
    console.log(showFooter  )
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     const uid = user.uid;
    //     setUser(user);
    //     setIsLogin(true);
    //     // ...
    //   } else {
    //     setIsLogin(false);
    //   }
    // });
    // const user = auth.currentUser;
    // if (user !== null) {
    //   user.providerData.forEach((profile) => {
    //     console.log("Sign-in provider: " + profile.providerId);
    //     console.log("  Provider-specific UID: " + profile.uid);
    //     console.log("  Name: " + profile.displayName);
    //     console.log("  Email: " + profile.email);
    //     console.log("  Photo URL: " + profile.photoURL);
    //   });
    // }
  }, []);
  return (
    <div>
     {showNavbar &&(<div><Navbar /> </div>)} 

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/whoweare" element={<AboutUS />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/getinvolve" element={<GetInvolve />} />
          <Route path="/programAreas" element={<ProgramAreas />} />
          <Route path="/programAreas/:id" element={<ProgramAreas />} />
          <Route path="/blog" element={<News />} />
          <Route path="/blog/:id" element={<DetailNews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/super/admin/forgetPassword" element={<ForgetPassword />} />
          <Route path="/super/admin/resetPassword/:uid/:token" element={<ResetPassword />} />
          <Route
            path="/super/admin/none"
            element={<Auth status={"create"} />}
          />
          <Route path="*" element={<Error />} />

          <Route path="/super/admin" element={<SuperAdmin />} />
          <Route
            path="/super/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super/admin/volunteer"
            element={
              <ProtectedRoute>
                <VolunteerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super/admin/volunteer/:id"
            element={
              <ProtectedRoute>
                <VolunteerDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super/admin/setting"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super/admin/contact"
            element={
              <ProtectedRoute>
                <ContactDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super/admin/login"
            element={
              <ProtectedRoute>
                <LoginByPassword />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
     {/* {showFooter&& <Footer />} */}
    </div>
  );
}

export default App;
