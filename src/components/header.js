import React, { Component } from 'react';

import Dining from '../images/Dining-256.png';


export default class Header extends Component {
  render() {
    return(
      <div className="header">
        <img src= {Dining} />
        <h1>MELP</h1>
      </div>
    )
  }
}
