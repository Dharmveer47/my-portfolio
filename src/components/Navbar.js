import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "../ImgIco/Resume.pdf"
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import Logo from "../ImgIco/Logo.svg";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [MenuClick, setMenuCli] = useState("");
  const showLinks = () => {
    if (MenuClick === "Links2") {
      setMenuCli(" ");
    } else {
      setMenuCli("Links2");
    }
  };
  const scrollbar2 = () => {
    window.scroll(0, window.innerHeight);
  };
  const scrollbar3 = () => {
    window.scroll(window.innerHeight, 2 * window.innerHeight);
  };
  const scrollbar4 = () => {
    window.scroll(0, 10000);
  };

  return (
    <div
      className="NavBar "
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="logo">
        <Link to="/" className="withinLink">
          <img src={Logo} alt="HeroLogo" />
        </Link>
      </div>
      <ul className={`Links ${MenuClick}`}>
        <li className="btn btn-outline-info">Home</li>
        <li onClick={scrollbar2} className="btn btn-outline-info">
          <Link to="/" className="withinLink">
            About
          </Link>
        </li>
        <li onClick={scrollbar3} className="btn btn-outline-info">
          <Link to="/" className="withinLink">
            Projects
          </Link>
        </li>
        <li onClick={scrollbar4} className="btn btn-outline-info">
          Contact
        </li>
        <div className="">
          <a
            href={Resume}
            rel="noopener noreferrer"
            target="_blank"
            className="border btn resume btn-outline-info"
          >
          Resume
          </a>
          
        </div>
      </ul>
      <div className="Menu" onClick={showLinks}>
        <RiMenu3Fill style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  );
};

export default Navbar;
