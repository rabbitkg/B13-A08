import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-auto border-t border-gray-700">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-white mb-4 inline-block border-b-2 border-green-500 pb-1">
              About
            </h2>

            <p className="text-sm leading-relaxed text-gray-400">
              We provide trusted cattle for Qurbani Eid. Easily browse, compare,
              and choose healthy animals with confidence. Our goal is to make
              your Qurbani experience simple, safe, and reliable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4 inline-block border-b-2 border-green-500 pb-1">
              Contact
            </h2>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500" />
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500 text-xs" />
                +880 1750-642449
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-green-500 text-lg" />
                qurbani.hat@yahoo.com
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4 inline-block border-b-2 border-green-500 pb-1">
              Follow Us
            </h2>

            <div className="flex gap-3">

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-green-500 transition duration-300 cursor-pointer shadow-md hover:scale-110 ">
                <FaFacebookF className="text-gray-800 text-2xl" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-green-500 transition duration-300 cursor-pointer shadow-md hover:scale-110">
                <FaInstagram className="text-gray-800 text-2xl" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-green-500 transition duration-300 cursor-pointer shadow-md hover:scale-110">
                <FaTwitter className="text-gray-800 text-2xl" />
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="text-center text-xs sm:text-sm py-4 border-t border-gray-700 bg-gray-950 text-gray-400">
        © {new Date().getFullYear()} 
        <span className="text-green-500 font-medium"> Qurbani Market</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;