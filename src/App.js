import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Chats from './Chats';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className='all'>
        <div className="App">
          <Header />
          <Chats />
        </div>

      </div>
    );
  }
}

export default App;
