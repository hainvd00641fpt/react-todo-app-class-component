import { Component } from "react";
import AddTask1 from "./components/AddTask1";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import HelloWorld from "./components/HelloWorld";

const tasks = [
  {
    id: 1,
    title: "delectus aut autem",
    time: "10:00AM",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    time: "10:00AM",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    time: "10:00AM",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    time: "10:00AM",
    completed: true,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks,
      isShow: false,
      tech: "React",
    };
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(function (task) {
        return task.id !== id;
      }),
    });
    // console.log("delete", id);
    // console.log("object", tasks);
  };

  onAddTask = (task) => {
    const id = Math.floor(Math.random() * 241199);
    const newTask = { id, ...task };
    console.log(newTask);
    this.setState({ tasks: [...tasks, newTask] });
  };

  showAdd = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
    console.log(this.state.isShow);
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="container">
        <Header
          onShowAdd={this.showAdd}
          onChangeTextColor={this.state.isShow}
        />
        {this.state.isShow && <AddTask addTask={this.onAddTask} />}
        {this.state.tasks.length > 0 ? (
          <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} />
        ) : (
          "Not Todos"
        )}

        <HelloWorld tech={this.state.tech} />
      </div>
    );
  }
}
