import "../styles/comp/tech.scss";
import {DiReact, DiHtml5, DiCss3, DiSass,DiJavascript1,} from "react-icons/di";
import {SiTypescript} from "react-icons/si";


const techs = [
    {id:"html",name:"HTML5",icon:<DiHtml5/>},
    {id:"js",name:"Javascript",icon:<DiJavascript1/>},
    {id:"css",name:"CSS3",icon:<DiCss3/>},
    {id:"sass",name:"SASS",icon:<DiSass/>},
    {id:"react",name:"React.js",icon:<DiReact/>},
    {id:"typescript",name:"Typescript",icon:<SiTypescript/>}
]

export const TechContainer = () => {
    return(
        <section id="tech">
            <h2>Tecnologias</h2>
            <div className="grid">
                {techs.map((tech)=>(
                    <div className="technology-info" id={tech.id}>
                        {tech.icon}
                    </div>
                ))}
            </div>
        </section>
    )
}