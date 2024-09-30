import "./App.css";
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