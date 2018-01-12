import React, { Component } from 'react';
import FacebookProvider, { Share, Like } from 'react-facebook';

export default class Container extends Component{
  render(){
    let data = this.props.data
    console.log(data.address.location);
    return(
      <div key = {data.id} className="dataContainer">
        <div className="tittle">
          <h3>{data.name}</h3>
          <h3><span>{data.rating} </span><i className="fa fa-star"></i></h3>
        </div>
        <div className="facebook">
          <FacebookProvider appId="123456789">
            <Share href="http://www.facebook.com">
              <button type="button">Share</button>
            </Share>
          </FacebookProvider>
          <div className="like">
            <p>Like+</p>
          </div>
        </div>
        <div className="contact">
          <p><b>Website: </b><spam>{data.contact.site}</spam></p>
          <p><b>Email: </b><spam>{data.contact.email}</spam></p>
          <p><b>Phone: </b><spam>{data.contact.phone}</spam></p>
        </div>
        <div className = "address">
          <p><b>Address: </b> <spam>{data.address.street}, {data.address.city}, {data.address.state}</spam></p>
        </div>
        <div><p>Maps</p></div>
      </div>
    )
  }
}
