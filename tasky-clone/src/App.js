import "./App.css";
<<<<<<< HEAD
import Task from "./components/Task";

function App() {
    return ( <
        div className = "container" >
        <
        h1 > Tasky < /h1>{" "} <
        Task title = "Dishes"
        deadline = "Today"
        description = "Empty Dishwaser" / >
        <
        Task title = "Laundry"
        deadline = "Tomorrow"
        description = "Fold laundry and put away" /
        > { " " } { /*</div> fold laundry and put away  </Task>*/ } { " " } <
        Task title = "Tidy"
        deadline = "Today" / >
        <
        /div>
    );
=======
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1> Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash and dry" />
      <Task title="Laundry" deadline="Tomorrow" description="fold laundry and put away" />
      <Task title="Tidy" deadline="Today"  description="everything in its box"/>
    </div>
  );
>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2
}

/* This is a comment in React - working code
function App() {
    return ( 
        <div className = "container" >
        <h1> Tasky </h1> 
        <Task title="Dishes" deadline="Today" />
        <Task title = "Laundry" deadline = "Tomorrow" >
        fold laundry and put away  </Task>
        <Task title = "Tidy" deadline = "Today" />
        </div>
    );
}
*/

export default App;