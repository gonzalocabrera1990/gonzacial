import React from 'react';
import {login} from './users';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Col, Label, Input} from 'reactstrap';


  class Boton extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          usernama: '',
          password:'',
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
        
        e.preventDefault();
        const user = {
          username: this.state.username,
          password: this.state.password
        }
        login(user).then(res =>{
          if(res){
            this.props.history.push('/users/data-login');
          }
        })
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
                 <Button className="btn btn-lg bg-success" href="/users/signup">Registrarse</Button>
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
                                <Label htmlFor="username" >Usuario</Label>
                                <Input type="text" id="username" name="username" 
                                placeholder="Usuario" innerRef={ (input) => this.username = input}
                                value={this.state.username}
                                onChange={this.onChange} />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Col>
                                <Label htmlFor="password" >Contraseña</Label>
                                <Input type="password" id="password" name="password" 
                                placeholder="Contraseña" innerRef={ (input) => this.password = input} 
                                value={this.state.password}
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