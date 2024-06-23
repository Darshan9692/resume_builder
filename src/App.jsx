import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import ClickEvent from './components/ClickEvent';
import HoverEvent from './components/HoverEvent';
import Progress from './theme/Progress';
import { CgProfile } from 'react-icons/cg';
import { FaGithub, FaBook, FaReact } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { LuLanguages } from "react-icons/lu";
import Languages from './components/Languages';
// const Skills = React.lazy(() => import('./components/Skills'));  //faster initial loading

function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step === 1) return;
    setStep(step - 1);
  }

  const handleNext = () => {
    if (step === 6) return;
    setStep(step + 1);
  }

  const handleSubmit = () => {
    console.log("Submitted...");
  }

  return (
    // <>
    //   <ClickEvent/>
    //   <HoverEvent/>
    // </>
    <div className='box-border mx-auto my-0 p-10 flex flex-col justify-center items-center relative'>
      <div className="row flex flex-wrap gap-4  shadow-md shadow-black p-4 rounded-full">
        <Progress className={step === 1 ? "bg-red-400" : step > 1 ? "bg-green-500" : ""} icon={<CgProfile />} title="Profile" />
        <Progress className={step === 2 ? "bg-red-400" : step > 2 ? "bg-green-500" : ""} icon={<FaGithub />} title="About" />
        <Progress className={step === 3 ? "bg-red-400" : step > 3 ? "bg-green-500" : ""} icon={<FaBook />} title="Education" />
        <Progress className={step === 4 ? "bg-red-400" : step > 4 ? "bg-green-500" : ""} icon={<FaReact />} title="Skills" />
        <Progress className={step === 5 ? "bg-red-400" : step > 5 ? "bg-green-500" : ""} icon={<GoProject />} title="Projects" />
        <Progress className={step === 6 ? "bg-red-400" : step > 6 ? "bg-green-500" : ""} icon={<LuLanguages />} title="Languages" />
      </div>
      <div className='max-w-screen p-4 overflow-y-auto w-full max-w-4xl absolute top-28'>
        {step === 1 && <Profile />}
        {step === 2 && <About />}
        {step === 3 && <Education />}
        {/* {step === 4 && <React.Suspense fallback="Loading..."><Skills /></React.Suspense>} */}
        {step === 4 && <Skills />}
        {step === 5 && <Project />}
        {step === 6 && <Languages />}
        <div className="flex justify-end gap-4 mt-6">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition"
            >
              Previous
            </button>
          )}
          {step < 6 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
          {step === 6 && (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
