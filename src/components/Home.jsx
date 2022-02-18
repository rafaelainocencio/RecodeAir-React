import React from "react"
import Recebaofertas from "./recebaofertas"
import Lorem from "./lorem"

import Card from "./card";


export default function Home(){
    return(
        <main>
            <div className="container banner">
                <Recebaofertas></Recebaofertas>
                <Lorem></Lorem>
            </div>
            <div className="container">
               <Card></Card>
            </div>
        </main>)
}