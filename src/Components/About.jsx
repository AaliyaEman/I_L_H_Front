import React from 'react';
import Card from './Card.jsx';
import ban1 from '../Assets/about.webp';
import om from '../Assets/Batch.jpeg';
import { Link } from 'react-router-dom'; 

const About = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Image */}
        <img
          src={ban1}
          alt="Example"
          className="w-full h-72 object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="  text-yellow-300 text-4xl md:text-5xl lg:text-7xl font-bold bg-opacity-50 px-4 py-2 rounded">
            About Us
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute inset-0 flex items-center pt-24 md:pt-32 justify-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex space-x-2">
              <li className="breadcrumb-item text-lg md:text-2xl font-bold">
                <Link to="/" className="text-yellow-300">Home</Link>
              </li>
              <li className="breadcrumb-item text-lg md:text-2xl text-yellow-300 font-bold" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white text-center">
  <div className="container mx-auto">
       <h4 className="text-cyan-500 font-bold mb-4 text-2xl">Our Core Pillars</h4>
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Empowering Learning Through Innovation</h2>
    <p className="max-w-4xl mx-auto text-gray-600 text-lg mb-12">
      I Learn Hub is built on the belief that education should be accessible, practical, and inspiring. Our platform is designed to equip learners with real-world skills in a way that’s interactive, flexible, and community-driven.
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      <div className="w-52 h-52 bg-blue-100 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
        <i className="bi bi-code-slash text-blue-600 text-5xl mb-3"></i>
        <p className="text-base font-semibold text-gray-700">Hands-On Coding</p>
      </div>
      <div className="w-52 h-52 bg-green-100 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
        <i className="bi bi-laptop text-green-600 text-5xl mb-3"></i>
        <p className="text-base font-semibold text-gray-700">Practical Projects</p>
      </div>
      <div className="w-52 h-52 bg-yellow-100 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
        <i className="bi bi-people-fill text-yellow-600 text-5xl mb-3"></i>
        <p className="text-base font-semibold text-gray-700">Community Support</p>
      </div>
      <div className="w-52 h-52 bg-red-100 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
        <i className="bi bi-award-fill text-red-600 text-5xl mb-3"></i>
        <p className="text-base font-semibold text-gray-700">Recognized Learning</p>
      </div>
      <div className="w-52 h-52 bg-purple-100 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
        <i className="bi bi-lightbulb text-purple-600 text-5xl mb-3"></i>
        <p className="text-base font-semibold text-gray-700">Skill-Based Growth</p>
      </div>
    </div>
  </div>
  </section>

      <Card />

      <div className="flex flex-col md:flex-row pt-32 mb-14 px-5 md:px-40">
        <div className="w-full md:w-1/2 h-auto mb-5 md:mb-0">
          <img 
            src={om}
            alt="Your image description" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="w-full md:w-1/2 flex pl-0 md:pl-9 pr-0 md:pr-24">
          <div>
            <h6 className='text-cyan-500 text-lg'>ABOUT US</h6>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Welcome To I_Learn_Hub</h2>
            <p className="text-base md:text-lg text-gray-700">
             At I Learn Hub, we’re on a mission to make complex topics simple and accessible for everyone. Whether you're diving into web development, exploring digital electronics, or just getting started with programming, you’ll find step-by-step guides, practical examples, and beginner-friendly explanations tailored to your learning style.

This is more than just a learning platform — it's a space where students, hobbyists, and tech enthusiasts come together to grow, experiment, and succeed. We believe in learning by doing, which is why our tutorials often include real-world projects, code walkthroughs, and visual explanations to help you truly understand the concepts.

No matter your background, if you have the passion to learn, you're in the right place. Start your journey today — because every expert was once a beginner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;