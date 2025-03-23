import { chatSkillsData, OptimizAppData, PingPongSkillsData, webServSkillsData } from "../utlits/projectData/projectData"

// Model 1
import ping_pong_home_screen from "../assets/images/works/ping-pong-app/ping-pong-home-screen.webp"
import ping_pong_app from "../assets/images/works/ping-pong-app/ping-pong-app.webp"
import register_dark from "../assets/images/works/ping-pong-app/register-dark.png"
import register_light from "../assets/images/works/ping-pong-app/register-light.png"
import login_dark from "../assets/images/works/ping-pong-app/login-dark.png"
import login_light from "../assets/images/works/ping-pong-app/login-light.png"
import reset_password_1_dark from "../assets/images/works/ping-pong-app/reset-password-1-dark.png"
import reset_password_1_light from "../assets/images/works/ping-pong-app/reset-password-1-light.png"
import reset_password_2_dark from "../assets/images/works/ping-pong-app/reset-password-2-dark.png"
import reset_password_2_light from "../assets/images/works/ping-pong-app/reset-password-2-light.png"
import security_settings_dark from "../assets/images/works/ping-pong-app/security-settings-dark.png"
import security_settings_light from "../assets/images/works/ping-pong-app/security-settings-light.png"
import enable_2fa_dark from "../assets/images/works/ping-pong-app/enable-2fa-dark.png"
import enable_2fa_light from "../assets/images/works/ping-pong-app/enable-2fa-light.png"
import docker from "../assets/images/works/ping-pong-app/docker.png"

// Model 2
import SEO_assurance_before from "../assets/images/works/SEO-assurance-app/before.png"
import SEO_assurance_after from "../assets/images/works/SEO-assurance-app/after.png"

// Model 3

import chat_home_screen from "../assets/images/works/chat-app/chat-app.png"
import chat_mockup_app from "../assets/images/works/chat-app/chat-mockup-1.png"
import login_1400x1400 from "../assets/images/works/chat-app/login-1400x1400.png"
import login_800x800 from "../assets/images/works/chat-app/login-800x800.png"
import logout_1400x1400 from "../assets/images/works/chat-app/logout-1400x1400.png"
import logout_800x800 from "../assets/images/works/chat-app/logout-800x800.png"
import register_1400x1400 from "../assets/images/works/chat-app/register-1400x1400.png"
import register_800x800 from "../assets/images/works/chat-app/register-800x800.png"
import reset_password_1400x1400 from "../assets/images/works/chat-app/reset-password-1400x1400.png"
import reset_password_800x800 from "../assets/images/works/chat-app/reset-password-800x800.png"
import change_password_1400x1400 from "../assets/images/works/chat-app/change-password-1400x1400.png"
import change_password_800x800 from "../assets/images/works/chat-app/change-password-800x800.png"
import profile_1400x1400 from "../assets/images/works/chat-app/profile-1400x1400.png"
import profile_800x800 from "../assets/images/works/chat-app/profile-800x800.png"
import settings_1400x1400 from "../assets/images/works/chat-app/settings-1400x1400.png"
import settings_800x800 from "../assets/images/works/chat-app/settings-800x800.png"
import disctop_content_1400x1400 from "../assets/images/works/chat-app/design/disctop-content-1400x1400.png"
import disctop_content_800x800 from "../assets/images/works/chat-app/design/disctop-content-800x800.png"
import t_shirt_1400x1400 from "../assets/images/works/chat-app/design/t-shirt-1400x1400.png"
import t_shirt_800x800 from "../assets/images/works/chat-app/design/t-shirt-800x800.png"
import cap_1400x1400 from "../assets/images/works/chat-app/design/cap-1400x1400.png"
import cap_800x800 from "../assets/images/works/chat-app/design/cap-800x800.png"
import pen_1400x1400 from "../assets/images/works/chat-app/design/pen-1400x1400.png"
import pen_800x800 from "../assets/images/works/chat-app/design/pen-800x800.png"
import cup_1400x1400 from "../assets/images/works/chat-app/design/cup-1400x1400.png"
import cup_800x800 from "../assets/images/works/chat-app/design/cup-800x800.png"
import van_1400x1400 from "../assets/images/works/chat-app/design/van-1400x1400.png"
import van_800x800 from "../assets/images/works/chat-app/design/van-800x800.png"
import truck_1400x1400 from "../assets/images/works/chat-app/design/truck-1400x1400.png"
import truck_800x800 from "../assets/images/works/chat-app/design/truck-800x800.png"

// Model 4
import webserv from "../assets/images/works/webserver/webserv.png"
import webserv_gif from "../assets/images/works/webserver/webserv.gif"
import Fancybox from "../utlits/Fancyapps/Fancybox"
import SlideUp from "../utlits/animations/slideUp"


const Models = () => {
    return (
        <>
            <div className="modal fade" id="pingPongModal" tabIndex="1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="creative">Ping Pong Application</h2>
                            <br />
                            <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                            >
                            <figure className="gallery__item">
                                <a href={ping_pong_home_screen} data-fancybox="main-gallery" data-caption="Ping Pong App">
                                    <img className="content-img" src={ping_pong_app} alt="Ping Pong App Screenshot" />
                                </a>
                            </figure>
                            </Fancybox>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                        <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
                                    </svg>
                                    <span>Description</span>
                                </span>
                                <p className="ipsum">
                                    This project involves developing a real-time multiplayer Pong game with a modern web-based platform. Key elements include:
                                    <br />
                                    <span className="cuberto">Backend:</span> Built with <span className="text_bold">Django</span> and <span className="text_bold">Django REST Framework</span> (DRF) for API development, along with <span className="text_bold">PostgreSQL</span> for secure data handling, user management, <span className="text_bold">JWT</span>-based authentication, and <span className="text_bold">OAuth2</span> integration.<br />
                                    <span className="cuberto">Frontend:</span> <span className="text_bold">Responsive</span> <span className="text_bold">single-page</span> application using vanilla <span className="text_bold">JavaScript</span> and <span className="text_bold">Bootstrap</span> for styling and <span className="text_bold">multi-browser</span> compatibility.<br />
                                    <span className="cuberto">Gameplay:</span> <span className="text_bold">Local</span> Pong matches, <span className="text_bold">tournaments</span>, and customizable <span className="text_bold">game options</span> with advanced <span className="text_bold">3D graphics</span> (Three.js).<br />
                                    <span className="cuberto">User Management:</span> Features include secure <span className="text_bold">registration</span>, <span className="text_bold">profile</span> customization, <span className="text_bold">friend</span> system, live <span className="text_bold">chat</span>, and match <span className="text_bold">history</span>.<br />
                                    <span className="cuberto">Security:</span> Implements <span className="text_bold">2FA</span>, <span className="text_bold">password hashing</span>, <span className="text_bold">HTTPS</span>.<br />
                                </p>
                            </div>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                        <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
                                    </svg>
                                    <span>Tools</span>
                                </span>
                                <div className="modal-tools">
                                    {PingPongSkillsData.map(({ id, icon, alt, name }) => <Card key={id} delay={id} icon={icon} alt={alt} name={name}/>)}
                                </div>
                            </div>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                        <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
                                    </svg>
                                    <span>Details</span>
                                </span>
                                <h4>Authentication :</h4>
                                <p className="ipsum">
                                    The <span className="cuberto">authentication</span> system integrates both <span className="cuberto">frontend</span> and <span className="cuberto">backend</span> components to deliver a secure and user-friendly experience. Built with <span className="cuberto">Django Rest Framework</span> for the backend and modern web technologies for the frontend, this system provides multiple <span className="cuberto">login</span> and <span className="cuberto">registration</span> options, along with advanced features like <span className="cuberto">Two-Factor Authentication</span> (2FA) and <span className="cuberto">password management</span>.
                                </p>
                                <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                <div className="modal-gallery">
                                    <a href={register_dark} data-fancybox="gallery" data-caption="Register">
                                        <img src={register_light} alt="Register page" />
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Registration</span>
                                        </div>
                                    </a>
                                    <a href={login_dark} data-fancybox="gallery" data-caption="Login">
                                        <img src={login_light} alt="Login page" />
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Login</span>
                                            <span className="rounded-tag opposite">Google</span>
                                            <span className="rounded-tag opposite">Intra 42</span>
                                        </div>
                                    </a>
                                    <a href={reset_password_1_dark} data-fancybox="gallery" data-caption="Reset Password">
                                        <img src={reset_password_1_light} alt="Reset Password page" />
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Reset Password</span>
                                        </div>
                                    </a>
                                    <a href={reset_password_2_dark} data-fancybox="gallery" data-caption="Confirm Password Reset">
                                        <img src={reset_password_2_light} alt="reset-password-2"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Confirm Password Reset</span>
                                        </div>
                                    </a>
                                </div>
                                </Fancybox>
                                <h4>Advanced User Security Features :</h4>
                                    <p className="ipsum">
                                        To enhance the overall <span className="cuberto">security and flexibility</span> of user accounts, the system includes several advanced features that give users control over their account's safety. These features include the ability to <span className="cuberto">enable or disable Two-Factor Authentication</span> (2FA), <span className="cuberto">change passwords</span>, and use <span className="cuberto">JSON Web Tokens</span> (JWT) for secure authentication.
                                    </p>
                                    <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                    >
                                    <div className="modal-gallery">
                                        <a href={security_settings_dark} data-fancybox="security-gallery"
                                            data-caption="Security Settings">
                                            <img src={security_settings_light} alt="security settings"></img>
                                            <div className="modal-gallery-tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">Change Password</span>
                                            </div>
                                        </a>
                                        <a href={enable_2fa_dark} data-fancybox="security-gallery"
                                            data-caption="Login">
                                            <img src={enable_2fa_light}
                                                alt="login"></img>
                                            <div className="modal-gallery-tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">Secure Login</span>
                                            </div>
                                        </a>
                                    </div>
                                    </Fancybox>
                                    <h4>Single Page Application (SPA) :</h4>
                                    <p className="ipsum">
                                        This project features a dynamic <span className="cuberto">Single Page Application</span> (SPA) built entirely with <span className="cuberto">vanilla JavaScript</span>, showcasing a seamless and responsive user experience. The SPA architecture ensures <span className="cuberto">smooth navigation</span> without full-page reloads by dynamically rendering content <span className="cuberto">based on the current route</span>.
                                    </p>
                                    <h4>Dockerized Environment :</h4>
                                    <p className="ipsum">
                                        The project is fully <span className="cuberto">containerized</span> using <span className="cuberto">Docker</span>, ensuring consistent environments and simplified deployment. With a single command (docker-compose up --build), the application autonomously launches all required services, including the <span className="cuberto">Nginx</span> server, <span className="cuberto">Django</span> backend, and <span className="cuberto">PostgreSQL</span> database, providing a seamless and scalable setup.
                                    </p>
                                    <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                    >
                                    <div className="modal-gallery">
                                        <a href={docker} data-fancybox="dockerized-gallery"
                                            data-caption="Docker Compose">
                                            <img src={docker} alt="Dockerized Environment"></img>
                                            <div className="modal-gallery-tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">Docker Compose</span>
                                            </div>
                                        </a>
                                    </div>
                                    </Fancybox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="webServModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="creative">Webserver 42</h2>
                            <br></br>
                            <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                            >
                            <figure className="gallery__item">
                                <a href={webserv} data-fancybox="webserv-main-gallery" data-caption="Web server">
                                    <img className="content-img" src={webserv_gif} alt="gallery-img1"></img>
                                </a>
                            </figure>
                            </Fancybox>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Description</span>
                                </span>
                                <p className="ipsum">
                                    I developed a non-blocking <span className="text_bold">HTTP server</span> using C++ 98, implementing HTTP/1.1 <span className="text_bold">methods</span> (<span className="text_bold">GET</span>, <span className="text_bold">POST</span>, <span className="text_bold">DELETE</span>) and efficient client-server communication with a single poll() for all I/O operations. The server supported <span className="text_bold">static file</span> serving, <span className="text_bold">file uploads</span>, <span className="text_bold">CGI</span> handling, and customizable <span className="text_bold">configuration</span> for <span className="text_bold">ports</span>, <span className="text_bold">routes</span>, and <span className="text_bold">error pages</span>. Stress-tested for resilience and accuracy, it delivered robust performance under high loads. This project enhanced my skills in <span className="text_bold">network programming</span>, <span className="text_bold">system design</span>, and <span className="text_bold">HTTP protocols</span>.<br></br>
                                    <a href="https://github.com/Mustapha-Moumanis/webserv" className="text_link" target="_blank">For more information</a>
                                </p>
                            </div>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Tools</span>
                                </span>
                                <div className="modal-tools">
                                    {webServSkillsData.map(({ id, icon, alt, name }) => <Card key={id} delay={id} icon={icon} alt={alt} name={name}/>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="chatAppModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="creative">Chat Application</h2>
                            <br></br>
                            <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                            >
                            <figure className="gallery__item">
                                <a href={chat_home_screen} data-fancybox="chat-main-gallery" data-caption="Chat application">
                                    <img className="content-img" src={chat_mockup_app} alt="gallery-img1"></img>
                                </a>
                            </figure>
                            </Fancybox>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Description</span>
                                </span>
                                <p className="ipsum">
                                    One of my key projects is a real-time chat application that allows users to communicate instantly across devices.
                                    The app includes user authentication, customizable themes (light/dark modes), and personalized profile pages.
                                    Built with modern web technologies like WebSocket for real-time messaging and PHP for backend socket programming, the app ensures smooth, secure communication.
                                    The frontend, crafted using HTML, CSS, and JavaScript, is fully responsive, adapting seamlessly to any device.
                                    This projectcases the integration of real-time features, scalability, and a focus on delivering an intuitive user experience.<br></br>
                                    <a href="https://github.com/Mustapha-Moumanis/Chat_application" className="text_link" target="_blank">For more information</a>
                                </p>
                            </div>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Tools</span>
                                </span>
                                <div className="modal-tools">
                                    {chatSkillsData.map(({ id, icon, alt, name }) => <Card key={id} delay={id} icon={icon} alt={alt} name={name}/>)}
                                </div>
                            </div>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Details</span>
                                </span>
                                <h4>Web interfaces</h4>
                                <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                <div className="modal-gallery">
                                    <a href={login_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="Login interface">
                                        <img src={login_800x800} alt="login"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Login interface</span>
                                        </div>
                                    </a>
                                    <a href={logout_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="Logout interface">
                                        <img src={logout_800x800}
                                            alt="logout"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Logout interface</span>
                                        </div>
                                    </a>
                                    <a href={register_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="Register interface">
                                        <img src={register_800x800}
                                            alt="register"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Register interface</span>
                                        </div>
                                    </a>
                                    <a href={reset_password_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="Reset Password">
                                        <img src={reset_password_800x800}
                                            alt="reset-password"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Password Reset interface</span>
                                        </div>
                                    </a>
                                    <a href={change_password_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="Change Password">
                                        <img src={change_password_800x800}
                                            alt="change-password"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Change Password interface</span>
                                        </div>
                                    </a>
                                    <a href={profile_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="profile interface">
                                        <img src={profile_800x800}
                                            alt="profile"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Profile interface</span>
                                        </div>
                                    </a>
                                    <a href={settings_1400x1400} data-fancybox="chat-interfice-gallery"
                                        data-caption="Settings interface">
                                        <img src={settings_800x800}
                                            alt="settings"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Settings interface</span>
                                        </div>
                                    </a>
                                </div>
                                </Fancybox>
                                <h4>Design</h4>
                                <Fancybox
                                    options={{
                                        Thumbs: false,
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                <div className="modal-gallery">
                                    <a href={disctop_content_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="Top View of Branding Elements">
                                        <img src={disctop_content_800x800} alt="Top View of Branding Elements"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Top View of Branding Elements</span>
                                        </div>
                                    </a>
                                    <a href={t_shirt_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="inork T-shirt">
                                        <img src={t_shirt_800x800} alt="inork T-shirt"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">inork T-shirt</span>
                                        </div>
                                    </a>
                                    <a href={cap_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="inork Cap">
                                        <img src={cap_800x800} alt="inork Cap"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">inork Cap</span>
                                        </div>
                                    </a>
                                    <a href={pen_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="inork Pen">
                                        <img src={pen_800x800} alt="inork Pen"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">inork Pen</span>
                                        </div>
                                    </a>
                                    <a href={cup_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="inork Cup">
                                        <img src={cup_800x800} alt="inork Cup"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">inork Cup</span>
                                        </div>
                                    </a>
                                    <a href={van_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="inork Van">
                                        <img src={van_800x800} alt="inork Van"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">inork Van</span>
                                        </div>
                                    </a>
                                    <a href={truck_1400x1400} data-fancybox="chat-design-gallery"
                                        data-caption="inork Truck">
                                        <img src={truck_800x800} alt="inork Truck"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">inork Truck</span>
                                        </div>
                                    </a>
                                </div>
                                </Fancybox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="OptimizAppModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="creative">Optimization Assurence Application</h2>
                            <br></br>
                            <Fancybox
                                options={{
                                    Thumbs: false,
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                            <figure className="modal-gallery">
                                    <a href={SEO_assurance_before} data-fancybox="SEO-main-gallery" data-caption="Before Optimization">
                                        <img className="content-img" src={SEO_assurance_before} alt="gallery-img1"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">Before</span>
                                        </div>
                                    </a>
                                    <a href={SEO_assurance_after} data-fancybox="SEO-main-gallery" data-caption="After Optimization">
                                        <img className="content-img" src={SEO_assurance_after} alt="gallery-img1"></img>
                                        <div className="modal-gallery-tags d-flex flex-wrap">
                                            <span className="rounded-tag opposite">After</span>
                                        </div>
                                    </a>
                            </figure>
                            </Fancybox>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Description</span>
                                </span>
                                <p className="ipsum">
                                    Transformed an insurance website from <span className="text_bold">WordPress</span> to a <span className="text_bold">static site</span> using HTML, CSS, and JavaScript, improving <span className="text_bold">performance</span> and <span className="text_bold">SEO</span> by testing with <span className="text_bold">GTmetrix</span> and <span className="text_bold">PageSpeed</span> Insights. Enhanced user experience with <span className="text_bold">file minimization</span>, Added <span className="text_bold">multi-language</span> support (French/English) and enhanced security with <span className="text_bold">reCAPTCHA</span> integration.<br></br>
                                </p>
                            </div>
                            <div className="modal-info">
                                <span className="h2__subtitle animate-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
                                    <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                        C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                        C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
                                    </svg>
                                    <span>Tools</span>
                                </span>
                                <div className="modal-tools">
                                    {OptimizAppData.map(({ id, icon, alt, name }) => <Card key={id} delay={id} icon={icon} alt={alt} name={name}/>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Models

const Card = ({ delay, icon, alt, name}) => {
    return (
        <SlideUp delay={delay}>
            <div className="modal-tools-img-main">
                <img src={icon} width="50" height="50" alt={alt} />
                <div className="skill-counter-main">
                    <p>{name}</p>
                </div>
            </div>
        </SlideUp>
    )
}