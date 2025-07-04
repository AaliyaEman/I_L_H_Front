

import React from 'react';
import { useNavigate } from 'react-router-dom';
import cli_1 from '../Assets/cli_1.png';
import cli_2 from '../Assets/cli_2.png';
import cli_3 from '../Assets/cli_3.png';
import cli_4 from '../Assets/cli_4.png';
import cli_5 from '../Assets/cli_5.png';
import cli_6 from '../Assets/cli_6.png';
import cli_7 from '../Assets/cli_7.png';
import cli_8 from '../Assets/cli_8.png';
import cli_9 from '../Assets/cli_9.png';
import cli_10 from '../Assets/cli_10.png';
import cli_11 from '../Assets/cli_11.png';
import cli_12 from '../Assets/cli_12.png';
import cli_13 from '../Assets/cli_13.png';
import cli_14 from '../Assets/cli_14.png';
import cli_15 from '../Assets/cli_15.png';
import cli_16 from '../Assets/cli_16.png';

const images = [
  { src: cli_1 },
  { src: cli_2 },
  { src: cli_3 },
  { src: cli_4 },
  { src: cli_5 },
  { src: cli_6 },
  { src: cli_7 },
  { src: cli_8 },
  { src: cli_9 },
  { src: cli_10 },
  { src: cli_11 },
  { src: cli_12 },
  { src: cli_13 },
  { src: cli_14 },
  { src: cli_15 },
  { src: cli_16 },
];

const OurClients = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden pb-32">
      {/* Title */}
      <h4 className="text-center font-bold text-cyan-500 pt-2">Collaboration & Reach</h4>
      <h1 className="text-center font-bold text-black pt-3 mb-6">Our Learning Partners</h1>

      {/* Image Slider */}
      <div className="w-full pt-5 overflow-hidden">
        <div
          className="flex gap-4 animate-marquee"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 relative overflow-hidden cursor-pointer group"
              onClick={() => navigate(img.link)}
            >
              <img
                src={img.src}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content; /* Ensure images overflow to animate smoothly */
          }
        `}
      </style>
    </div>
  );
};

export default OurClients;



