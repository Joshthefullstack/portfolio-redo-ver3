import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/assets/music.png",
    desc: "Lorem ipsum decor delor. cornor reewte dolor ipsum denerator gorador rewadol nobal fredi asgard fuck you bitch i greeet you boss",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "/assets/music.png",
    desc: "Lorem ipsum decor delor. cornor reewte dolor ipsum denerator gorador rewadol nobal fredi asgard fuck you bitch i greeet you boss",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "/assets/music.png",
    desc: "Lorem ipsum decor delor. cornor reewte dolor ipsum denerator gorador rewadol nobal fredi asgard fuck you bitch i greeet you boss",
  },

  {
    id: 4,
    title: "Music App",
    img: "/assets/music.png",
    desc: "Lorem ipsum decor delor. cornor reewte dolor ipsum denerator gorador rewadol nobal fredi asgard fuck you bitch i greeet you boss",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Live Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
