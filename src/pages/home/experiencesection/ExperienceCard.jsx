import React from 'react';
import _map from 'lodash/map';
import classNames from 'classnames';

export default function ExperienceCard({experience, right}) {
  return (
    <div
      className={classNames('iw-home-section-experience--card', {
        'right': right,
        'left': !right,
      })}>
      <div className="iw-home-section-experience--card-title main">
        {experience.years}
      </div>
      <div className="iw-home-section-experience--card-title sub">
        {experience.title}
      </div>
      <div className="iw-home-section-experience--card-title sub">
        {experience.place}
      </div>
      <ul>
        {_map(experience.jobs, (job) => {
          return <li>{job}</li>;
        })}
      </ul>
    </div>
  );
}
