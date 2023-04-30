import { NavLink } from "react-router-dom";
import "../../css/gallery.css";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import IMG1 from '../../images/1.jpg'
import IMG2 from '../../images/6.jpg'
import IMG3 from '../../images/cake.jpg'
import IMG4 from '../../images/caspi.jpg'
import IMG5 from '../../images/cheff.jpg'
import IMG6 from '../../images/home4.jpg'
function GalerySec(props) {
    let arr = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6]
  return (
 <div className="gallerySec">
       <div className="gridGallery  "> 

    
{arr.map((e)=>{
      return(
<img src={e} className="img" alt="" />
      )
    })}
   
  
     
    </div>
    <div className="flexCol  btnDiv center">
        <NavLink to={"/gallery"} className={'btnGallery'}>עוד תמונות</NavLink>
    </div>
 </div>
  );
}

export default GalerySec;
