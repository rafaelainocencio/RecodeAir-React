import React from "react";
//import Recebaofertas from "./recebaofertas";
import { Link } from "react-router-dom";


function Menu () {
    return (
        <header class="container menu">
          <nav >
            <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">
                           <a>Home</a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/destinos">
                           <a>Destinos</a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/promocoes">
                            <a>Promocoes</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/faleconosco">
                            <a>Fale conosco</a>
                        </Link>
                    </li>
            </ul>
          </nav>
      </header> 
    );
  }
  export default Menu;