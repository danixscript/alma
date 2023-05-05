import { NavLink } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import SocialBtn from "../btn/SocialBtn";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import PDF from '../../images/menue.pdf'
import pdfh from '../../images/menuheb.pdf'
function NavPhon(props) {
    const [activeNav,setActiveNav] = useState(false)

    function openNav(){
      setActiveNav(!activeNav)
    }
  return (
    <div className="Link_UL phone  flexCol zinplus"> 
    
     
    <div className="btnn">
        <button className=" paddingBtnNavPhone" onClick={openNav}>
          <div className="navMenubtn"></div>
          <div className="navMenubtn"></div>
          <div className="navMenubtn"></div>
        </button>
    </div>
     
     <div className={activeNav?"flexCol jcenter   openNav rtl":'closeNav jcenter flexCol rtl'}>
     <div className="closeNavPhoneBTNDiv">
     <button className="navCloseButton" onClick={openNav} >X</button>
     </div>  
     <h1 className="cw phonHeader ">ALMA</h1> 
     <div className="marginRight20 minwidth flexCol">
         <NavLink onClick={openNav} className={"Linkphone"} to={"/home"}>
        דף הבית
      </NavLink>
     <a onClick={openNav} className={"Linkphone"} href={PDF}>
        תפריט
      </a>
      <a onClick={openNav} className={"Linkphone"} href={pdfh}>
        menu
      </a>   
        <NavLink onClick={openNav}  className={"Linkphone "} to={"/gallery"}>
        גלריה
      </NavLink>
     <NavLink onClick={openNav} className={"Linkphone"} to={"/contact"}>
        צור קשר
      </NavLink> 
      </div>
 
  
 
 <br />
   
      
     <div className=" flexCol center padding10">
     <SocialBtn/>
     </div>
      
     </div>
  
   
     
    </div>
  );
}

export default NavPhon;
