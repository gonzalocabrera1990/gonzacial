//Dependencias
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
//Componentes
import Inicio from "./pag-Inicio";
import Forms from "./form-reg";
import Mapeo from "./hola";
import DataLogin from "./datalogin";
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
            <Route path="/formulario" component ={Forms} />
            </div>
            <div className="back">
            <Route path="/start" component ={Mapeo} />
            </div>
            <div className="back">
            <Route path="/data-login" component ={DataLogin} />
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
