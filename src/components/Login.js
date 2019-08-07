import React from 'react';
import { Component } from 'react';

// 1. We need to save the information of the user in case the request does not go through
// 2. We need to validate the user information to make sure that it is of the correct type: i.e.
// that it is long enough or is a correct email
// 3. We need to learn how to use the fetch api to send the request

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 'banana': 'Rama'}
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form>
          <input placeholder="Email" type="email"/>
          <br />
          <input placeholder="Password" type="password"/>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
