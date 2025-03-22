import SlideUp from '../utlits/animations/slideUp.jsx';
import { educationData } from "../utlits/projectData/projectData"


const Education = () => {
    return (
        <>
            <SlideUp><h2 className="creative brand">Education</h2></SlideUp>
            {educationData.map(({ id, bachelor, university, cursus}) => <Card key={id} delay={id} bachelor={bachelor} university={university} cursus={cursus}/>)}
        </>
    )
}
  
export default Education

const Card = ({ delay, bachelor, university, cursus}) => {
    return (
        <SlideUp delay={delay}>
            <div className="education position-relative">
                <div className="side_circle_ring">
                    <div className="small_yellow_border">
                        <div className="small_yellow_circle"></div>
                    </div>
                </div>
                <div className="small_yellow_border_main">
                    <p className="bachelor">{bachelor}</p>
                    <p className="cursus university">{university}</p>
                    <p className="cursus">{cursus}</p>
                </div>
            </div>
        </SlideUp>
    )
}