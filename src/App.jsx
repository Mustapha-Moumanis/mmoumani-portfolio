import { useRef, useEffect } from 'react'
import { press } from "motion"
// import reactLogo from './/src/assets/react.svg'
// import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("show");

      if (hamburgerRef.current) {
        hamburgerRef.current.classList.toggle("is-active", menuRef.current.classList.contains("show"));
      }
    }
  };

  // useEffect(() => {
  //   const menuItems = document.querySelectorAll(".menu-list-main li");

  //   const handleMenuItemClick = (e) => {
  //     e.preventDefault();
  //     const link = e.currentTarget.querySelector("a");
  //     if (link && link.getAttribute("href")) {
  //       const targetId = link.getAttribute("href").substring(1);
  //       const targetElement = document.getElementById(targetId);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //     if (menuRef.current) menuRef.current.classList.remove("show");
  //     if (hamburgerRef.current) hamburgerRef.current.classList.remove("is-active");
  //   };

  //   menuItems.forEach((item) => item.addEventListener("click", handleMenuItemClick));

  //   const observer = new MutationObserver(() => {
  //     if (menuRef.current && !menuRef.current.classList.contains("show")) {
  //       if (hamburgerRef.current) hamburgerRef.current.classList.remove("is-active");
  //     }
  //   });

  //   if (menuRef.current) {
  //     observer.observe(menuRef.current, { attributes: true, attributeFilter: ["class"] });
  //   }

  //   return () => {
  //     menuItems.forEach((item) => item.removeEventListener("click", handleMenuItemClick));
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      {/* Header */}
      <Header hamburgerRef={hamburgerRef} toggleMenu={toggleMenu} />

      <div className="container">
        <div className="row main-row">
          <div className="col-xxl-3 col-xl-3 col-lg-4">
            {/* Sidebar */}
            <Sidebar menuRef={menuRef} toggleMenu={toggleMenu} />
          </div>

          <div className="col-xxl-9 col-xl-9 col-lg-12" data-bs-spy="scroll">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Resume />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
