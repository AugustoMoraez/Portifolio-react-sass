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
            <a href="https://drive.google.com/file/d/15ZGYRT05bNW2WnvZi43BOcd6q-jp0qCd/view" target="_blank" className="btn" >
                Download Curriculo
            </a>
        </aside>
    )
}