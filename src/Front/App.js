//Dependencias
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
//Componentes
import Inicio from "./pag-Inicio";
import Forms from "./form-reg";
import Mapeo from "./hola";
import DataLogin from "./datalogin";
import Acceso from "./accesoaperfil";
import AccesoUno from "./accesoperfil2";
import '../Estilos/App.css';

class App extends Component {
  render() {
    const App = () => (
      <Switch>
          <div>
            <div className="reactbody fixed">
            <Route path="/" component ={Inicio} exact />
            </div>
            <div className="back">
            <Route path="/users/signup" component ={Forms} />
            </div>
            <div className="back">
            <Route path="/start" component ={Mapeo} />
            </div>
            <div className="back">
            <Route path="/users/data-login" component ={DataLogin} />
            </div>
            <div className="back">
            <Route path="/users/acceso" component ={Acceso} />
            </div>
            <div className="back">
            <Route path="/users/accesoperfil" component ={AccesoUno} />
            </div>
          </div>
        </Switch>
    );
    return (
        <Switch>
          <App />
        </Switch>
    )
  }
}

export default App;
