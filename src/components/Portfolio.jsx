import SlideUp from '../utlits/animations/slideUp.jsx';
import { projectsData } from '../utlits/projectData/projectData.jsx'
import Models from './Models.jsx'

const Portfolio = () => {
    return (
        <section className="section-four" id="portfolio">
            <SlideUp>
                <h2 className="creative">Featured Projects</h2>
                <h2 className="visionary">
                    I bring your ideas to life with my step-by-step approach, guiding projects from initial consultation to final delivery.
                </h2>
            </SlideUp>
            <div className="tabContainer">                           
                <div id="one" className="Tabcondent tab-active">
                    <div className="gallery">
                        {projectsData.map(({ id, data_bs_target, src, overlay_text, title }) => <Card key={id} delay={id} data_bs_target={data_bs_target} src={src} overlay_text={overlay_text} title={title}/>)}
                    </div>
                </div>
                <Models />
            </div>
        </section>
    )
}

export default Portfolio

import content_icon from "../assets/images/svg/content-svg.svg"

const Card = ({ delay, data_bs_target, title, src, overlay_text}) => {
    return (
        <SlideUp delay={delay}>
            <div className="gallery-item">
                <div className="gallery-item-sub" data-content-type="content" data-bs-toggle="modal"
                    data-bs-target={data_bs_target}>
                    <img src={src} alt={overlay_text} loading="lazy" width="400" height="auto"></img>
                    <div className="overlay">
                        <img src={content_icon} alt="content-svg" className="content-icon" loading="lazy"></img>
                        <p className="overlay-text">{overlay_text}</p>
                    </div>
                </div>
                <div className="gallery-info">
                    <h3>{title}</h3>
                </div>
            </div>
        </SlideUp>
    )
}