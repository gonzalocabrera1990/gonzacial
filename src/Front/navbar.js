import React from 'react';
import {Navbar, Card, CardImg} from 'reactstrap';
import Icon from '../Fotos/0.jpg';
  class Navbarba extends React.Component {
    
    render() {
      return (
            <div className="App">

                <Navbar dark className="nav">

                    <div className="container">
                        <Card  className="col-1 ">
                        <a  href="/"><CardImg src= {Icon} alt="navicon"  /></a>
                        </Card>
                    </div>
                </Navbar>
                
            </div>
        );
    }
  }

export default Navbarba;