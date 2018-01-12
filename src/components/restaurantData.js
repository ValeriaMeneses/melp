import React, { Component } from 'react';
import { data_melp } from '../data/data_melp.js';

import Container from './container.js';

export default class RestaurantData extends Component{
  constructor(){
    super();
    this.state = {
      rating: 4
    }

  }

  _handleClick(val){
    this.setState({
      rating:val
    })
  }

  render(){
    console.log("esto es rating", this.state.rating);
    let data_filter = data_melp.filter(element => {
      if (this.state.rating === element.rating) return true
      if (this.state.rating === 5) return true
    })
    .map(element => {
      return <Container data={element} />
    })
    return(
      <div className="data">
        <div className="buttonRating">
          <button className="buttonAll" onClick={ ()=>{ this._handleClick(5) } }>All</button>
          <button onClick={ ()=>{ this._handleClick(4) } }>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </button>
          <button onClick={ ()=>{ this._handleClick(3) } }>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </button>
          <button onClick={ ()=>{ this._handleClick(2) } }>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </button>
          <button onClick={ ()=>{ this._handleClick(1) } }>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </button>
          <button onClick={ ()=>{ this._handleClick(0) } }>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </button>
        </div>
        <div className="container">
          {data_filter}
        </div>
      </div>
    )
  }
}
