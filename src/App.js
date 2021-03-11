import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId); //creates a new array without the the passed Id
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleIncrement = (counter) => {
    //binds event handlers to this
    //console.log(product);

    const counters = [...this.state.counters]; //Clone counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //clone object
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
