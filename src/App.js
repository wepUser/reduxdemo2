import React, { Component } from 'react';
import './App.css';
import AddList from './container/AddList';
import VisibleList from './container/VisibleLists';
import Foot from './container/Foot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddList/>
          <VisibleList/>
          <Foot/>
      </div>
    );
  }
}

export default App;
