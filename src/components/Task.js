import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";

export default class Task extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   console.log("props", this.props);
  //

  render() {
    return (
      <div className="task">
        <h3 key={this.props.id}>
          {this.props.title}
          <FaTimes onClick={() => this.props.onDelete(this.props.id)} />
        </h3>
        <p>{this.props.time}</p>
      </div>
    );
  }
}
