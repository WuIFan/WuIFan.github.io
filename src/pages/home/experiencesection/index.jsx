import React, {useEffect, useRef} from 'react';
import './index.css';
import _map from 'lodash/map';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection({configs}) {
  return (
    <section>
      <div className="iw-home-section-experience">
        <h2 className="iw-home-section-title">My Experience</h2>
        <div style={{width: '100%'}}>
          {_map(configs.experience, (experience, index) => {
            return (
              <div
                key={index}
                className="iw-home-section-experience--card-container">
                <div className="iw-home-section-experience--card-line">
                  <div className="iw-home-section-experience--card-circle" />
                </div>
                <ExperienceCard
                  experience={experience}
                  right={+index % 2 === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
