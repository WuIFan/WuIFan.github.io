import React from 'react';
import './index.css';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa6';

export default function IntroduceSection({configs}) {
  return (
    <section>
      <div className="iw-home-introduce--container">
        <div className="iw-home-introduce--text">
          <h1>{configs.introduce.text}</h1>
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>
        <div className="iw-home-introduce--image">
          <img alt="iw" src={configs.introduce.image} />
        </div>
      </div>
    </section>
  );
}
