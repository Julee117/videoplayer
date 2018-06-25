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

  videoSearch(term) {
    YTSearch({key: process.env.REACT_APP_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VideoPlayer</h1>
          <SearchBar />
        </header>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
