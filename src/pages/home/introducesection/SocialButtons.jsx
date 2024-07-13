import classNames from 'classnames';
import React, {useState} from 'react';
import {FaGithub, FaLinkedin, FaEnvelope, FaShareNodes} from 'react-icons/fa6';
import './socialButtons.css';
import configs from '../configs';

export default function SocialButtons() {
  const [show, setShow] = useState(false);
  const handleSocailButtonClick = () => {
    setShow(!show);
  };

  return (
    <div style={{position: 'relative'}}>
      <FaShareNodes
        style={{width: '50px', height: '50px', cursor: 'pointer'}}
        className="iw-social-icon"
        onClick={handleSocailButtonClick}
      />
      <a href={configs.social.github.link} target="_blank">
        <FaGithub
          className={classNames('iw-social-icon', {hidden: !show})}
          style={{left: show ? '100px' : 0, top: show ? '20px' : 0}}
        />
      </a>
      <a href={configs.social.linkedin.link} target="_blank">
        <FaLinkedin
          className={classNames('iw-social-icon', {hidden: !show})}
          style={{left: show ? '100px' : 0, top: show ? '100px' : 0}}
        />
      </a>
      <a href={configs.social.mail.link} target="_blank">
        <FaEnvelope
          className={classNames('iw-social-icon', {hidden: !show})}
          style={{left: show ? '20px' : 0, top: show ? '100px' : 0}}
        />
      </a>
    </div>
  );
}
