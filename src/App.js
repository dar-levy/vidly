import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/navbar";
import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import NotFound from "./components/common/notFound";
import Rentals from "./components/rentals";
import Customers from "./components/customers";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/" exact component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
