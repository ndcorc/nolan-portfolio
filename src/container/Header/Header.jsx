import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Nolan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex" style={{ marginTop: 10 }}>
          <p className="p-text">Software Engineer</p>
          <p className="p-text">Web Developer</p>
        </div>

        <div className="tag-resume app__flex" style={{ marginTop: 10 }}>
          <a
            href="https://drive.google.com/file/d/1BhExKCESOD1DhMEkqAbgqTRT2P6cTBEs/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <p className="p-text">My Resume</p>
          </a>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" style={{ marginTop: -40 }} />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
