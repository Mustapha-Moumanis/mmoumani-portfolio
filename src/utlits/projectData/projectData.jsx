import work_1 from "../../assets/images/works/ping-pong-app/ping-pong-app-800x800.webp"
import work_2 from "../../assets/images/works/webserver/webserv-1400x1400.png"
import work_3 from "../../assets/images/works/chat-app/chat-app-800x800.webp"
import work_4 from "../../assets/images/works/SEO-assurance-app/opt-assurance-app.png"

// All Skills
import cpp_icon from "../../assets/images/svg/skills/C++.svg"
import python_icon from "../../assets/images/svg/skills/Python.svg"
import django_icon from "../../assets/images/svg/skills/icon-django.svg"
import react_icon from "../../assets/images/svg/skills/React.svg"
import html_icon from "../../assets/images/svg/skills/html.svg"
import css_icon from "../../assets/images/svg/skills/css.svg"
import js_icon from "../../assets/images/svg/skills/JavaScript.svg"
import bootstrap_icon from "../../assets/images/svg/skills/icon-bootstrap.svg"
import docker_icon from "../../assets/images/svg/skills/Docker.svg"
import figma_icon from "../../assets/images/svg/skills/Figma.svg"
import git_icon from "../../assets/images/svg/skills/Git.svg"
import nginx_icon from "../../assets/images/svg/skills/Nginx.svg"
import postman_icon from "../../assets/images/svg/skills/Postman.svg"

export const projectsData = [
    {
        id: 2,
        data_bs_target: '#pingPongModal',
        src: work_1,
        overlay_text: "Ping Pong Application",
        title: "Ping Pong Application",
    },
    {
        id: 3,
        data_bs_target: '#webServModal',
        src: work_2,
        overlay_text: "WebServer",
        title: "Non-Blocking HTTP Server in C++",
    },
    {
        id: 4,
        data_bs_target: '#chatAppModal',
        src: work_3,
        overlay_text: "Chat Application",
        title: "Chat Application",
    },
    {
        id: 5,
        data_bs_target: '#OptimizAppModal',
        src: work_4,
        overlay_text: "Optimization Assurance Application",
        title: "Optimization Assurance Application",
    },
]

export const educationData = [
    {
        id: 2,
        bachelor: 'Software developer',
        university: '1337 School UM6P / 2022 - Current',
        cursus: "A project-based coding school where I developed technical skills through hands-on learning and collaboration.",
    },
    {
        id: 3,
        bachelor: 'Multimedia Development',
        university: 'ISTA OFPPT / 2020 - 2022',
        cursus: "The Multimedia Development Specialist Technician focuses on crafting multimedia applications and web solutions.",
    },
    {
        id: 4,
        bachelor: 'SMPC',
        university: 'Faculty of Sciences Ain Chock / 2019 - 2020',
        cursus: "Builds expertise in material sciences, physics, and chemistry, preparing students for advanced studies or careers.",
    },
    {
        id: 5,
        bachelor: 'Baccalaureate Diploma (svt)',
        university: 'Okba Bnou Nafie Bir Jdid / 2019 - 2020',
        cursus: false,
    }
]

export const experienceData = [
    {
        id: 2,
        title: 'Technical SEO Web Developer',
        company: 'Webcom / Feb 2022 - Apr 2022',
        cursus: "Migrated websites to improve performance, add multilingual capabilities, and enhance SEO for a better user experience and improved search rankings.",
    },
]

export const AllSkillsData = [
    {
        id: 1,
        image: cpp_icon,
        alt: 'cpp-img',
        name: "C/C++",
    },
    {
        id: 2,
        image: python_icon,
        alt: 'cpp-img',
        name: "Python",
    },
]
