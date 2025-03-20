const Home = () => {
  return (
    <section className="section-one" id="home">
        <div className="row section-one-row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
            <p className="hi-there">Hi there! <span>👋</span></p>
            <h1 className="creative">Full-Stack Developer.</h1>
            <h2 className="visionary">My name is Mustapha Moumanis, and I'm a Full-Stack Developer based in Morocco. I specialize in building dynamic, responsive web applications and I am passionate about creating seamless, innovative digital experiences from both front-end to back-end.</h2>

            <div className="download-btn">
            <a href="/src/assets/pdf/Mustapha-Moumanis-resume.pdf" className="aryaBtn">
                Download CV <img src="/src/assets/images/svg/download-svg.svg" alt="download-svg"></img>
            </a>
            </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 portfolio-sec-img-col">
            <div className="position-relative zoom_in">
                <img className="portfolio-sec-img" src="/src/assets/images/home-images/pic.jpg"
                    alt="moumanis mustapha"></img>
                <div className="sec-name">
                    <p className="ityped">I’M Moumanis Mustapha_</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Home
