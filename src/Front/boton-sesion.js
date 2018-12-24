import React from 'react';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Col, Label, Input} from 'reactstrap';


  class Boton extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          usuario: '',
          contraseña:'',
          isModalOpen: false,
      }
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.onChange = this.onChange.bind(this);
  }

  toggleModal (){
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
  }

  handleLogin(e){
        this.toggleModal();
        window.confirm('Usuario: ' + this.usuario.value + '   Contraseña: ' + this.contraseña.value);
        e.preventDefault();
}
onChange(e){
  this.setState({[e.target.name]: e.target.value});
}

    render() {
      return (
<div>
            <div className="row altura">
              <div className="col-sm-3"></div>

              <div className="col-sm-2">
              <Button className=" btn btn-lg bg-success mr-4" onClick={this.toggleModal}>Iniciar  Sesión</Button>
              </div>

              <div className="col-sm-2"></div>
              
              <div className="col-2">
                 <Button className="btn btn-lg bg-success" href="/formulario">Registrarse</Button>
              </div>
            
              <div className="col-sm-3"></div>

          </div>
              
              <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Iniciar Sesión</ModalHeader>
                    <ModalBody>
                          <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                              <Col>
                                <Label htmlFor="usuario" >Usuario</Label>
                                <Input type="text" id="usuario" name="usuario" 
                                placeholder="Usuario" innerRef={ (input) => this.usuario = input}
                                value={this.state.usuario}
                                onChange={this.onChange} />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Col>
                                <Label htmlFor="contraseña" >Contraseña</Label>
                                <Input type="password" id="contraseña" name="contraseña" 
                                placeholder="Contraseña" innerRef={ (input) => this.contraseña = input} 
                                value={this.state.contraseña}
                                onChange={this.onChange}/>
                              </Col>
                            </FormGroup>
                            <Button type="submit" value="Submit" color="success" >Enviar</Button>
                          </Form>
                    </ModalBody>
                </Modal>
              </div>
        </div>
      );
    }
}
export default Boton;