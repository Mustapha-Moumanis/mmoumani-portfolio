import { useRef, Suspense, lazy } from 'react';

import Preloader from './utlits/animations/preloader.jsx'

const Header = lazy(() => import('./components/Header.jsx'));
const Sidebar = lazy(() => import('./components/Sidebar.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Services = lazy(() => import('./components/Services.jsx'));
const Portfolio = lazy(() => import('./components/Portfolio.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

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

  return (
    <>
    
      <Preloader />
      <Header hamburgerRef={hamburgerRef} toggleMenu={toggleMenu} />

      <div className="container">
        <div className="row main-row">

          <div className="col-xxl-3 col-xl-3 col-lg-4">
            <Sidebar menuRef={menuRef} toggleMenu={toggleMenu} />
          </div>

          <div className="col-xxl-9 col-xl-9 col-lg-12" data-bs-spy="scroll">
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
              <About />
              <Services />
              <Portfolio />
              <Resume />
              <Contact />
              <Footer />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
