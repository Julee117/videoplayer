import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VideoPlayer</h1>
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
