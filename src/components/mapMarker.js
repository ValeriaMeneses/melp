/* global google */
import React, { Component } from 'react';

const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 19.440701969312975, lng: -99.12601493396133  }}
  >
    <MarkerWithLabel
      position={{ lat: 19.440701969312975, lng: -99.12601493396133  }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "#FF6633", borderRadius:"20px" , border: "2px solid" , fontSize: "16px", padding: "5px"}}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>
  </GoogleMap>
);

export default MapWithAMarkerWithLabel;
