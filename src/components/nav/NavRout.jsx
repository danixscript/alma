import { Routes, useLocation, Route, Router } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import '../../css/App.css';
import {AnimatePresence} from 'framer-motion';
import NavBar from "./NavBar";
import Contact from "../../pages/Contact";
import Gallery from "../../pages/Gallery";

function NavRoute(props) {
  const location =useLocation()
  return (
    <div className=" ">
     {/* <div className="upperNav">

     </div> */}
  
      <NavBar getLocation={props.getLocation} />
   

      <AnimatePresence   mode="wait">
     
      <Routes location={location} key={location.pathname} >
      <Route path="*" element={<HomePage />} exact />
      <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/gallery" element={<Gallery />} exact />


        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
        
      </AnimatePresence>
    </div>
  );
}

export default NavRoute;
