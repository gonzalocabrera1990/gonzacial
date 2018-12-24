import React from 'react';
import Navbarba from './navbar';
import {Form, FormGroup, Col, Input, Label, Button, FormFeedback, Card, CardImg } from 'reactstrap';
import '../Estilos/estilo.css';
import IMGD from '../Fotos/perfildefault.jpg';

class DataLogin extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nombre: '',
      apellido: '',
      foto: IMGD,
      touched: {
        nombre: false,
        apellido: false,        
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.controlState = this.controlState.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleimg = this.handleimg.bind(this);
  }

  controlState(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }
    );
}

  handleSubmit(e) {
    alert('Estado Actual' + JSON.stringify(this.state));
    e.preventDefault();
  }

  handleBlur = (field) => (e) =>{
    this.setState({
      touched:{...this.state.touched, [field]: true}
    });
  }

  validar (nombre, apellido, contraseña, email){
    const error = {
      nombre:'',
      apellido: '',
      contraseña: '',
      email: ''

    }

    if(this.state.touched.nombre && nombre.length < 4)
        error.nombre = 'El nombre debe ser mayor a 4 caracteres';
      else if(this.state.touched.nombre && nombre.length > 10)
        error.nombre = 'El nombre debe ser menor o igual a 10 caracteres';
       
    if(this.state.touched.apellido && apellido.length < 4)
        error.apellido = 'El apellido debe ser mayor a 4 caracteres';
      else if(this.state.touched.apellido && apellido.length > 10)
        error.apellido = 'El apellido debe ser menor o igual a 10 caracteres';
      
    
    return error;
  }
  
  handleimg (e) {
    const T = URL.createObjectURL(e.target.files[0]);

    this.setState({
      foto: T
    });
  
  }

  render(){
    const error = this.validar(this.state.nombre, this.state.apellido, this.state.foto);
    return (
    <div>
        <div className="NavBar">
            <Navbarba />
        </div>

        <div className="container-fluid" >
          <div className=" col-sm-6 offset-sm-3">
            <h1>Completa tu Perfil</h1>
          </div>
        </div>
    
        <div className="container">
       
          <Form onSubmit={this.handleSubmit}>
          <FormGroup row >
              <Label htmlFor="foto" md={2} >Foto</Label>
                <Col md={5}>
                <Input type="file" id="foto" name="foto" placeholder="foto" onChange={this.handleimg}  accept="image/*"/>
                    <Card className="bg-transparent border-0" >
                    <Label htmlFor="foto">
                        <CardImg type="file" src={this.state.foto} value={this.state.foto} 
                        alt="perfil" htmlFor="foto" className="col-md-8 h-25 " />
                    </Label>    
                    </Card> 
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="nombre" md={2} >Nombre</Label>
                <Col md={10}>
                  <Input type="text" id="nombre" name="nombre" placeholder="Nombre" 
                    value={this.state.nombre} 
                    valid={error.nombre === ''}
                    invalid={error.nombre !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('nombre')} />
                  <FormFeedback>{error.nombre}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="apellido" md={2} >Apellido</Label>
                <Col md={10}>
                  <Input type="text" id="apellido" name="apellido" placeholder="Apellido" 
                    value={this.state.apellido} 
                    valid={error.apellido === ''}
                    invalid={error.apellido !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('apellido')} />
                    <FormFeedback>{error.apellido}</FormFeedback>
                </Col>
            </FormGroup>
         
            <FormGroup row>
              <Label htmlFor="frase" md={2} >Frase de Cabecera</Label>
                <Col md={10}>
                  <Input type="textarea" id="frase" name="frase" placeholder="Frase de Cabecera" />
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="pais" md={2} >País</Label>
                <Col md={10}>
                  <Input type="text" id="pais" name="pais" placeholder="País" 
                    value={this.state.pais} 
                    onChange = {this.controlState}/>
                </Col>
            </FormGroup>
            <FormGroup row>
            <Col>
              <Button type="submit" >Enviar</Button>
            </Col>
            </FormGroup>
          </Form>
        </div>
    </div>
      );
    }
}
export default DataLogin;