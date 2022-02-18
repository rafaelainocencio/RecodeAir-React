import React from 'react';

import './App.css';
import './promocoes.css'
import './Home.css'



import Promocoes from './components/Promocoes';
import Destinos from './components/destinos';
import Home from './components/Home';
import Faleconosco from './components/faleconosco';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import Carrossel from './components/carrossel';
import Rodape from './components/Rodape'


 function App() {
  return(
        <Router>
          <Menu></Menu>
            <Routes>
              <Route path="/faleconosco" element={<Faleconosco></Faleconosco>}></Route>
                <Route path="/promocoes" element={<Promocoes></Promocoes>}></Route>
                <Route path="/destinos" element={<Destinos></Destinos>}></Route>
                <Route path="/faleconosco" element={<Faleconosco/>}></Route>
                <Route path="/" exact element={<Home></Home>}></Route> 
            </Routes>
          <Rodape></Rodape>
        </Router>
  );
 }

export default App;
