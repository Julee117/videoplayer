import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleChange = event => {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="inputBox"
          onChange={this.handleChange}
          value={this.state.term}
        />
    </div>
    );
  }
}

export default SearchBar;
