import { NavLink } from "react-router-dom";
import "./nav.css";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

function Links(props) {
  return (
    <div className="Link_UL  flexRow center"> 
    
     
    
     
      <NavLink className={"Link"} to={"/contact"}>
        צור קשר
      </NavLink> 
      
 
      <NavLink className={"Link "} to={"/gallery"}>
        גלריה
      </NavLink>
      <div className="flexRow center  h100">
     <NavLink className={"Link"} to={"/contact"}>
        תפריט
      </NavLink> <h2>/</h2>
      <NavLink className={"Link2"} to={"/contact"}>
        menu
      </NavLink> 
     </div>
      <NavLink className={"Link"} to={"/home"}>
        דף הבית
      </NavLink>
      
    
      
   
     
    </div>
  );
}

export default Links;
