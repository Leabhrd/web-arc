import React from "react";
import {Form, Button } from 'react-bootstrap';
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'hongly@slash.co',
      password: '123'
    }
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div className="col-md-6">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email"  value={this.state.email} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.btnLoginClicked.bind(this)}>Login</Button>
          <Button variant="primary" type="button" onClick={this.getMe.bind(this)}>Get me</Button>
        </Form>
      </div>
    );
  }
  btnLoginClicked() {
    const email = this.state.email;
    const password = this.state.password;
    axios.post('http://localhost:8000/api/v1/login', {
      email: email,
      password: password
    })
    .then((res =>{
      this.setState({token: res.data.token })
      return res;
    }))
    .then(this.props.onLoginSuccess)
    .catch(function (error) {
      console.log(error);
      alert("login failed");
    });

  }

  getMe(){
    axios({
      url:'http://localhost:8000/api/v1/user/me',
      headers:{
        'authorization':`Bearer ${this.state.token}`} 
      })
    .then(res=>{
      alert(res.data.data.username);
    })
    .catch(err=>{
      alert('You are not login');
    })
  }
}

export default Login;
