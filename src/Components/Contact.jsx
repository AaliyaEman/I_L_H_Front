
import React from 'react';
import contact from '../Assets/contact.jpg';
import { Link } from 'react-router-dom'; 
import { FaPhoneAlt, FaLocationArrow, FaEnvelope } from 'react-icons/fa'; // Importing required icons

const Contact = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Image */}
        <img
          src={contact}
          alt="Example"
          className="w-full h-80 object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold bg-opacity-50 px-4 py-2 rounded">
            Contact
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute inset-0 flex items-center pt-32 justify-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex space-x-2">
              <li className="breadcrumb-item text-2xl font-bold">
                <Link to="/" className="text-white ">Home</Link>
              </li>
              <li className="breadcrumb-item text-2xl text-white font-bold" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="pt-32 text-center">
        <h4 className="text-cyan-500">Contact Us</h4>
        <h1>Contact For Any Query</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="row">
          {/* Contact Details */}
          <div className="col-md-6">
            <div className="mb-2">
              <h1 className="text-xl font-bold pt-10">Get In Touch</h1>

              {/* Office Section with Icon inside a box */}
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500 p-4 rounded-md mr-3">
                  <FaLocationArrow className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-lg text-cyan-500 font-semibold mb-0">Office</h2>
                  <p className="text-gray-700">
                    DCSE Block, UET Peshawar, Khyber Pakhtunkhwa 
                  </p>
                </div>
              </div>

              {/* Phone Section with Icon */}
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500 p-4 rounded-md mr-3">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-lg text-cyan-500 font-semibold mb-0">Phone</h2>
                  <p className="text-gray-700">+92-91-9222104</p>
                </div>
              </div>

              {/* Email Section with Icon */}
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500 p-4 rounded-md mr-3">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-lg text-cyan-500 font-semibold mb-0">Email</h2>
                  <a href="mailto:aaliyaeman00@gmail.com" className="text-black hover:underline">
                    info@i_learn_hub.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="col-md-6 flex justify-center items-center">
            <iframe
              title="Location Map"
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.716667516137!2d71.4855537!3d34.0017577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91734f3258839%3A0xcc5ebf88dd87f96!2sCISNR!5e0!3m2!1sen!2sus!4v1603245876598"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
