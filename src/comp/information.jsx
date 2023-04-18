import "../styles/comp/information.scss";
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

export const Info = () => {
    return(
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(98)9 9118-8585</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>moraezaugusto@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>São Luís - MA</p>
                </div>
            </div>
        </section>
    )
}