import "./footer.scss";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import boleto from "../../assets/boleto.png";
import pix from "../../assets/pix.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

function Footer() {
    return (
        <footer>
            <div className="atendimento">
            <h3>Atendimento</h3>
            <ul>
               <li>Fale Conosco</li>
               <li>Perguntas Frequentes</li>
               <li>Meus Pedidos</li>
               <li>Nossas Lojas</li>
            </ul>
</div>
            <div className="formas-pagamento">
                <h3>Formas de Pagamento</h3>
                <img src={mastercard} alt="Mastercard" />
                <img src={visa} alt="Visa" />
                <img src={boleto} alt="Boleto" />
                <img src={pix} alt="Pix" />
            </div>
            <div className="redes-sociais">
                <h3>Redes Sociais</h3>
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={youtube} alt="YouTube" />
            </div>
        </footer>
    )

}
export default Footer