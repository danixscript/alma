import { NavLink } from "react-router-dom";
import "../../css/squars.css";
import Square from "./Square";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import IMG1 from '../../images/1.jpg'
import IMG2 from '../../images/6.jpg'
import IMG3 from '../../images/cake.jpg'
import IMG4 from '../../images/caspi.jpg'
import IMG5 from '../../images/cheff.jpg'
import IMG6 from '../../images/home4.jpg'
function SquarsRow(props) {
  let arr = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6]
  return (
    <div className={"gridRow  overflowHidden " + props.class} style={{ transform: `translateX( ${props.class == "tranX" ? '':''}${ props.offsetY * 0.1   }px)  `}}> 
    

    {arr.map((e)=>{
      return(
 <Square img={e} />
      )
    })}
    
    
      
   
     
    </div>
  );
}

export default SquarsRow;
