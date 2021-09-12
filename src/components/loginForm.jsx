import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    const username = this.username.current.value;
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1 className="mb-4">Login</h1>
        <form>
          <Input
            name="username"
            label="Username"
            value={data.username}
            onChange={this.handleChange}
            autoFocus={true}
            type="text"
            error={errors.username}
            placeholder="Enter username..."
          />
          <Input
            name="password"
            label="Password"
            value={data.password}
            onChange={this.handleChange}
            autoFocus={false}
            type="password"
            error={errors.password}
            placeholder="Enter password..."
          />
          <button
            className="btn btn-primary"
            onClick={this.handleSubmit}
            disabled={this.validate()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
