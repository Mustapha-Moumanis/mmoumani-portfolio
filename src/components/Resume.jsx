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
            <h2 className="creative brand pb-0 fade_down">Skills</h2>
            <div className="design-skill-sub-section">
                
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/C++.svg" width="50" height="50" alt="cpp-img"></img>
                    <div className="skill-counter-main">
                        <p>C/C++</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/Python.svg" width="50" height="50" alt="python-img"></img>
                    <div className="skill-counter-main">
                        <p>Python</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/icon-django.svg" width="50" height="50" alt="django-img"></img>
                    <div className="skill-counter-main">
                        <p>django</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/React.svg" width="50" height="50" alt="react-img"></img>
                    <div className="skill-counter-main">
                        <p>react</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/html.svg" width="50" height="50" alt="html-img"></img>
                    <div className="skill-counter-main">
                        <p>html</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/css.svg" width="50" height="50" alt="css-img"></img>
                    <div className="skill-counter-main">
                        <p>css</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/JavaScript.svg" width="50" height="50" alt="js-img"></img>
                    <div className="skill-counter-main">
                        <p>js</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/icon-bootstrap.svg" width="50" height="50" alt="bootstrap-img"></img>
                    <div className="skill-counter-main">
                        <p>bootstrap</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/Docker.svg" width="50" height="50" alt="docker-img"></img>
                    <div className="skill-counter-main">
                        <p>docker</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/Figma.svg" width="50" height="50" alt="figma-img"></img>
                    <div className="skill-counter-main">
                        <p>figma</p>
                    </div>
                </div>
                
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/Git.svg" width="50" height="50" alt="git-img"></img>
                    <div className="skill-counter-main">
                        <p>git</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/Nginx.svg" width="50" height="50" alt="nginx-img"></img>
                    <div className="skill-counter-main">
                        <p>nginx</p>
                    </div>
                </div>
                <div className="design-skills-img-main">
                    <img src="../assets/images/svg/skills/Postman.svg" width="50" height="50" alt="postman-img"></img>
                    <div className="skill-counter-main">
                        <p>postman</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume
