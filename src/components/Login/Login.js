import React, { Component } from 'react';
import firebase from 'firebase';
import { GoogleBtn, Wrapper, Title, Register, StyledForm } from './loginStyles';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';




// const provider = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
  componentDidUpdate(prevProps) {
   const { loggedIn } = this.props;
   if (prevProps.loggedIn !== loggedIn) {
     this.props.history.push('/')
   }
  }

  startLogin = () => {
    this.props.handleLogin()
  }

  render() {
    return (
      <Wrapper>
        <Title>Login</Title>
        <StyledForm>
          <Form.Input width={16} label='Username' />
          <Form.Input label='Password' type='password' />
          <Form.Button>Submit</Form.Button>
        </StyledForm>
        <Link to='/register'>
          <Register>
            Don't have an account? <u>Register</u>
          </Register>
        </Link>
        <Title>Or</Title>
        <GoogleBtn onClick={this.startLogin}>
          <FaGoogle />
          <p>Login</p>
        </GoogleBtn>
      </Wrapper>
    )
  }
}
