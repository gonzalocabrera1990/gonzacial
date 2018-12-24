import React from 'react';
import perfil from './object';
import Start from './starterscreen';
import PerfilTop from './perfil-top';
class Mapeo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: perfil
            }; 
        }

    

        render(){
            const mapeo = this.state.products.map(polo => (
                <div  key={polo.id} >
                <Start
                            
                foto={polo.foto}
                mensaje={polo.mensaje}
                />
                </div>
            ));
            return(
                <div>
                    <div>
                        <PerfilTop />
                    </div>
                    <div>
                    {mapeo}
                    </div>
                </div>
                )
        }


}
export default Mapeo;