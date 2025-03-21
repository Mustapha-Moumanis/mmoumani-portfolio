import SlideUp from "../utlits/animations/slideUp"
import { experienceData } from "../utlits/projectData/projectData"


const Experience = () => {
    return (
        <>
            <SlideUp><h2 className="creative brand fade_up">Experience.</h2></SlideUp>
            {experienceData.map(({ id, title, company, cursus}) => <Card key={id} delay={id} title={title} company={company} cursus={cursus}/>)}
        </>
    )
}
  
export default Experience

const Card = ({ delay, title, company, cursus}) => {
    return (
        <SlideUp delay={delay}>
            <div className="experience position-relative">
                <div className="side_circle_ring">
                    <div className="small_yellow_border">
                        <div className="small_yellow_circle"></div>
                    </div>
                </div>
                <div className="small_yellow_border_main">
                    <p className="bachelor">{title}</p>
                    <p className="cursus university">{company}</p>
                    <p className="cursus">{cursus}</p>
                </div>
            </div>
        </SlideUp>
    )
}