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
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="col-md-6">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={this.state.email} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.btnLoginClicked}>Login</Button>
        </Form>
      </div>
    );
  }
  btnLoginClicked() {
    const email = 'hongly@slash.co';
    const password = '123';
    axios.post('/api/v1/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
}

export default Login;
