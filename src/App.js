import React, { Component } from 'react';
import HEREMap, { Marker } from 'react-here-maps';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const center = { lat:52.5160, lng:13.3779 };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HEREMap
          appId="appID"
          appCode="appCode"
          center={center}
          zoom={13}>
          <Marker {...center}>
            <div className="circle-marker"></div>
          </Marker>
        </HEREMap>
      </div>
    );
  }
}

export default App;
