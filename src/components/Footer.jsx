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

export default Footer;



// const FooterNav = () => {

//     return (
//         <>
//             <section class="bg-image hover-overlay hover-zoom hover-shadow ripple">
//                 <a href="https://github.com/rs0579"><img src="./src/assets/github.svg" alt="github cat" /></a>
//                 <a href="https://stackoverflow.com/users/28688448/raheem-s"><img src="./src/assets/icons8-stack-overflow-48.png" alt="stack overflow" /></a>
//                 <a href="https://www.linkedin.com/in/raheem-senegal/"><img src="./src/assets/linkedin.jpg" alt="linkedin" /></a>

//                 <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="w-100" />
//                 <a href="#!">
//                     <div class="mask" style="background-color: hsla(195, 83%, 58%, 0.2)"></div>
//                 </a>
//             </section>
//         </>

//     )
// }
// export default FooterNav;