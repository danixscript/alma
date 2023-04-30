import { NavLink } from "react-router-dom";
import "../../css/diractions.css";
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

function Diractions(props) {
  return (
    <div className=" flexCol center  "> 
  
        {/* <p className="headerdirection">?
            אז איך מגיעים</p> */}

     
    
     
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.9055291570507!2d34.75774327754233!3d32.04949822195629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4cba1f10379f%3A0x6cd118432341db52!2sAlma%20Cafe!5e0!3m2!1siw!2sil!4v1682858349272!5m2!1siw!2sil" className="mapdir"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      
   
     
    </div>
  );
}

export default Diractions;
