import React from 'react';
import two from '../Assets/2.png';
import three from '../Assets/3.png';
import six from '../Assets/6.png';
import seven from '../Assets/7.png';
import thirteen from '../Assets/13.png';
import fifteen from '../Assets/15.png';

const Belowtext = () => {
  return (
    <div>
      <h2 className='px-5 pt-20 text-cyan-500 font-serif font-bold'>Welcome to I_LEARN_HUB — where curiosity meets clarity.</h2>
      <p className='px-5 pt-10 text-blue'>
    
      At I Learn Hub, we’re on a mission to make complex topics simple and accessible for everyone. Whether you're diving into web development, exploring digital electronics, or just getting started with programming, you’ll find step-by-step guides, practical examples, and beginner-friendly explanations tailored to your learning style.

This is more than just a learning platform — it's a space where students, hobbyists, and tech enthusiasts come together to grow, experiment, and succeed. We believe in learning by doing, which is why our tutorials often include real-world projects, code walkthroughs, and visual explanations to help you truly understand the concepts.

No matter your background, if you have the passion to learn, you're in the right place. Start your journey today — because every expert was once a beginner.


      </p>
      
      {/* Core Focus Areas Section (Enlarged) */}
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


     
    </div>
  );
}

export default Belowtext;