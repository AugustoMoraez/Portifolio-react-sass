import "../styles/comp/maincontent.scss";
import { ProjetsContainer } from "./ProjetsContainer";
import { AboutContainer } from "./aboutContainer";
import { TechContainer } from "./techContainer";

export const MainContent = () => {
    return(
        <main id="main">
            <AboutContainer/>
            <TechContainer/>
            <ProjetsContainer/>
        </main>
    )
}