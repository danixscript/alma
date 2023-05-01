import { Link, NavLink } from "react-router-dom";
import "../../css/footer.css";
import SocialBtn from "../btn/SocialBtn";
import Links from "../nav/Links";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

function Footer(props) {
  return (
    <div className=" Footer flexRow center    "> 
<div className="w60 flexCol center">



<div className="flexRow center">
  <div className="links">
   
  </div>
 
  
  <div className="social  padding10 flexCol center">
     <h1 className="headerFooter "> ALMA YAFFO  </h1>
<div className=" padding10">
<SocialBtn/>
</div>
</div>

</div>
   </div>  
    </div>
  );
}

export default Footer;
