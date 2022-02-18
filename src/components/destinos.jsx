import React from "react";

import destinos from './listadestino';

export default function Destinos(){
    const cards = destinos.map((destino) => {
        return(
            <div key={destino.id} class="cardo">
                 <img src={destino.imagem} width="300px" />
                 <div class="card-body">
                     <h5 class="card-title">{destino.cidade}</h5>
                     <p class="card-text">{destino.descricao}</p>
                     <p class="card-title">{destino.preco}</p>
                     <a href="#" onClick={comprar} class="btn btn-primary">Comprar</a>
                </div>
             </div>
        )
    })

    return(
        <main>
            <h2>Confira nossos destinos:</h2>
            <div class="Cards">
                {cards}
            </div>
        </main>
    )

}
    function comprar(){
        alert("Comprado com sucesso!")
    }

