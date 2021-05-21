import React, { useState } from "react";

const AddTask1 = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }

    addTask({ title, time, completed });

    setTitle("");
    setTime("");
    setCompleted(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="text"
          placeholder="Add time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Completed</label>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => setCompleted(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask1;
