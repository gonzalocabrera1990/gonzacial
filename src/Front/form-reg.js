import React from 'react';
import Navbarba from './navbar';
import {Form, FormGroup, Col, Input, Label, Button, FormFeedback } from 'reactstrap';
import '../Estilos/estilo.css';

class Forms extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contraseña: '',
      contraseñaRepeat: '',
      email: '',
      pais: '',
      fecha: '',
      sexo: '',
      touched: {
        contraseña: false,
        email: false
        
      }
    }
    
    this.controlState = this.controlState.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    
  }

  controlState(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
} 

  handleBlur = (field) => (e) =>{
    this.setState({
      touched:{...this.state.touched, [field]: true}
    });
  }

  validar (contraseña, contraseñaRepeat, email){
    const error = {
      contraseña: '',
      contraseñaRepeat: '',
      email: ''

    }
    
        if(this.state.touched.contraseña && contraseña.length < 4)
        error.contraseña = 'La contraseña es DEBIL. Debe ser mayor a 4 caracteres. Recomendamos alternar numeros y letras';
      else if(this.state.touched.contraseña && contraseña.length > 10)
        error.contraseña = 'El contraseña debe ser menor o igual a 10 caracteres. Recomendamos alternar numeros y letras';
      
        if(this.state.touched.contraseñaRepeat && contraseñaRepeat.length < 4)
        error.contraseñaRepeat = 'La contraseña es DEBIL. Debe ser mayor a 4 caracteres. Recomendamos alternar numeros y letras';
      else if(this.state.touched.contraseñaRepeat && contraseñaRepeat.length > 10)
        error.contraseñaRepeat = 'El contraseña debe ser menor o igual a 10 caracteres. Recomendamos alternar numeros y letras';
      

    if(this.state.touched.email && email.split('').filter(x => x === '@').length !==1)
      error.email= 'El email debe contener un @';
      
    
    return error;
  }
  
  render(){
    const error = this.validar(this.state.contraseña, this.state.contraseñaRepeat, this.state.email);
    return (

    <div className="" >
    
        <div className="NavBar">
            <Navbarba />
        </div>

        <div className="container-fluid" >
          <div className=" col-sm-6 offset-sm-3">
            <h1>Crea una cuenta nueva</h1>
          </div>
        </div>

        <div className="container">
          <Form >
            
            <FormGroup row>
              <Label htmlFor="email" md={2} >Email</Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email" placeholder="example@mail.com" 
                    value={this.state.email}
                    valid={error.email === ''}
                    invalid={error.email !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('email')} />
                    <FormFeedback>{error.email}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="contraseña" md={2} >Contraseña</Label>
                <Col md={10}>
                  <Input type="password" id="contraseña" name="contraseña" placeholder="contraseña" 
                    value={this.state.contraseña} 
                    valid={error.contraseña === ''}
                    invalid={error.contraseña !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('contraseña')}/>
                    <FormFeedback>{error.contraseña}</FormFeedback>
                </Col>
            </FormGroup>  
            <FormGroup row>
              <Label htmlFor="contraseñaRepeat" md={2} >Repetir Contraseña</Label>
                <Col md={10}>
                  <Input type="password" id="contraseñaRepeat" name="contraseñaRepeat" placeholder="repetir contraseña" 
                    value={this.state.contraseñaRepeat} 
                    valid={error.contraseñaRepeat === ''}
                    invalid={error.contraseñaRepeat !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('contraseñaRepeat')}/>
                    <FormFeedback>{error.contraseñaRepeat}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="sexo" md={2} >Sexo</Label>
                <Col md={10}>
                  <Input type="select" id="sexo" name="sexo" 
                    value={this.state.sexo} 
                    onChange = {this.controlState}>
                    <option>Femenino</option>
                    <option>Masculino</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="fecha" md={2} >Fecha de Naciminento</Label>
                <Col md={10}>
                  <Input type="date" id="fecha" name="fecha" placeholder="Birth" 
                    value={this.state.fecha} 
                    onChange = {this.controlState}/>
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
            <FormGroup row className="mt-5 mb-5">
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
export default Forms;