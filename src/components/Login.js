import React from 'react';
import { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 'banana': 'Rama'}
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        <p>{this.state.banana}</p>
      </div>
    );
  }
}

export default LoginPage;
