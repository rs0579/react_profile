import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between" id="footer-div">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
        >

          &copy; {currentYear} <a href="#">Raheem Senegal</a>. All
          Rights Reserved.
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <a href="https://github.com/rs0579" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/raheem-senegal/" className="opacity-80 transition-opacity hover:opacity-100">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="https://stackoverflow.com/users/28688448/raheem-s" className="opacity-80 transition-opacity hover:opacity-100">
            <FaStackOverflow className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer