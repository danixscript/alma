import { motion } from "framer-motion";
import {Animator, ScrollContainer, ScrollPage,Move,batch,Sticky,MoveOut,Fade, StickyIn, FadeIn, ZoomIn, ZoomOut} from 'react-scroll-motion'

import ScrollContainerP from "../../components/scrollparalex/ScrollContainerP";
import ParallaxElement from "../../components/scrollparalex/ParllaxElement";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

function OneningImage (props){
    const AnimationBatchmethod = batch(MoveOut(-200,0));
    const moveSlowly = batch(MoveOut(200,0));
    const FadeUp = batch(Sticky());
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    return(
     

     <div  className="h100vh w100  flexCol centerforEnd "    >
 
<motion.div
        className=" backgroundImg flexCol "
        
        transition={{duration:.75,delay:2,ease:'easeInOut'}}
        initial={{ }}
        animate={{ width:'65vw',maxHeight:'70% ',marginTop:'10vh' }}
        exit={{ opacity:0 }}
       
      >

<motion.div 

transition={{duration:.75,delay:3,ease:'easeInOut'}}
initial={{opacity:0 }}
animate={{ opacity:1 }}
exit={{ opacity:0 }}>
<div className="headerDiv flexCol  ">
<h1 className="headerBig"  style={{ transform: `translateY( ${ props.offsetY * 0.2   }px)`}}  > CAFFE ALMA </h1>



</div>
{/* <div className=" margin_top50 btn_div flexCol center" style={{ transform: `translateY( ${ props.offsetY * 0.2  }px)`}}>
<button className="btn border font_size16 home_btn">תפריט</button>
</div> */}
</motion.div>


{/* <div className="buttonDiv flexCol center">
<button className="btn font_size16 home_btn">תפריט</button>
</div> */}      
      </motion.div>
      <motion.div 
className="flexCol center"
transition={{duration:.75,delay:3,ease:'easeInOut'}}
initial={{opacity:0 }}
animate={{ opacity:1  }}
exit={{ opacity:0 }}>
      <p className="smallHeader">יפו שבטי ישראל 14 </p>
      <br /><br /><br /> 
      <div className="flexCol  op btnDiv2 center po">
        <NavLink className={'btnGallery2'}> תפריט</NavLink>
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


export default OneningImage;