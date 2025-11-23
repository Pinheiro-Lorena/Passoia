import "./Looks.scss";
import Labios from "../../assets/Labios.png";
import Olhos from "../../assets/Olhos.png";
import Rosto from "../../assets/Rosto.png";
import Tendencias from "../../assets/Tendencias.png";

function Looks() {
    return (

        <section>
            <h2>Looks e Dicas de Maquiagem</h2>
            <div>
                <img src={Labios} alt="Labios" />
                <img src={Olhos} alt="Olhos" />
                <img src={Rosto} alt="Rosto" />
                <img src={Tendencias} alt="Tendencias" />
            </div>
        </section>

    
    )

}
    export default Looks;