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
import '../../css/transition.css'
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";


function PageTrans({children,location}) {
    const animation = {
        initial:{opacity:0,y: 500},
        animate:{opacity:1,y: 0},
        exit:{
            opacity:0 , y: -500
        }


    }
    const [startLoading,setLoadingState] = useState(true)
    useEffect(()=>{
        if(startLoading){
console.log('true')
            const timer = window.setTimeout(() => {
                setLoadingState(false)
                redirect('/'+location)
                console.log('false')

              }, 3500);
            
              return () => { 
                window.clearTimeout(timer);
              }
        }

    },[])
 
  return (

<div>
<motion.div  className=" loadertest fixed "
transition={{duration:.75,ease:'easeInOut'} }
      initial={{height:'100vh'}}
      animate={{height:0,bottom:0 }}
      exit={{height:'100vh',top:0}}></motion.div>
<motion.div  className="  "
transition={{duration:.75,ease:'easeInOut'} }
      initial={{opacity:0}}
      animate={{opacity:1 }}
      exit={{opacity:0 }}>

   <div >

     
   {children}

   </div>
    



   </motion.div> 
</div>
  );
}

export default PageTrans;
