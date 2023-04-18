import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa";
import "../styles/comp/socialmedia.scss"

const network = [
    {name:"Linkedin",icon:<FaLinkedin/>,link:"https://www.linkedin.com/in/moraesaugusto/"},
    {name:"Github",icon:<FaGithub/>,link:"https://github.com/AugustoMoraez"}
]

export const SocialMidia = () => {
    return(
        <section id="network">
            {network.map((network)=>(
                <a  className="social-btn" href={network.link} key={network.name} id={network.name} target="_blank" >{network.icon}</a>
            ))}
        </section>
    )
}