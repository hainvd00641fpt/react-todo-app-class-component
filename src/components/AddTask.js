import React, { Component } from "react";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      time: "",
      completed: false,
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
  };

  // logName = () => {
  //   console.log(this.state.title);
  // };

  handleTitleInput = (e) => {
    this.setState({ title: e.target.value });
  };

  handleTimeInput = (e) => {
    this.setState({ time: e.target.value });
  };

  handleCompletedInput = (e) => {
    this.setState({ completed: e.currentTarget.checked });
  };

  render() {
    return (
      // <form className="add-form" onSubmit={this.onSubmitTask}>
      <form className="add-form" onSubmit={this.onSubmitTask}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleInput}
            placeholder="Add title"
          />
        </div>
        <div className="form-control">
          <label>Time</label>
          <input
            type="text"
            value={this.state.time}
            onChange={this.handleTimeInput}
            placeholder="Add time"
          />
        </div>
        <div className="form-control form-control-check">
          <label>Completed</label>
          <input
            type="checkbox"
            onChange={this.handleCompletedInput}
            checked={this.state.completed}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Save Task" />
      </form>
    );
  }
}
