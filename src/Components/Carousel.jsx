import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // You can remove this if you're using Tailwind CSS exclusively
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // You can remove this if you're using Tailwind CSS exclusively
import carouselImage1 from '../Assets/carousel_1.jpg';
import carouselImage2 from '../Assets/carousel_2.png';

const Carousel = () => {
  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleInterval');
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 20000, // Slows down autoplay (20 seconds per slide)
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleInterval"
      className="relative carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="20000" // Slows down autoplay globally
    >
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <img
            src={carouselImage1}
            className="block w-full h-80 object-cover"
            alt="Wild Landscape"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            Learning today, leading tomorrow.
            </h2>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={carouselImage2}
            className="block w-full h-80 object-cover"
            alt="Camera"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              Your journey to knowledge starts here.
            </h2>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;