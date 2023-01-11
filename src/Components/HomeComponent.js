import React, { Component } from 'react';
import "./Home.css"

export default class HomeComponent extends Component {
  render() {
    return (
        <div className="home">
            <h2 className="heading">Quiz App</h2>
            <button>Play</button>
        </div>
    )
  }
}