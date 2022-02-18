import React from "react";

export default function recebaOfertas(){
    return(
        <div class="cardForm janela">
            <h1>Assine e receba as ofertas da RecodeAir!</h1>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Digite seu nome:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ex: João Silva"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Digite seu email:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ex: jaosilva@gmail.com"/>
                </div>
                <a class="btn btn-primary" onClick={assinar} href="#">Assinar</a>
                </form>
        </div>
    )
}

function assinar(){
    alert("Assinado com sucesso!")
}