import { motion } from "framer-motion";
import {Animator, ScrollContainer, ScrollPage,Move,batch,Sticky,MoveOut,Fade, StickyIn, FadeIn, ZoomIn, ZoomOut} from 'react-scroll-motion'
import '../../css/about.css'
import ScrollContainerP from "../../components/scrollparalex/ScrollContainerP";
import ParallaxElement from "../../components/scrollparalex/ParllaxElement";
import React, { useRef } from "react";

function About (props){
    const AnimationBatchmethod = batch(MoveOut(-200,0));
    const moveSlowly = batch(MoveOut(200,0));
    const FadeUp = batch(Sticky());
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    return(
     

     <div  className="  w100 keep"    >
 
<motion.div
        className="flexCol center w100"
        transition={{duration:.75,delay:2,ease:'easeInOut'}}
        initial={{ }}
        animate={{ }}
        exit={{ opacity:0 }}
       
      >



<div className="flexRow center   h45 margin_top200">
 <div className="flexRow   center h100">
 <div className="ImageSide flexCol center  h100"  >

        <div className="imageAbout h100 "  >
        <div className="beforSquar" style={{ width: ` ${ props.offsetY * 0.3   }px`}}>
        
        </div>
            <p className="h3">ALMA YAFFO</p>

        </div>
    </div>
    <div className="wordsSide  h100 rtl">
        <div className="header">
            <h1 className="headerAbout marginBottom ">
               קצת על קפה עלמה יפו
            </h1>
        </div>
        <div className="smallText bcw  marginBottom">
        <p className="text  padd0 bcw">
            בעינינו, בילוי יומיומי צריך להיות דבר שגרתי שמושרש בתרבות שלנו. וזה לגמרי אפשרי..
             </p>
    <p className="text  padd0 bcw">
אצלנו בחצר, הבילוי הוא בגובה העיניים וכולל יינות מגוונים וטעימים, קפה איכותי ומנות עונתיות וקלילות במחירים נוחים לכל כיס. עם מוזיקה שמחברת את הכל יחד, אפשר פשוט להגיע, להירגע ולהנות.
           </p>
           <div className="buttonDiv margin_top50">
            <button className="btn font_size16">קצת עלינו</button>
           </div>
           
        </div>
    </div>
 </div>


</div>

      </motion.div>

     


{/*             
            <ScrollContainerP className="h100vh w100 flexbottom bgimage">
             <ParallaxElement className='flexCenter h100 w100' dataPercent="20" dataDirection="y">
      <div ref={box2}>

      
   <motion.div
        className=" flexCenter "
        initial={{ opacity: 0 ,height:'100%',transform:'translateY(-100px)'}}
        animate={{ opacity: 1 }}
        exit={{ opacity:0,transitionDelay:'5s' }}
      >
       
       <div className="header_div "  >
      
     
<div  style={{ transform: `transformX( -${ props.offsetY * 0.003   }px)`}}     className="w100 slider_div flexRow ">

  <h1 className="header ">Daniel Morcos  --</h1><h1 className="header ">Daniel Morcos -- </h1><h1 className="header ">Daniel Morcos  --</h1>




</div>

     

       <p  className="headerSmall">Freelance designer</p>
     

       </div>
      
       </motion.div>
     </div>
  

     </ParallaxElement>

</ScrollContainerP> */}
      </div>
 




    )
}


export default About;