import web_icon from '../assets/images/svg/web.svg'
import ui_design_icon from '../assets/images/svg/UI-design.svg'
import SlideUp from '../utlits/animations/slideUp'

const Services = () => {
    return (
        <section className="section-three" id="services">
            <SlideUp>
                <h3 className="creative brand">
                    Empowering Brands with <span>Digital Solutions</span>
                </h3>
            </SlideUp>
            <h3 className="visionary">
                I specialize in turning ideas into reality with tailored web development and thoughtful design, creating digital solutions that combine innovation and strategy.
            </h3>
            <SlideUp delay={3}>
                <div className="services-box" id="services-box">
                    <div>
                        <img className="services-icon" src={web_icon} alt="web" loading="lazy"></img>
                        <p className="web-dev-text">Web Development</p>
                    </div>
                    <p className="visionary">
                    I build responsive, user-centric web applications that seamlessly integrate functionality and aesthetics. From real-time chat systems to Single Page Applications (SPA), I create scalable and interactive solutions using modern technologies like HTML, CSS, JavaScript, Django, and React.
                    </p>
                </div>
            </SlideUp>
            <SlideUp delay={4}>
                <div className="services-box">
                    <div>
                        <img className="services-icon" src={ui_design_icon} alt="UI/UX Design" loading="lazy"></img>
                        <p className="web-dev-text">UI/UX Design</p>
                    </div>
                    <p className="visionary">
                    I design intuitive interfaces that enhance user experiences. By focusing on clarity, simplicity, and functionality, I ensure users can navigate easily while enjoying a visually appealing interface.
                    </p>
                </div>
            </SlideUp>
        </section>
    )
}

export default Services