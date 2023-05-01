import { Routes, NavLink, Route, Router } from "react-router-dom";
import "./nav.css";
import { motion } from "framer-motion";

// import { useDispatch, useSelector } from "react-redux";
import Links from "./Links";
import { useState } from "react";
import NavPhon from "./NavPhon";

function NavBar(props) {
  // const dispatch = useDispatch();
  // const color = useSelector((state) => state.color);
  const [activeNavBar,setActiveNav ] = useState(false)
  const changeBackground = ()=>{
      if(window.scrollY >= 80){
        setActiveNav(true)
      }
      else{
        setActiveNav(false)
      }
   }
   window.addEventListener('scroll', changeBackground)
  return (
    <motion.div
    className={activeNavBar?"activeNav flexCol   center":'NavBar flexCol   center'}
    transition={{duration:.30,delay:3,ease:'easeInOut'}}
    initial={{transform:'translateY(-100px)' }}
    animate={{ transform:'translateY(0)' }}
    exit={{ opacity:0,transitionDelay:'5s' }}
  >
    <div  className={activeNavBar?"activeNav flexCol   center":'NavBar flexCol   center'}>
      <div className="navFirstChild w90 flexRow bet  alignCenter ">
        <div className="logo">ALMA</div>
        <div className="links">
          <Links />

         

        </div>
      <div className="phone">
      <NavPhon/>
      </div>
      </div>
    </div>
    </motion.div>
  );
}

export default NavBar;
