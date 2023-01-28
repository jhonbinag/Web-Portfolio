import React from "react";

import { FaNodeJs, FaReact, FaWordpressSimple } from "react-icons/fa";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
    <div name="skill" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center sm:text-center  w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skill
          </p>
          <p className="py-4">
            These are the technologies I've worked with
          </p>
        </div>
        {/* Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
            <FaNodeJs className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
            <FaReact className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
          <AiFillHtml5 className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
          <AiOutlineConsoleSql className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
          <SiTailwindcss className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
          <SiMongodb className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
            <SiFirebase className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500]">
            <FaWordpressSimple className="w-20 mx-auto pt-4" size="60px" />
            <p className="my-4">WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
