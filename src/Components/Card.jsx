
import React from 'react';
import { FaBook, FaGraduationCap, FaHome, FaGlobe } from 'react-icons/fa'; 

const Card = () => {
  return (
    <div className="pt-20 px-5 md:px-24 flex flex-wrap justify-between gap-4 pb-20">
      {/* Card 1 */}
      <div className="card transition transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-[23%]">
        <div className="card-body p-4 h-72 bg-blue-300 hover:bg-blue-500 text-black hover:text-white">
          <div className="text-5xl mt-4 text-blue-500 flex flex-col items-center">
            <FaBook />
          </div>
          <h1 className="card-title text-lg text-center mt-3 font-bold">Fostering National AI Capacity</h1>
          <p className="card-text">Building dipisci dicta, explicabo qSunt maxime magni culpa facere?</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card transition transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-[23%]">
        <div className="card-body p-4 h-64 bg-blue-300 hover:bg-blue-500 text-black hover:text-white">
          <div className="mt-4 text-5xl text-blue-500 flex flex-col items-center">
            <FaGraduationCap />
          </div>
          <h1 className="card-title text-center text-lg mt-3 font-bold">Empowering Innovators</h1>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card transition transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-[23%]">
        <div className="card-body p-4 h-72 bg-blue-300 hover:bg-blue-500 text-black hover:text-white">
          <div className="text-5xl mt-4 text-blue-500 flex flex-col items-center">
            <FaHome />
          </div>
          <h1 className="card-title text-lg mt-3 font-bold text-center">Transforming the Future</h1>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card transition transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-[23%]">
        <div className="card-body p-4 h-72 bg-blue-300 hover:bg-blue-500 text-black hover:text-white"> {/* Set height to match other cards */}
          <div className="text-5xl mt-4 text-blue-500 flex flex-col items-center">
            <FaGlobe />
          </div>
          <h1 className="card-title mt-3 text-lg font-bold text-center">Unlocking Boundless Creativity</h1>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


