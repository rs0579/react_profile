import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <a href="https://github.com/rs0579" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/raheem-senegal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://stackoverflow.com/users/28688448/raheem-s" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow className="icon" />
        </a>
      </section>
    </footer>
  );
};

export default Footer