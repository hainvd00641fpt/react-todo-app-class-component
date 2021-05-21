import { Component } from "react";
import Task from "./Task";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.tasks.map((task) => (
          // <h3 key={task.id}>{task.title}</h3>
          <Task key={task.id} {...task} onDelete={this.props.onDelete} />
        ))}
      </>
    );
  }
}
