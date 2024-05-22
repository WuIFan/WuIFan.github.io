import React from 'react';
import './index.css';
import _map from 'lodash/map';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection({configs}) {
  return (
    <section>
      <div className="iw-home-section-experience">
        <h2 className="iw-home-section-title">My Experience</h2>
        {_map(configs.experience, (experience) => {
          return <ExperienceCard experience={experience} />;
        })}
      </div>
    </section>
  );
}
