import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <h2>Todos</h2>
        <button
          onClick={this.props.onShowAdd}
          style={{
            backgroundColor: this.props.onChangeTextColor ? "red" : "green",
          }}
          className="btn"
        >
          {this.props.onChangeTextColor ? "Close" : "Add"}
        </button>
      </div>
    );
  }
}
