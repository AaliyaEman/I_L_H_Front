import React from "react";
import { FaPhoneAlt, FaLocationArrow, FaEnvelope ,  FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className=" bg-blue-400 text-white py-5 h-72">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
           <div className="col-md-6">
           <div> <h5 className="font-semibold text-lg mb-2">Contact</h5></div>
                      <div className="mb-2">
                        {/* Office Section with Icon inside a box */}
                        <div className="flex items-center mt-4 mb-2">
                          
                            <FaLocationArrow  className="mr-3" />
                            <p className="text-white">
                              DCSE UET Peshawar, Khyber Pakhtunkhwa
                            </p>
                          
                        </div>
          
                        {/* Phone Section with Icon */}
                        <div className="flex items-center mb-2">
                          
                            <FaPhoneAlt className="mr-3" />

                            <p className="text-white">+92-96-362642243</p>
                          
                        </div>
          
                        {/* Email Section with Icon */}
                        <div className="flex items-center mb-2">
                          
                            <FaEnvelope className="mr-3" />
                          
                          <div>
                            <a href="mailto:info@cisnr.com" className="text-white no-underline">
                              info@i_learn_hub.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
          
        {/*Social Links */}
        <div className=" mr-40">
      <h5 className="font-semibold text-lg mb-2 ">Follow Us</h5>
      <div className="flex space-x-4">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-white text-2xl hover:text-blue-400 hover:border-blue-400"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-white text-2xl hover:text-blue-400 hover:border-blue-400"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-white text-2xl hover:text-blue-400 hover:border-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
     </div>
         
        {/* Copyright */}
        <div className="  text-left mt-3 border-t border-gray-700 pt-3">
          <p className="text-sm"> Developed with 💙 by Aaliya and Eisha.</p>
        </div>
      </div>

      {/* Scroll To Top */}
      <a
        href="#"
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
        aria-label="Scroll to Top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
