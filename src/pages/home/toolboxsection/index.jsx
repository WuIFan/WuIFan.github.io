import React, {useState} from 'react';
import './index.css';
import classNames from 'classnames';
import _map from 'lodash/map';

export default function ToolboxSection({configs}) {
  const [isBackCard, setIsBackCard] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    configs.toolbox.categories[0]
  );

  const handleCategoriesTabClick = (category) => {
    setIsBackCard(!isBackCard);
    setActiveCategory(category);
  };

  return (
    <section className="iw-home-section-toolbox">
      <h2 className="iw-home-section-title">My Toolbox</h2>
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
              {_map(configs.toolbox.categories, (category, index) => {
                return (
                  <h3
                    key={index}
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
                (item, index) => {
                  return (
                    <div key={index} className="iw-home-toolbox-card--bar">
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
  );
}
