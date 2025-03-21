
import right_arrow from '../assets/images/svg/right-arrow.svg'

const Contact = () => {
    return (
        <section className="section-nine" id="contact">
            <h3 className="creative brand fade_down">Let’s Talk <span> With Me</span></h3>
            <h3 className="visionary">We are the top creative agency for branding corp. We offer a full range of
                services to help clients improve their search engine rankings and drive more traffic to
                their websites.
            </h3>
            <form>
                <div className="input-main">
                    <div className="labal-input">
                        <p className="labal">NAME*</p>
                        <input type="text" placeholder="Your Full Name" name="YourName" autocomplete="off"></input>
                    </div>
                    <div className="labal-input">
                        <p className="labal">EMAIL*</p>
                        <input type="text" placeholder="Your Email Address" name="EmailID" autocomplete="off"></input>
                    </div>
                </div>
                <div className="input-main">
                    <div className="labal-input">
                        <p className="labal">SUBJECT*</p>
                        <input type="text" placeholder="Your Subject" name="subject" autocomplete="off"></input>
                    </div>
                </div>
                <div className="input-main">
                    <div className="labal-input">
                        <p className="labal">MESSAGE*</p>
                        <input type="text" placeholder="Write Your Message..." name="message" autocomplete="off"></input>
                    </div>
                </div>
                <div className="download-btn">
                    <a href="#" className="aryaBtn">
                        Send Message <img src={right_arrow} alt="right-arrow"></img>
                    </a>
                </div>
            </form>
        </section>
    )
}

export default Contact