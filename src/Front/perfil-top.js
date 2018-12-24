import React from 'react';
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import Navbarba from './navbar';
import G from '../Fotos/1.jpg';

class PerfilTop extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fotoperfil: G,
            nombre: "Gonzalo",
            apellido: "Cabrera"
        }
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
                    <Card  className="col-sm-2 offset-5 img-fluid rounded-circle bg-transparent border-0 mt-4">
                        <CardImg src={this.state.fotoperfil} alt="perfil" className=" img-fluid rounded-circle" />
                    </Card>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <Card className="col-md-4 offset-4 text-center mt-4 mb-4 bg-transparent border-0">
                        <CardBody >
                            <CardTitle>{this.state.nombre} {this.state.apellido}</CardTitle>
                        </CardBody>
                    </Card>
                 </div>
            </div>
        </div> 
    </div>    
        )
}
}

export default PerfilTop;