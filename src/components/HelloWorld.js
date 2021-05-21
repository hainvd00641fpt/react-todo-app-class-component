import React, { Component } from "react";

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.tech}</h4>
      </div>
    );
  }
}
