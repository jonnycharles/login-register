import React from 'react';
import { Component } from 'react';

// 1. We need to save the information of the user in case the request does not go through
// 2. We need to validate the user information to make sure that it is of the correct type: i.e.
// that it is long enough or is a correct email
// 3. We need to learn how to use the fetch api to send the request

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'banana': 'Rama',
      'email': '',
      'password': '',
      'finished': false
    }
  }

  goToHomePage = () => {
    const newState = {...this.state, 'finished': !this.state.finished};
    this.setState(newState);
  }

  setEmail = (event) => {
    const newState = {...this.state, 'email': event.target.value};
    this.setState(newState);
  }

  setPassword = (event) => {
    const newState = {...this.state, 'password': event.target.value};
    this.setState(newState);
  }


  render() {
    const finished = this.state.finished;
    return(
        <div>
          <h1>Login</h1>
          { (!finished) &&
          <form>
            <input placeholder="Email" type="email" onChange={this.setEmail} />
            <br />
            <input placeholder="Password" type="password" onChange={this.setPassword} />
            <br />
            <button type="submit" onClick={this.goToHomePage}>Submit</button>
          </form>
          }
          { finished &&
            <div>
                You did it: {this.state.email} and {this.state.password}
            </div>
          }
        </div>
    );
  }
}

export default LoginPage;
