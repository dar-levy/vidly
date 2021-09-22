import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/common/notFound";
import NavBar from "./components/common/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/movies/:id" exact component={MovieForm} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
