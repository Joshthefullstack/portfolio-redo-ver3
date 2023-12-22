import React, { useRef, useState } from "react";
import "./contacts.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contacts = () => {

  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSucess] = useState(null);

  const isInView = useInView(ref, { margin: "-50px"});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wjj5svi', 'template_a5bpd9q', formRef.current, 'wpZ7CSDf43lzTp03Z')
      .then((result) => {
        setSucess(true)
          setError(false)
          console.log(result.text);
      }, (error) => {
        setSucess(false)
      setError(true)
          console.log(error.text);
      });
  };

  return (
    <motion.div
    ref={ref}
      className="contacts"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>ibiamjoshua20@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>No. 73, Surulere, Lawanson Road</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>0810 146 2138</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="300px"
            height="300px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
              stroke="orange"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              initial={{pathLength: 0}}
              animate={ isInView && {pathLength: 1}}
              transition= {{duration: 3}}
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <input type="text" required placeholder="Subject" name="subject" />
          <textarea required rows={8} placeholder="Message" name="message"></textarea>
          <button>Send</button>
          { error && "Error"}
          { success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
