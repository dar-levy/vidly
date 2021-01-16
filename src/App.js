import Counters from "./components/counters.jsx";
import Navbar from "./components/navbar.jsx";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, liked: false },
      { id: 2, value: 0, liked: false },
      { id: 3, value: 0, liked: false },
      { id: 4, value: 0, liked: false },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleLike = (counter) => {
    const counters = [...this.state.counters];
    const index = counter.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].liked = !counters[index].liked;
    this.setState(counters);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
