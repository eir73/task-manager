import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import AddForm from "./AddForm/AddForm";
import Context from "./context";
import DoneList from "./DoneList/DoneList";

function App() {
    const [todos, setTodos] = useState([{
        title: 'React APP',
        description: 'create SPA, create git repo',
        done: false,
        id: 0,
        date: new Date()
    }])
    const [state, setState] = useState(false)

    function changeDone(id) {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.done = !todo.done
            }
            return todo
        }))
    }
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function showForm() {
        setState(!state)
    }
    function addTodo(title, description) {
        setTodos(todos.concat({
            title,
            description,
            done: false,
            date: new Date(),
            id: todos.length
        }))
    }

  return (
      <Context.Provider value={{showForm, addTodo, changeDone, deleteTodo}}>
        <div className="App">
            {state ? <AddForm/> : null}
           <TodoList todos={todos}/>
           <DoneList/>
        </div>
      </Context.Provider>
  );
}

export default App;
