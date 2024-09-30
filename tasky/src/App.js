<<<<<<< HEAD
import "./App.css";
import React, { useState } from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/Form";
import { v4 as uuidv4 } from "uuid";
=======
import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';


>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
<<<<<<< HEAD
      {
        id: 1,
        title: "Dishes",
        description: "Empty dishwasher",
        deadline: "Today",
        done: false,
        priority: "Low"
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold clothes and put away",
        deadline: "Tomorrow",
        done: false,
        priority: "Medium"
      },
      {
        id: 3,
        title: "Tidy up",
        deadline: "Today",
        done: false,
        priority: "High"
      }
=======
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "high", done: false}
>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2
    ]
  });

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "",
  });

  const formChangeHandler = (event) => {
    let form = { ...formState };

    switch (event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      case "priority":
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
  };

  console.log(formState);
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = { ...formState };

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({ tasks });
  };

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "" ,
    priority:""
  });


  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  };

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  };

<<<<<<< HEAD
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
=======
  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
        case "priority":
           form.priority=event.target.value;
           break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }

  console.log(formState);


    return (
      <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
<<<<<<< HEAD
          deleteTask={() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
=======
          deleteTask = {() => deleteHandler(index)}
        />
      ))}
     <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2
    </div>
  );
}

export default App;
