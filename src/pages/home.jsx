import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jhon Binag</h1>
          <h2 class="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
          <p className=" text-[#8892b0] py-4 max-w-[700px]">I'm a full-stack developer specializing in building occassionally 
            designing exceptional digital experience. Currently, I'm focused on 
            building websites, landing pages, memberships, email marketing automation and full-stack web application.</p>

            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"><a href='https://drive.google.com/file/d/1ynoPZtU3dns8zm5sq05dPydzTiwi2Iz1/view?usp=share_link' target='_blank'>Download Resume</a>
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3"/>
                </span>
              </button>
            </div>
      </div>
      

    </div>
  )
}
 
export default home