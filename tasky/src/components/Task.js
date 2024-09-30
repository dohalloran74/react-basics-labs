import React from 'react';

const Task = (props) => {
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
           
            <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
           <p>{props.description}</p>
<<<<<<< HEAD
           <p style={{
                backgroundColor: props.priority === "High" ? 'red' : props.priority === "Medium" ? 'goldenrod' : 'green',
                padding: "0.2em",
                borderRadius: "0.4em" 
                }}>
                {props.priority}
            </p>
=======
           <p>{props.priority}</p>

    

>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2
           <button onClick={props.markDone} className='doneButton'>Done</button>

           <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            {/*<p>{props.children}</p> */}
        </div>
    )
};

export default Task;