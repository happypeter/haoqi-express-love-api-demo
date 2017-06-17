import React, { Component } from 'react';
import '../css/App.css'
import Header from './Header'
import Main from './Main'
import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
