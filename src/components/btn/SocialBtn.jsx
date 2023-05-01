import { NavLink } from "react-router-dom";
import "../../css/diractions.css";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

function SocialBtn(props) {
  return (
    <div className=" flexRow  gap50 "> 
    <div className="circle flexCol center">
    <div className="fa fa-google">
    
    </div>
    </div>
<div className="circle flexCol center ">
  <div className="fa fa-facebook">

  </div>
        
    </div>
  
     
    <div className="circle flexCol center">
        <div className="fa fa-instagram">
    
  </div>
        </div>
    
     
   
   
     
    </div>
  );
}

export default SocialBtn;
