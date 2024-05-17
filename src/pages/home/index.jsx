import React, {useState} from 'react';
import './index.css';
import configs from './configs';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa6';
import classNames from 'classnames';
import _map from 'lodash/map';

export default function Home() {
  console.log('#', configs.introduce);
  const [isBackCard, setIsBackCard] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    configs.toolbox.categories[0]
  );

  const handleCategoriesTabClick = (category) => {
    setIsBackCard(!isBackCard);
    setActiveCategory(category);
  };

  return (
    <div>
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
      <section className="iw-home-section-toolbox">
        <h2 style={{fontSize: '42px', marginBottom: '50px'}}>My Toolbox</h2>
        <div className="iw-home-toolbox--container">
          <div
            className={classNames('iw-home-toolbox-card', {
              back: isBackCard,
            })}>
            <div
              className={classNames('iw-home-toolbox-card--content', {
                back: isBackCard,
              })}>
              <div className="iw-home-toolbox--tabs">
                {_map(configs.toolbox.categories, (category) => {
                  return (
                    <h3
                      className={classNames('iw-home-toolbox--tab', {
                        active: activeCategory === category,
                      })}
                      onClick={() => handleCategoriesTabClick(category)}>
                      {category}
                    </h3>
                  );
                })}
              </div>
              <div className="iw-home-toolbox-card--bar-container">
                {_map(
                  configs.toolbox.scores[activeCategory.toLowerCase()],
                  (item) => {
                    return (
                      <div className="iw-home-toolbox-card--bar">
                        <div
                          className="iw-home-toolbox-card--bar-progress"
                          style={{width: `${item.score}%`}}>
                          <div>{item.name}</div>
                          <div>{item.score}%</div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
