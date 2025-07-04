import React from 'react';
import { useNavigate } from 'react-router-dom';
import electrocure from '../Assets/coding.jpg';
import transfocure from '../Assets/writing.jpg';
import agrocure from '../Assets/digital.jpg';
import meterocure from '../Assets/creative.jpg';

const OurProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen pt-0 flex items-center justify-center">
      {/* Header */}
      <div>
        <h4 className='text-center font-bold text-cyan-500 pt-6'>WHAT WE OFFER</h4>
<h1 className='text-center font-bold text-black pt-3'>Explore Your Potential with I Learn Hub</h1>


        {/* Main Grid Container */}
        <div className="pt-8 grid grid-cols-2 gap-2 max-w-screen-lg mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-2">
            {/* Electro Cure (Top Image - Adjusted Height) */}
            <div
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => navigate('/electro-cure')}
            >
              <img
                src={electrocure}
                alt="Electro Cure"
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 shadow-md">
                <p className="text-black font-semibold">Coding</p>
              </div>
            </div>

            {/* Transfo Cure & Agro Cure (Side-by-Side) */}
            <div className="grid grid-cols-2 gap-2">
              {/* Transfo Cure */}
              <div
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => navigate('/transfo-cure')}
              >
                <img
                  src={transfocure}
                  alt="Transfo Cure"
                  className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 shadow-md">
                  <p className="text-black font-semibold">Writing</p>
                </div>
              </div>

              {/* Agro Cure */}
              <div
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => navigate('/agro-cure')}
              >
                <img
                  src={agrocure}
                  alt="Agro Cure"
                  className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 shadow-md">
                  <p className="text-black font-semibold">Digital Tools</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Metro Cure */}
          <div
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => navigate('/metro-cure')}
          >
            <img
              src={meterocure}
              alt="Metro Cure"
              className="w-96 h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute bottom-2 left-2 bg-white px-2 py-1 shadow-md">
              <p className="text-black font-semibold">Creative Thinking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
