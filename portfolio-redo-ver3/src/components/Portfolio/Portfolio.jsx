import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Web3 Blockchain Landing Page",
    img: "/assets/blockchain.png",
    desc: "Transformed ready UI/UX Design of a Web3 Blockchain Landing Page for a client, and got a good review after, rechnology used for building it was React, it was responsive and fully functional.",
    link: "https://github.com/Joshthefullstack/D-Apps-blockchain"
  },
  {
    id: 2,
    title: "Learned",
    img: "/assets/e-learning.png",
    desc: "Learned is an online education platform, I built for the purpose of bridging the gaps between Nigerian primary schools and technology. I implemented both backend and frontend features, using Node.js and React",
    link: "https://github.com/Joshthefullstack/Learned-ver-1"
  },
  {
    id: 3,
    title: "Next.js Online Bookstore",
    img: "/assets/bookstore.png",
    desc: "Using Next.js Technology and Nest.js technology, I designed an online bookstore, where users, can come check out some of their favorite books and the prices, and admins can perform CRUD operations on different books.",
    link: "https://github.com/Joshthefullstack/nestjs-application"
  },

  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "/assets/music.png",
  //   desc: "Lorem ipsum decor delor. cornor reewte dolor ipsum denerator gorador rewadol nobal fredi asgard fuck you bitch i greeet you boss",
  // },
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
            <button href={item.link}>Github Link</button>
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
