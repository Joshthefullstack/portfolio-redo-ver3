import React, { useRef } from "react";
import "./servicepage.scss";
import { motion, useInView } from "framer-motion";

const serviceVariants = {
  inital: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
      staggerChildren: 0.1,
    },
  }
};

const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref,{margin: "-100px"} )
  return (
    <motion.div
      className="services"
      variants={serviceVariants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      // animate={isInView && "animate"}
    >
        {/* <motion.div className="textContainer" variants={serviceVariants}>
          <p>
            I focus on helping your business grow <br /> and move forward
          </p>
          <hr />
        </motion.div> */}
      <motion.div className="titleContainer" variants={serviceVariants}>
        <div className="title">
          <img src="/assets/people.webp" alt="" />
          <h1>
            {" "}
            <motion.b whileHover={{ color: "orange"}}>Services</motion.b> That I Provide
          </h1>
        </div>
        <div className="title">
          <h1>
            {" "}
            <motion.b  whileHover={{ color: "orange"}}>For Your</motion.b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={serviceVariants}>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgrey" }}
        >
          <h2>Frontend Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgrey" }}
        >
          <h2>Backend Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgrey" }}
        >
          <h2>Graphics Designing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
