import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Donate from "./Pages/Donate/Donate";
import Error from "./Pages/Error/Error";
import Navbar from "./Components/Navbar/Navbar";
import { Button } from 'flowbite-react';
import NavTwo from "./Components/Navbar/NavTwo";
import AboutUS from "./Pages/About/AboutUS";
import GetInvolve from "./Pages/GetInvolve/GetInvolve";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News/News";
import "preline/preline";
import DetailNews from "./Pages/News/DetailNews";
import NavPP from "./Components/Navbar/NavPP";
function App() {
  return (
    <div>
    {/* <NavTwo/> */}
    <NavPP/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whoweare" element={<AboutUS />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getinvolve" element={<GetInvolve />} />
        <Route path="/blog" element={<News />} />
        <Route path="/blog/:id" element={<DetailNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
