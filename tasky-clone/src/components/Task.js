<<<<<<< HEAD
import React from "react";

const Task = (props) => {
    return ( <
            div className = "card" >
            <
            p className = "title" > { props.title } < /p> <p> Due: {props.deadline} </p > { " " } <
            p > { props.description } < /p> {/ * < p > { props.children } < /p> */
        } { " " } <
        /div>
);
};
=======
import React from 'react';

const Task = (props) => {
    
    return (
        <div className='card'>
        <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>Description: {props.description}</p>
         </div>
    )
}
>>>>>>> 67364d56008aa4a578b4d073bcbe4875242cbfa2

export default Task;