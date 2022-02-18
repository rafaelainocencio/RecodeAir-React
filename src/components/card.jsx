import React from "react";
import RJ from './Imagens/RJ.jpg'

export default function cards(){
    return(
        <div className="container Cards HomeCard">
            <div class="texto">
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="Cards">
            <div class="cardo">
                <img src={RJ} width="150px" />
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Saiba mais!</a>
                </div>
            </div>
            <div class="cardo">
                <img src={RJ} width="150px" />
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Saiba mais!</a>
                </div>
            </div>
            </div>
        </div>
    )
}