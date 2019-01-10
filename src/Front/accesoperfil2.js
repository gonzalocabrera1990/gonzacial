/*import React from 'react';



class AccesoUno extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            sex: "",
            country: "",
            date:""
        }
    }

    componentDidMount(){


    }

    render(){
        return(
        <div>
            <div >
            <Navbarba />
            </div>

        <div>
            <div className="container">
                <div className="row">
                   <h1>{this.state.username}</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <h1>{this.state.sex}</h1>
                 </div>
            </div>
            <div className="container">
                <div className="row">
                <h1>{this.state.country}</h1>
                 </div>
            </div>
            <div className="container">
                <div className="row">
                <h1>{this.state.date}</h1>
                 </div>
            </div>
        </div> 
    </div>    
        )
}
}
*/

import React, { Component } from 'react';
import axios from 'axios';
import Navbarba from './navbar';
//4° renderiza por props las propiedades de los users
class TableRow extends Component {
    render() {
      return (
          <tr>
            <td>
              {this.props.obj._id}
            </td>
            <td>
              {this.props.obj.username}
            </td>
            <td>
              {this.props.obj.sex}
            </td>
            <td>
              {this.props.obj.date}
            </td>
            <td>
              {this.props.obj.country}
            </td>
          </tr>
      );
    }
  }

export default class AccesoUno extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    //1° se monta el estado de la app desde la base de datos
    //2° en la funcion tabRow se mapea el state y se renderiza el state
    componentDidMount(){
      axios.get('/users/accesoperfil')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    //3° tabRow mapea y return por props el objeto con las propiedades
    //Usa el componente TableRow y {this.tabRow()} acumula toda la informacion
    tabRow(){
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
        <div><Navbarba /> </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Username</td>
                  <td>Sexo</td>
                  <td>Fecha de Nacimiento</td>
                  <td>Pais</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }