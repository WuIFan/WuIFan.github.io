import React from 'react';
import _map from 'lodash/map';

export default function ExperienceCard({experience}) {
  return (
    <div>
      <div>{experience.years}</div>
      <div>{experience.title}</div>
      <div>{experience.place}</div>
      <ul>
        {_map(experience.jobs, (job) => {
          return <li>{job}</li>;
        })}
      </ul>
    </div>
  );
}
