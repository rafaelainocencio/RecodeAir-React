import React from "react";
import { Link } from "react-router-dom";
import promocoes from './listaprom'



export default function Promocoes() {

    const cards = promocoes.map((promocao) => {
        return(
            <div key={promocao.id} class="cardo">
                 <img src={promocao.imagem} width="300px" />
                 <div class="card-body">
                     <h5 class="card-title">{promocao.cidade}</h5>
                     <p class="card-text">{promocao.descricao}</p>
                     <p class="card-text">{promocao.preco}</p>
                     <a href="#" onClick={comprar} class="btn btn-primary">Comprar</a>
                </div>
             </div>
        )
    })

    return(
        <main>
            <h2>Aproveite nossas promoções!</h2>
            <div class="container Cards">
                {cards}
            </div>
        </main>
    )

}
    function comprar(){
        alert("Comprado com sucesso!")
    }
