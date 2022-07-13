import React from "react";
import { BsLinkedin, BsGithub, BsPhone, BsTelephoneFill } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/nolan-corcoran-524b2088/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href="https://github.com/ndcorc" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>

    <div>
      <a href="tel:+18326221587" target="_blank" rel="noreferrer">
        <BsTelephoneFill />
      </a>
    </div>
  </div>
);

export default SocialMedia;
