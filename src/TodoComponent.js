
import React from 'react'
import './TodoComponent.css';

function TodoComponent (props){

    return (
        <div className = "container">
        <h3>User ID: {props.userId}</h3>
        <h3>ID: {props.id}</h3>
        <h3>Title: {props.title}</h3>
        <h3>Body :{props.body }</h3>
        </div>
    )
}

export default TodoComponent
