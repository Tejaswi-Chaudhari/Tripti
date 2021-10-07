import React, { Component } from "react";

class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        localStorage.setItem('latitude', position.coords.latitude)
        localStorage.setItem('longitude', position.coords.longitude)
      });
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Location;