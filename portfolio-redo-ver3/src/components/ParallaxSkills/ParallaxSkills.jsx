import React, { useRef, useState } from "react";
import "./parallaxskills.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const ParallaxSkills = () => {

  const ref = useRef();
  // const planet = useState(type === "services" ? "./planets.png" : "./sun.png")

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0", "500%"]);


  return (
    <div>
      <div
      className="parallax"
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d"
      }}
      ref={ref}
    >
      <motion.h1 style={{ y: yText }}>
        How Do We Do It?
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
    </div>
  )
}

export default ParallaxSkills