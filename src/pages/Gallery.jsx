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
import Img1 from "../images/new/table.jpg";
import Img2 from "../images/new/street.jpg";
import Img3 from "../images/new/shakshuca3.jpg";
import Img4 from "../images/new/shakshuca2.jpg";
import Img5 from "../images/new/plants.jpg";
import Img6 from "../images/new/out3.jpg";
import Img7 from "../images/new/out2.jpg";
import Img8 from "../images/new/out.jpg";
import Img9 from "../images/new/ogia2.jpg";
import Img10 from "../images/new/ogia.jpg";
import Img11 from "../images/new/inout.jpg";
import Img12 from "../images/new/in2.jpg";
import Img13 from "../images/new/in.jpg";
import Img14 from "../images/new/eden.jpg";
import Img15 from "../images/new/IMG_2487.jpg";
import Img16 from "../images/new/cup2.jpg";
import Img17 from "../images/new/cup2.jpg";
import Img18 from "../images/new/cup.jpg";
import Img19 from "../images/new/cheff2.jpg";
import Img20 from "../images/new/boss2.jpg";
import Img21 from "../images/new/boss1.jpg";
import Img22 from "../images/new/dog.jpg";
import Img23 from "../images/new/cup2.jpg";
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
  let array = [
    Img23,
    Img13,
    Img5,
    Img21,
    Img17,
    Img12,
    Img20,
    Img3,
    Img22,
    Img1,
    Img6,
    Img15,
    Img11,
    Img16,
    Img19,
    Img14,
    Img8,
    Img2,
    Img7,
    Img4,
    Img9,
    Img18,
    Img10,
  ];

  return (
    // <AnimatedPage>

    <PageTrans>
         
             
      <ScrollContainer>
     
        <ScrollPage  page={0}>
          <Animator
            className="w100 h100vh flexCol center"
            animation={AnimationBatchmethod}
          >
        
                <div  className="imageGalertPage ">
                  <div className="headerDiv">
                    <h1 className="headerBig">Gallery</h1>
                  </div>
                </div>
          
          </Animator>
        </ScrollPage>
       
        <ScrollPage ref={box1} page={1}>
          <Animator
            className="w100 h100vh flexCol center"
            animation={AnimationBatchPage2}
          >
            <div className="imageGalertPage"></div>
          </Animator>
        </ScrollPage>


        <ScrollPage className="index " page={2}></ScrollPage>

       
 
        
        <div ref={box1} className="flexCol center">
          <div className="gridGallery2 w90  flexCenter">
            {array.map((e) => {
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
