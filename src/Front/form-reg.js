import React from 'react';
import {register} from './users';
import Navbarba from './navbar';
import {Form, FormGroup, Col, Input, Label, Button, FormFeedback } from 'reactstrap';
import '../Estilos/estilo.css';

class Forms extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      repeatpassword: '',
      sex: '',
      date: '',
      country: '',
      touched: {
        password: false,
        username: false
        
      }
    }
    
    this.controlState = this.controlState.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  controlState(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
     
    });
    console.log(this.state.sex);
} 

  handleBlur = (field) => (e) =>{
    this.setState({
      touched:{...this.state.touched, [field]: true}
    });
  }

  validar (password, repeatpassword, username){
    const error = {
      password: '',
      repeatpassword: '',
      username: ''

    }
    
        if(this.state.touched.password && password.length < 4)
        error.password = 'La contraseña es DEBIL. Debe ser mayor a 4 caracteres. Recomendamos alternar numeros y letras';
      else if(this.state.touched.password && password.length > 10)
        error.password = 'El contraseña debe ser menor o igual a 10 caracteres. Recomendamos alternar numeros y letras';
      
        if(this.state.touched.repeatpassword && repeatpassword.length < 4)
        error.repeatpassword = 'La contraseña es DEBIL. Debe ser mayor a 4 caracteres. Recomendamos alternar numeros y letras';
      else if(this.state.touched.repeatpassword && repeatpassword.length > 10)
        error.repeatpassword = 'El contraseña debe ser menor o igual a 10 caracteres. Recomendamos alternar numeros y letras';
      

    if(this.state.touched.username && username.split('').filter(x => x === '@').length !==1)
      error.username= 'El email debe contener un @';
      
    
    return error;
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const User = {
      username: this.state.username,
      password: this.state.password,
      sex: this.state.sex,
      date: this.state.date,
      country: this.state.country      
    }
    register(User).then(res =>{
      this.props.history.push('/');
    })
    /*fetch('/users/signup', {
      
  method: 'post',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
  body: JSON.stringify(data)
})
.then((response) => response.json())
.then((result) => {
  console.log(result)
})*/
}
  
  render(){
    const error = this.validar(this.state.password, this.state.repeatpassword, this.state.username, this.state.sex);
    
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
          <Form  onSubmit={this.onSubmit}>
            
            <FormGroup row>
              <Label htmlFor="username" md={2} >Email</Label>
                <Col md={10}>
                  <Input type="email" id="username" name="username" placeholder="example@mail.com" 
                    value={this.state.username}
                    valid={error.username === ''}
                    invalid={error.username !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('username')} />
                    <FormFeedback>{error.username}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="password" md={2} >Contraseña</Label>
                <Col md={10}>
                  <Input type="password" id="password" name="password" placeholder="password" 
                    value={this.state.password} 
                    valid={error.password === ''}
                    invalid={error.password !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('password')}/>
                    <FormFeedback>{error.password}</FormFeedback>
                </Col>
            </FormGroup>  
            <FormGroup row>
              <Label htmlFor="repeatpassword" md={2} >Repetir Contraseña</Label>
                <Col md={10}>
                  <Input type="password" id="repeatpassword" name="repeatpassword" placeholder="repetir contraseña" 
                    value={this.state.repeatpassword} 
                    valid={error.repeatpassword === ''}
                    invalid={error.repeatpassword !== ''}
                    onChange = {this.controlState}
                    onBlur = {this.handleBlur('repeatpassword')}/>
                    <FormFeedback>{error.repeatpassword}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="sex" md={2} >Sex</Label>
                <Col md={10}>
                  <Input type="select" id="sex" name="sex" 
                    value={this.state.sex} 
                    onChange = {this.controlState} >
                    <option selected >Female</option>
                    <option>Male</option>
                    <option>Trans</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="date" md={2} >Fecha de Naciminento</Label>
                <Col md={10}>
                  <Input type="date" id="date" name="date" placeholder="Birth" 
                    value={this.state.date} 
                    onChange = {this.controlState}/>
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="country" md={2} >Country</Label>
                <Col md={10}>
                  <Input type="text" id="country" name="country" placeholder="country" 
                    value={this.state.country} 
                    onChange = {this.controlState}/>
                </Col>
            </FormGroup>
            <FormGroup row className="mt-5 mb-5">
            <Col>
              <Button type="submit">Enviar</Button>
            </Col>
            </FormGroup>
          </Form>
        </div>
    </div>
    
      );
    }
}
export default Forms;