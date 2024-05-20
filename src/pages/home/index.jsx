import React from 'react';
import './index.css';
import configs from './configs';
import IntroduceSection from './introducesection';
import ToolboxSection from './toolboxsection';
import ExperienceSection from './experiencesection';
import Developing from '../../components/developing';

export default function Home() {
  return (
    <>
      <IntroduceSection configs={configs} />
      <ToolboxSection configs={configs} />
      {/* <ExperienceSection configs={configs} /> */}
      <Developing />
    </>
  );
}
