import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import ClickEvent from './components/ClickEvent';
import HoverEvent from './components/HoverEvent';

function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step === 1) return;
    setStep(step - 1);
  }

  const handleNext = () => {
    if (step === 5) return;
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
      <div className='max-w-screen p-4 overflow-y-auto w-full max-w-4xl absolute top-28'>
        {step === 1 && <Profile />}
        {step === 2 && <About />}
        {step === 3 && <Education />}
        {step === 4 && <Skills />}
        {step === 5 && <Project />}
        <div className="flex justify-end gap-4 mt-6">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition"
            >
              Previous
            </button>
          )}
          {step < 5 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
          {step === 5 && (
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
