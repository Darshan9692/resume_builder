import React from 'react';
import { skills } from '../utils/skills';
import Checkbox from '../theme/Checkbox';

const Skills = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
      <p className="text-xl font-semibold text-blue-700 border-b-2 pb-2 border-blue-300 mb-4">Skills</p>
      <Checkbox data={skills} />
    </div>
  );
}

export default Skills;

