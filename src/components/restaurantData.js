import React, { Component } from 'react';
import { data_melp } from '../data/data_melp.js';

import Container from './container.js';
import MapWithAMarkerWithLabel from './mapMarker.js'


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
    let data_filter = data_melp.filter(element => {
      if (this.state.rating === element.rating) return true
      if (this.state.rating === 5) return true
    })
    .map(element => {
      return <Container data={element} />
    })
    return(
      <div className="data">
        <MapWithAMarkerWithLabel
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfDW3bRoUOtE_mtU6yV2-4Re9rRo3AjN4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
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
