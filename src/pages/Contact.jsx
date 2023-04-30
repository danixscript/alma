import "../css/home.css";
import '../css/contact.css'
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
import Img from '../images/new/out3.jpg'
import SocialBtn from "../components/btn/SocialBtn";
function HomePage() {
  const AnimationBatchmethod = batch(Sticky());
  const AnimationBatchPage2 = batch(
    Sticky(),
    ZoomOut(),
    Fade(),
    MoveOut(0, -600)
  );
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

  return (
    // <AnimatedPage>

    <PageTrans>
      <ScrollContainer>
        <div className="h100vh w100 flexCol center">
         <div className="w90 h100 posrel flexRow center">
         {/* <div className="imageLeft cw">
            <img src={Img} className="img cw" alt="" />
          </div> */}
          <div className="info h100  flexCol center">
        
         <div className="info   flexCol center">
         <h1 className="headerBig2">
        
        <span className="cw cbi">AL</span>MA YAFFO
      </h1>   
      <div className="imageLeft ">
      {/* <img src={Img} className="img " alt="" /> */}
    </div>
         </div>
            <div className="flexCol  gap20 rtl w100">
            <div className="flexCol  zin9 rtl w100">
            <p className="text">ראשון עד חמישי 7:00--22:00</p>
            <p className="text">שישי מ 7:00 -- 18:00</p>
            <p className="text"> שבת מ 8:00 -- 22:00</p>
            <p className="text">03-513538</p>
            
          </div><SocialBtn/>
            </div>
        
          {/* <div className="imagebg w50"></div> */}
          </div>
         </div>
        </div>

     
      </ScrollContainer>
    </PageTrans>

    // </AnimatedPage>
  );
}

export default HomePage;
