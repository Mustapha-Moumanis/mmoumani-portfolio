import { IconContext, LinkedinLogo, GithubLogo, DiscordLogo } from "@phosphor-icons/react";
import {useState, useRef,useEffect} from 'react'
import menu_home_icon from '../assets/images/svg/home.svg'
import menu_about_icon from '../assets/images/svg/about.svg'
import menu_services_icon from '../assets/images/svg/services.svg'
import menu_portfolio_icon from '../assets/images/svg/portfolio.svg'
import menu_resume_icon from '../assets/images/svg/resume.svg'
import menu_contact_icon from '../assets/images/svg/contact.svg'

const Sidebar = ({ menuRef, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.classList.add("show");
    } else {
      menuRef.current.classList.remove("show");
    }
  }, [isOpen]);

  return (
    <>
      <div className={`side-menu-main ${isOpen ? "show" : ""}`} ref={menuRef}>
        <div className="list-menu menu-list-main">
          <ul className="side-menu-ul">
            <li>
              <a href="#home">HOME<img src={menu_home_icon} alt="home" /></a>
            </li>
            <li>
              <a href="#about">ABOUT ME<img src={menu_about_icon} alt="about" /></a>
            </li>
            <li>
              <a href="#services">SERVICES<img src={menu_services_icon} alt="services" /></a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO<img src={menu_portfolio_icon} alt="portfolio" /></a>
            </li>
            <li>
              <a href="#resume">RESUME<img src={menu_resume_icon} alt="resume" /></a>
            </li>
            <li>
              <a href="#contact">CONTACT ME<img src={menu_contact_icon} alt="contact" /></a>
            </li>
          </ul>
        </div>
        <div className="list-menu">
          <p className="phone-text">PHONE:</p>
          <a href="tel:+(212)602979288" className="phone-num">
            <p>+212602979288</p>
          </a>
          <p className="phone-text">EMAIL:</p>
          <a href="mailto:moumanis.mustapha@gmail.com" className="phone-num">
            <p>moumanis.mustapha@gmail.com</p>
          </a>
          <div className="media-main">
          <IconContext.Provider
            value={{
              size: 20,
              weight: "bold",
            }}
          >
            <a href="https://github.com/Mustapha-Moumanis" className="media-icons" target="_blank">
              <GithubLogo />
            </a>
            <a href="https://www.linkedin.com/in/mustapha-moumanis/" className="media-icons" target="_blank">
              <LinkedinLogo />
            </a>
            <a href="https://discord.com/users/673013041725440010" className="media-icons" target="_blank">
              <DiscordLogo />
            </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar
