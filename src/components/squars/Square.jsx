import { NavLink } from "react-router-dom";
import "../../css/squars.css";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

function Square(props) {
  return (
    <div className="squar  "> 
    
     
    <img src={props.img} className="img" alt="" />
      
   
     
    </div>
  );
}

export default Square;
