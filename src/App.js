import React, { Component } from 'react';
import SearchBar from "./containers/SearchBar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
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
    // returns a new funciton that can only be called once every 300 ms
    // this helps throttle user imput to make sure they don't search too often
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VideoPlayer</h1>
          <SearchBar onSearchTermChange={videoSearch}/>
        </header>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
