import SlideUp from '../utlits/animations/slideUp.jsx';
import { AllSkillsData } from '../utlits/projectData/projectData';
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  return (
    <section className="section-six" id="resume">
        <div className="row resume-sec-row">
            <div className="col-xxl-6 col-lg-6">
                <Education />
            </div>
            <div className="col-xxl-6 col-lg-6">
                <Experience />
            </div>
        </div>

        <div className="coding-skill-section">
            <SlideUp>
                <h2 className="creative brand pb-0">Skills</h2>
            </SlideUp>
            <div className="design-skill-sub-section">
                {AllSkillsData.map(({ id, icon, alt, name }) => <Card key={id} delay={id} icon={icon} alt={alt} name={name}/>)}
            </div>
        </div>
    </section>
  )
}

export default Resume

const Card = ({ delay, icon, alt, name}) => {
    return (
        <SlideUp delay={delay}>
            <div className="design-skills-img-main">
                <img src={icon} width="50" height="50" alt={alt} loading="lazy"></img>
                <div className="skill-counter-main">
                    <p>{name}</p>
                </div>
            </div>
        </SlideUp>
    )
}