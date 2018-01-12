import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import RestaurantData from './components/restaurantData.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RestaurantData />
      </div>
    );
  }
}

export default App;
