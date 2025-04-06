import { useTypewriter } from 'react-simple-typewriter'
import { motion } from "motion/react"
import resume from '../assets/pdf/Mustapha-Moumanis-resume.pdf'
import download_icon from '../assets/images/svg/download-svg.svg'
import profile_img from '/Mustapha-Moumanis.webp'
import SlideUp from '../utlits/animations/slideUp'

const Home = () => {
    const [text] = useTypewriter({
        words: ['HI THERE!', 'I’M Moumanis Mustapha_', 'Full-Stack Developer'],
        loop: 0,
    })
    return (
        <section className="section-one" id="home">
            <div className="row section-one-row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <SlideUp>
                        <p className="hi-there">Hi there! <span>👋</span></p>
                    </SlideUp>
                    <SlideUp delay={2}>
                        <h1 className="creative">Mustapha Moumanis</h1>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <h2 className="visionary">I'm a <strong>Full-Stack Developer</strong> based in Morocco. I specialize in building dynamic, responsive web applications and I am passionate about creating seamless, innovative digital experiences from both front-end to back-end.</h2>
                    </SlideUp>

                    <div className="download-btn">
                        <a href={resume} className="aryaBtn" download='resume'>
                            Download CV <img src={download_icon} alt="download-svg" loading="lazy"></img>
                        </a>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 portfolio-sec-img-col">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            scale: { type: "spring", duration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <div className="position-relative zoom_in">
                            <img className="portfolio-sec-img" src={profile_img} alt="Mustapha Moumanis — Full-Stack Developer based in Morocco" title="Mustapha Moumanis"></img>
                            
                            <div className="sec-name">
                                <p className="ityped">{text}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Home
