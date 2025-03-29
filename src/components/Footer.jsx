import React from "react";
// import { FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
      <Typography
        variant="small"
        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
      >
        &copy; {currentYear} <a href="#">Raheem Senegal</a>. All
        Rights Reserved.
      </Typography>
      <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
        <Typography as="a" href="https://github.com/rs0579" className="opacity-80 transition-opacity hover:opacity-100">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </Typography>
        <Typography as="a" href="https://www.linkedin.com/in/raheem-senegal/" className="opacity-80 transition-opacity hover:opacity-100">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.5c.86-1.28 2.28-2 3.75-2 2.48 0 4.5 2.02 4.5 4.5v6z"
            />
          </svg>
        </Typography>
        <Typography as="a" href="https://stackoverflow.com/users/28688448/raheem-s" className="opacity-80 transition-opacity hover:opacity-100">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.44 21v-5h2v7h-16v-7h2v5h12zM8.35 18.49h7.3v-2h-7.3v2zm.25-3.88l7.14 1.5.41-1.98-7.14-1.5-.41 1.98zm1.13-3.78l6.64 3 .83-1.86-6.64-3-.83 1.86zm2.2-3.65l5.66 4.5 1.27-1.6-5.66-4.5-1.27 1.6zm4.88-5.18l-1.56 1.24 4.5 5.66 1.56-1.24-4.5-5.66z" />
          </svg>
        </Typography>
      </div>
    </div>
    // <footer className="footer">
    //   <section className="footer-container">
    //     <a href="https://github.com/rs0579" target="_blank" rel="noopener noreferrer">
    //       <FaGithub className="icon" />
    //     </a>
    //     <a href="https://www.linkedin.com/in/raheem-senegal/" target="_blank" rel="noopener noreferrer">
    //       <FaLinkedin className="icon" />
    //     </a>
    //     <a href="https://stackoverflow.com/users/28688448/raheem-s" target="_blank" rel="noopener noreferrer">
    //       <FaStackOverflow className="icon" />
    //     </a>
    //   </section>
    // </footer>
  );
};

export default Footer