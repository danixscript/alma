import { Routes, NavLink, Route, Router } from "react-router-dom";
import "./nav.css";
import { motion } from "framer-motion";

// import { useDispatch, useSelector } from "react-redux";
import Links from "./Links";

function NavBar(props) {
  // const dispatch = useDispatch();
  // const color = useSelector((state) => state.color);

  return (
    <motion.div
    className="NavBar flexCol   center"
    transition={{duration:.30,delay:3,ease:'easeInOut'}}
    initial={{transform:'translateY(-100px)' }}
    animate={{ transform:'translateY(0)' }}
    exit={{ opacity:0,transitionDelay:'5s' }}
  >
    <div className="NavBar flexCol   center">
      <div className="navFirstChild w100 flexRow bet  alignCenter ">
        <div className="logo">ALMA</div>
        <div className="links">
          <Links />
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default NavBar;
