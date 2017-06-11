import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import Settings from './settings'

class App extends Component {
  componentWillMount() {
    axios.get(`${Settings.host}/posts`).then(
      res => console.log(res.data)
    )
  }
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
