import React, {useContext} from 'react'
import Todo from "./Todo/Todo";
import Context from "../context";

function TodoList(props) {

    const {showForm} = useContext(Context)

    return (
        <div className='todo-list-wrap'>
            <div className="todo-list-header">
                <h5>todo List</h5>
                <div className="add" onClick={showForm}>&oplus;</div>
            </div>
            <div className="todos">
                {props.todos.length !== 0
                    ? props.todos.map(todo => (<Todo
                        title={todo.title}
                        description={todo.description}
                        date={todo.date}
                        done={todo.done}
                        id={todo.id}/>))
                    : (<span>No todos</span>)}
            </div>
        </div>
    )
}

export default TodoList