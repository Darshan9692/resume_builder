import React from 'react';
import { skills } from '../utils/skills';
import Checkbox from '../theme/Checkbox';
import { languages } from '../utils/languages';

const Skills = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-xl font-semibold text-blue-700 border-b pb-2">Skills</p>
          <Checkbox data={skills} />
        </div>
        <div className="space-y-6">
          <p className="text-xl font-semibold text-blue-700 border-b pb-2">Languages</p>
          <Checkbox data={languages} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
