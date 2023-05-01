import "../css/home.css";
import "../css/gallery.css";
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
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import PageTrans from "../components/transition/PageTrans";

import Footer from "../components/footer/Footer";
import ScrollContainerP from "../components/scrollparalex/ScrollContainerP";
import ParllaxElement from "../components/scrollparalex/ParllaxElement";
function Gallery() {
  const AnimationBatchmethod = batch(Sticky());
  const AnimationBatchPage2 = batch(Sticky(), ZoomOut(), Fade());
  const AnimationBatchPage3 = batch(StickyIn(), Fade());
  const FadeUp = batch(Fade(), Sticky(), Move());
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const box1 = useRef(null);
 

  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../images/new', false, /\.(png|JPG|jpe?g|svg)$/));

   function importAll2(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images2 = importAll2(require.context('../images', false, /\.(png|JPG|jpe?g|svg)$/));

  
  return (
    // <AnimatedPage>

    <PageTrans>
         
        
         
      <ScrollContainer className="scroll-snap">
      
        <ScrollPage className="scroll-snap-align "  page={0}>
          <Animator
            className="w100 h100vh flexCol center"
            animation={AnimationBatchPage2}
          >
        
                <div  className="imageGalertPage ">
                  <div className="headerDiv">
                    <h1 className="headerBig">Gallery</h1>
                  </div>
                </div>
          
          </Animator>
        </ScrollPage>
       
        {/* <ScrollPage ref={box1} page={1}>
          <Animator
            className="w100 h100vh flexCol center"
            animation={}
          >
            <div className="imageGalertPage"></div>
          </Animator>
        </ScrollPage> */}


        <ScrollPage className="index scroll-snap-align " page={2}></ScrollPage>

       
 
        
        <div ref={box1} className="flexCol scroll-snap-align center ">
          <div className="gridGallery2 w90  flexCenter">
            {Object.values(images).map((e) => {
          
              return (
                <div className="imgdiv">
                  <img src={e} className="img" alt="" />
                </div>
              );
            })}

{Object.values(images2).map((e) => {
          
          return (
            <div className="imgdiv">
              <img src={e} className="img" alt="" />
            </div>
          );
        })}

          </div>
        </div>
   
           
        
   
        {/* <motion.div
              className="  "
              initial={{ transform: "translateX(0)" }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, transform: "translateX(1000px" }}
            >
              <h1>hay</h1>
            </motion.div> */}
        {/* </Animator> */}
        <br />
        <br />
        <Footer />
      </ScrollContainer>
     
    </PageTrans>

    // </AnimatedPage>
  );
}

export default Gallery;
