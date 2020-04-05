import React, {useState, useContext}  from 'react'
import style from './AddForm.module.css'
import Context from "../context";

function AddForm(props) {

    const {showForm, addTodo} = useContext(Context)

    function formTodo() {
        if(title.trim()) {
            addTodo(title, description)
            showForm()
        }
        else {
            alert('Your title is not filled!')
        }
    }

    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    return (
        <div className={style.wrap}>
            <div className={style.form_wrap}>
                <div className={style.close} onClick={showForm}>&times;</div>
                <div className={style.title}>
                    <span>Enter the title</span>
                    <input onChange={(event => setTitle(event.target.value))}/>
                </div>
                <div className={style.description}>
                    <span>Enter the description</span>
                    <input onChange={event => setDescription(event.target.value)}/>
                </div>
                <div className={style.add_button}>
                    <button onClick={formTodo}>Add todo</button>
                </div>

            </div>
        </div>
    )
}

export default AddForm
