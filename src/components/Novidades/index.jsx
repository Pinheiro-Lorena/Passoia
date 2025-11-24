import "./Novidades.scss";

import novidades from "../../assets/novidades.png";

function Novidades() {
    return (
        <section className="novidades">
            <h2>Novidades Para Você</h2>
            <img src={novidades} alt="Novidades" />
        </section>
    )
}

export default Novidades