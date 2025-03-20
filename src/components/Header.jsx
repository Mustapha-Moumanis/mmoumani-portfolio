import { IconContext, MoonStars, Sun } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const Header = ({ hamburgerRef, toggleMenu }) => {
    // Theme mode
    const [theme, setTheme] = useState(() => {
      return localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });
  
    useEffect(() => {
      document.documentElement.setAttribute("color-scheme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };
  
    return (
      <>
        <div className="container" id="mainHeader">
          <header>
            <IconContext.Provider
              value={{
                size: 25,
                weight: "bold",
              }}
            >

            <button
              className={`color-switcher header__switcher ${theme === "dark" ? "dark-mode" : "light-mode"}`}
              onClick={toggleTheme}
              >
              <em></em>
              {
                theme === "light" ? (<MoonStars />)
                : (<Sun/>)
              }
            </button>
            </IconContext.Provider>
  
            <div className="aryaBtn-toggle-main mt-0">
              <button id="menu-toggle" className="menu-toggle-button" onClick={toggleMenu}>
                <span className="hamburger" id="hamburger-1" ref={hamburgerRef}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </span>
              </button>
            </div>
          </header>
        </div>
      </>
    );
};

export default Header
