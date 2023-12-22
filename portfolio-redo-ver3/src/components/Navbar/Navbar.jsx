import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
         >JoshTheeDev</motion.span>
        <div className="social-links">
          <a href="https://github.com/Joshthefullstack/"><img src="/assets/github-svgrepo-com(1).png" alt=""/></a>
          <a href="www.linkedin.com/in/josh-theedev-28426629a"><img src="/assets/linkedin-svgrepo-com.png" alt=""/></a>
          <a href="www.facebook.com"><img src="/assets/gmail-svgrepo-com.png" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar