import "./aboutus.css";
// import insta from '../images/Instagram_icon.png.webg'
// import link from "../images/link.webp";

import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Aboutus = () => {
  return (
    <div className="fixed z-40 w-fit top-6 md:mt-20  shadow-2xl md:mx-20 mx-4 rounded-lg overflow-hidden bg-[#e9e8e8ca] border-[#737373]  border-[1px] ">
      <h2 id="our-team" className=" font-semibold text-[40px] sm:text-[50px] text-center md:py-5 py-1">
        About Us
      </h2>
      <div className="row gap-3 items-center ">
        <div className="container1">
          <div className="column">
            <h2 className="name abtus">HANUSHA JAIN</h2>
            <p className="college">U22CS066-SVNIT, Surat</p>
            <p className="about-text line-clamp-4 md:line-clamp-none">
              "Hello there, I'm a dedicated and hardworking individual, driven
              by a deep passion for technology. I'm currently in my second year
              of a B.Tech program and have consistently delivered strong
              academic performance. My technical skills are a point of pride,
              and I thoroughly enjoy working collaboratively in teams. I'm
              excited to bring my enthusiasm and expertise to our projects and
              contribute to their success
            </p>
          </div>
          <div className="flex text-[#ffffff] w-full pt-4 items-center justify-center gap-10">
            <a
              href="https://www.linkedin.com/in/hanusha-jain-332b06288/"
              className=" w-[36px] aspect-square text-[25px] rounded-md flex justify-center items-center linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/hanushajain66"
              className=" w-[36px] aspect-square text-[25px] rounded-md flex justify-center items-center github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/hanushajain"
              className=" w-[36px] aspect-square text-[25px] rounded-md flex justify-center items-center instagram "
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="container1">
          <div className="column">
            <h2 className="name abtus">MAYANK KASHYAP</h2>
            <p className="college">U22ECE066-SVNIT, Surat</p>
            <p className="about-text line-clamp-4 md:line-clamp-none">
              "Hello there! I'm a passionate individual currently embarking on
              my second year of the Bachelor of Technology (B.Tech) journey. I
              have a penchant for maintaining a serene disposition and a
              deep-seated love for crafting projects that drive my enthusiasm.
              Beyond my passion for projects, I also take pride in my strong and
              effective leadership skills."
              {/* <FaInstagramSquare/> */}
            </p>
          </div>
          <div className="flex text-[#ffffff] w-full pt-4 items-center justify-center gap-10">
            <a
              href="https://www.linkedin.com/in/mayank-kashyap-20114a24b/"
              className=" w-[36px] aspect-square text-[25px] rounded-md flex justify-center items-center linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/mayankified"
              className=" w-[36px] aspect-square text-[25px] rounded-md flex justify-center items-center github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mynkashh"
              className=" w-[36px] aspect-square text-[25px] rounded-md flex justify-center items-center instagram "
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
