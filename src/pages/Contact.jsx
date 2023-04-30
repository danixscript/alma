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
import PageTrans from "../components/transition/PageTrans";

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
        <ScrollPage ref={box1} page={3}>
          <Animator
            className="w100"
            animation={AnimationBatchmethod}
          ></Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator className="w100" animation={AnimationBatchPage2}></Animator>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator className="w100" animation={AnimationBatchPage3}></Animator>
        </ScrollPage>

        <ScrollPage className="index " page={5}></ScrollPage>

        <ScrollPage page={2}>
          <div className="h100vh w100  flexCenter">
            <motion.div
              className="  "
              initial={{ transform: "translateX(0)" }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, transform: "translateX(1000px" }}
            >
              <h1>hay</h1>
            </motion.div>
            {/* </Animator> */}
          </div>
        </ScrollPage>
        <ScrollPage page={3}></ScrollPage>
      </ScrollContainer>
    </PageTrans>

    // </AnimatedPage>
  );
}

export default HomePage;
