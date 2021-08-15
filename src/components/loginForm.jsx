import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // Call the server
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
