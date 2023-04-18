import "../styles/comp/sidebar.scss";
import Profile from "../img/profile.jpg";
import { Info } from "./information";
import { SocialMidia } from "./socialMedia";

export const Sidebar = () => {
    return (
        <aside id="sidebar">

            <img src={Profile} alt="Foto Perfil" />

            <p className="title">Desenvolvedor Frontend Jr</p>
            <SocialMidia/>
            <Info/>
            <a href="" className="btn" >
                Download Curriculo
            </a>
        </aside>
    )
}