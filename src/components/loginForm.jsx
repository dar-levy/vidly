import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();

    // Call the server
    const username = this.username.current.value;
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1 className="mb-4">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Email address</label>
            <input
              autoFocus
              ref={this.username}
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
