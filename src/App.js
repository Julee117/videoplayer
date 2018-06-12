import React, { Component } from 'react';
import SearchBar from "./containers/SearchBar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VideoPlayer</h1>
          <SearchBar />
        </header>
        <VideoList />
      </div>
    );
  }
}

export default App;
