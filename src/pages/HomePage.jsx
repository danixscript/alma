import "../css/home.css";
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
import ScrollContainerP from "../components/scrollparalex/ScrollContainerP";
import ParllaxElement from "../components/scrollparalex/ParllaxElement";
import PageTrans from "../components/transition/PageTrans";
import OneningImage from "../components/home/OneningImage";
import About from "../components/about/About";
import SquarsSection from "../components/squars/SquarsSection";
import AboutTest from "../components/about/AboutTest";
import Diractions from "../components/diraction/Diractions";
import Footer from "../components/footer/Footer";
import GalerySec from "../components/gallerysec/GalerySec";
import { NavLink } from "react-router-dom";

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
  const box1 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <AnimatedPage>

    <PageTrans>
      <ScrollContainer>
        <ScrollPage className="max-h" ref={box1} page={0}>
          <OneningImage offsetY={offsetY} />
        </ScrollPage>
        <div className="paddingPage ">
          {/* <ScrollPage ref={box1}  page={1}> */}
          <AboutTest offsetY={offsetY} />
          {/* <About offsetY={offsetY}/> */}
          {/* </ScrollPage> */}
        </div>

        <div className="bacimggalllert">
          <div className="paddingPage flexCol center">
            <GalerySec />

            {/* <SquarsSection offsetY={offsetY}/>
             */}
</div> </div>
<br /><br /><br /><br />
<div className="paddingPage flexCol center">
            <Diractions />
            <div className="flexCol center margin_bottomm50">
            <p className="text">ראשון עד חמישי 7:00--22:00</p>
            <p className="text">שישי מ 7:00 -- 18:00</p>
            <p className="text"> שבת מ 8:00 -- 22:00</p>
            <p className="text">03-513538</p>
            <br />
            <div className="btnDiv2  ">
              <NavLink data-aos="fade-up" to={'contact'} className={'btnGallery2'}>צור קשר</NavLink>
            </div>
            </div>
            
          </div>
       

        {/* <ScrollPage   page={3}>
        <Animator className="w100" animation={AnimationBatchPage2}>
          
        </Animator>
        </ScrollPage> */}

        <Footer />
      </ScrollContainer>
    </PageTrans>

    // </AnimatedPage>
  );
}

export default HomePage;
