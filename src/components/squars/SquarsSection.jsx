import { NavLink } from "react-router-dom";
import "../../css/squars.css";
import Square from "./Square";
import SquarsRow from "./SquarsRow";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

function SquarsSection(props) {
  return (
    <div className="flexCol end aend  padd50 "> 
    
    <SquarsRow class={'tranX'}  offsetY={props.offsetY }/>
    <SquarsRow class={'tranPX'}  offsetY={props.offsetY }  />
   
     
    </div>
  );
}

export default SquarsSection;
