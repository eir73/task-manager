import React, {useState, useContext} from 'react'
import Context from "../../context";

function Todo(props) {
    const {changeDone, deleteTodo} = useContext(Context)

    let classList = ['todo-wrap']

    if(props.done) {
        classList.push('done')
    }

    return (
        <div className={classList.join(' ')}>
            <div className='todo-header'>
                <div className='todo-title'>
                    <h5>{props.title}</h5>
                </div>
                <div className='todo-close' onClick={() => deleteTodo(props.id)}>
                    <span>&times;</span>
                </div>
            </div>
            <div className='todo-main'>
                <div className='todo-desc'>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className='todo-footer'>
                <div className='todo-done' onClick={() => changeDone(props.id)}>
                    &or;
                </div>
                <p>{props.date.toDateString().slice(4,10) + '  ' + props.date.toTimeString().slice(0,5)}</p>
            </div>
        </div>
    )
}

export default Todo