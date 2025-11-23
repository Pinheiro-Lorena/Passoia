//useState controla estados na interface
//logica fica antes do return
import { useState } from "react"
import "./lancamentos.scss"
//IMPORT DAS IMAGENS
import vermelho from "../../assets/vermelho.png"
import azul from "../../assets/azul.png"
import marrom from "../../assets/marrom.png"
import base from "../../assets/base.png"
import star from "../../assets/star.png"


function Lancamentos() {
const [cor, setCor] = useState(vermelho)


    return (
        <div className="lancamentos">
            <h2>APROVEITE OS LANÇAMENTOS</h2>
            <img src={cor} alt="cor vermelha" />

            <button className="btn-azul" onClick={ () => setCor(azul) }>
            
            </button>
            <button className="btn-marrom" onClick={ () => setCor(marrom) }>
                
            </button>
            <button className="btn-base" onClick={ () => setCor(base) }></button>
          
            <button className="btn-vermelho" onClick={ () => setCor(vermelho) }></button>

<div className="descricao-box">
            <img className="star" src={star} alt="estrela" />
            <h3 className="descricao">
                Descrição do lançamento
            </h3>
            <p>
                Conheça a nova coleção de produtos Passoia, com cores vibrantes e design inovador para realçar sua beleza em qualquer ocasião.
            </p>
</div>
        </div>

      
    )
}

export default Lancamentos