
import React from 'react';
import TeamCards from './TeamCards.jsx';
import carouselImage2 from '../Assets/carousel_2.png';
import { Link } from 'react-router-dom'; 

const Team = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Image */}
        <img
          src={carouselImage2}
          alt="Example"
          className="w-full h-80 object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold bg-opacity-50 px-4 py-2 rounded">
            OUR TEAM
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute inset-0 flex items-center pt-24 md:pt-32 justify-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex space-x-2">
              <li className="breadcrumb-item text-lg md:text-2xl font-bold">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item text-lg md:text-2xl text-white font-bold" aria-current="page">
                Team
              </li>
            </ol>
          </nav>
        </div>
      </div>

    <div>
      <TeamCards/>
    

      </div>
    </div>
  );
};

export default Team;