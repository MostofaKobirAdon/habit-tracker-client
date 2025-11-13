import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/logoFull.png";

const Footer = () => {
  return (
    <div className="bg-accent py-3 shadow-2xl">
      <div className="lg:max-w-6xl max-w-11/12 md:max-w-[700px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img src={logo} className="w-32 mb-4" />
          <p className="text-gray-800">
            Build streaks, track habits, and stay motivated every day!
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-800 space-y-2">
            <li>Email: info@habittracker.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Habit St, Wellness City</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="text-gray-800 space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-106"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-106"
            >
              <FaXTwitter size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-106"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-106"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        &copy; 2025 HabitTracker. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
