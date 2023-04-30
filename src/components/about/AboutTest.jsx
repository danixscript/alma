import { motion } from "framer-motion";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
  batch,
  Sticky,
  MoveOut,
  Fade,
  StickyIn,
  FadeIn,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "../../css/about.css";
import ScrollContainerP from "../../components/scrollparalex/ScrollContainerP";
import ParallaxElement from "../../components/scrollparalex/ParllaxElement";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import IMG from '../../images/cake.jpg'

function AboutTest(props) {
  const AnimationBatchmethod = batch(MoveOut(-200, 0));
  const moveSlowly = batch(MoveOut(200, 0));
  const FadeUp = batch(Sticky());
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  return (
    <div className="aboutSec flexCol center ">
     <div className="aboutFirstChild ">
     <div className="headerAbout ">
            <h1 className="h1  rtl">קצת על קפה עלמה</h1>
      </div>
      <div className="divContainer flexRow ">
       <div className="imageSideAbout  h100 " >
      
        <div className="imageDivAbout flexCol center padding h100  ">
        <div className="cellImage  responsive">

        </div>
        <p className="text">זיו ויזמן בעל העסק</p>
        </div>
       </div>
        <div className="  padding w60  h100">
          <div className="sideTow flexCol   aend">
            <h3 className="h33">שמש מדקות ושמיים</h3>
            <p className="pisca  rtl">

            בעינינו, בילוי יומיומי צריך להיות דבר שגרתי שמושרש בתרבות שלנו. וזה לגמרי אפשרי..בעינינו, בילוי יומיומי צריך להיות דבר שגרתי שמושרש בתרבות שלנו. וזה לגמרי אפשרי..
            בעינינו, בילוי יומיומי צריך להיות דבר שגרתי שמושרש בתרבות שלנו. וזה לגמרי אפשרי..    בעינינו, בילוי יומיומי צריך להיות דבר שגרתי שמושרש בתרבות שלנו. וזה לגמרי אפשרי..
            </p>
            <div className="btnDiv2  ">
              <NavLink className={'contact'}>תפריט</NavLink>
            </div>
            <br />
            <div className="twoDivs flexRow  ">
    
           <div className="withd80">
            <br />
            
           <h3 className="h33">  Coffee Shop Quotes</h3>
                <p className="sideA piscasmall ">
                Quotes are important in marketing and advertising because they provide quick statements that grab the interest of a viewer, making it the gateway they enter into exploring your particular business. Quotes are valuable in the same way a tagline, mission statement, or overall business message can be.
                </p>

           </div>
           <div className="sideB  rtl">
              {/* <img src={IMG1} alt="" /> */}

</div>
             
            </div>
            </div>

        </div>


      </div>
     </div>
    </div>
  );
}

export default AboutTest;
