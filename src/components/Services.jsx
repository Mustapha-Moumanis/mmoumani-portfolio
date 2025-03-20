import web_icon from '../assets/images/svg/web.svg'
import ui_design_icon from '../assets/images/svg/UI-design.svg'

const Services = () => {
    return (
        <section className="section-three" id="services">
            <h3 className="creative brand fade_down">
                Empowering Brands with <span>Digital Solutions</span> That Combine <span>Innovation</span> and <span>Strategy</span>
            </h3>
            <h3 className="visionary fade_down">
                Turning Ideas into Reality with Tailored Web Development and Thoughtfully Designed User Experiences.
            </h3>
            <div className="services-box fade_down" id="services-box">
                <div>
                    <img className="services-icon" src={web_icon} alt="web"></img>
                    <p className="web-dev-text">Web Development</p>
                </div>
                <p className="visionary">
                    Building responsive, user-centric web applications that seamlessly integrate functionality and aesthetics. From real-time chat systems to Single Page Applications (SPA), I specialize in creating efficient, scalable, and interactive solutions using modern technologies like HTML, CSS, JavaScript, and frameworks like Django.
                </p>
            </div>
            <div className="services-box fade_down">
                <div>
                    <img className="services-icon" src={ui_design_icon} alt="UI/UX Design"></img>
                    <p className="web-dev-text">UI/UX Design</p>
                </div>
                <p className="visionary">
                    Designing intuitive interfaces and enhancing user experiences through thoughtful design. My work emphasizes clarity, simplicity, and functionality, ensuring users navigate effortlessly while enjoying a visually appealing interface.
                </p>
            </div>
        </section>
    )
}

export default Services