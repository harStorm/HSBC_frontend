
import React, { Component } from 'react';
import './App.scss';

//Components
import { Exchange } from './scenes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Exchange />
      </div>
    );
  }
}

export default App;
