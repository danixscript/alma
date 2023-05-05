import { NavLink } from "react-router-dom";
import "./nav.css";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import PDF from '../../images/menue.pdf'
import pdfh from '../../images/menuheb.pdf'

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
     <a className={"Link"} href={pdfh}>
        תפריט
      </a> <h2>/</h2>
      <a className={"Link2"} href={PDF} target = "_blank">
        menu
      </a> 
     </div>
      <NavLink className={"Link"} to={"/home"}>
        דף הבית
      </NavLink>
      
    
      
   
     
    </div>
  );
}

export default Links;
