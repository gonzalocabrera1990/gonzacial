import React from 'react';
import Foto from '../Fotos/perfildefault.jpg';

class Acceso extends React.Component {
    render(){

        return(
            <div classname="container" >
                <div className="row" >
                    <a href="/users/accesoperfil"><img className="col-md-4 a" src={Foto} /></a>
                </div>
            </div>
        )
    }
}

export default Acceso;