import React from "react";
import './fale.css'

export default function Faleconosco(){
    return(
        <main >
            <section className="container">
            <div className="formulario container">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nome</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Seu Nome"/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Endereço de email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com"/>
                </div>
  
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Digite seu texto</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <a class="btn btn-primary" onClick={Notificacao} href="#" role="button">Enviar</a>
            </div>
            <div>
            <h1>Fale Conosco!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium reiciendis 
                doloremque velit quos cum corrupti, dolor aut corporis quaerat. Et hic maiores optio 
                cupiditate nulla animi itaque, neque delectus.</p>
            </div>
            </section>
        </main>)
}

function Notificacao(){
    alert("Enviado com sucesso!")
}