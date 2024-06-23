import React from 'react';
import Input from '../theme/Input';

const About = () => {
    return (
        <div className="bg-white p-10 grid gap-10 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-blue-700 border-b pb-2">About</p>
            <div className="grid grid-cols-3 gap-6">
                <Input type="text" name="job_title" title="Job Title" placeholder="Job Title" />
                <Input type="text" name="linkedin_name" title="LinkedIn Name" placeholder="LinkedIn Name" />
                <Input type="text" name="github_name" title="GitHub Name" placeholder="GitHub Name" />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Input type="text" name="linkedin_url" title="LinkedIn URL" placeholder="LinkedIn URL" />
                <Input type="text" name="github_url" title="GitHub URL" placeholder="GitHub URL" />
            </div>
            <div className="w-full">
                <Input type="text" name="about" title="About" placeholder="Tell us about yourself" />
            </div>
        </div>
    );
};

export default About;
