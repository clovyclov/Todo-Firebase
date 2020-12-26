import React from 'react'
import {Button, TextField } from '@material-ui/core'

const TodoForm = ({input, setInput, todos, setTodos}) => {
    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input])
    }
    return (
        <div>
            <form noValidate onSubmit={submitTodo}>
                <TextField label="Enter ToDo Here..." type="text" value={input} onChange={e => setInput(e.target.value)} />
                <Button color='primary' variant="contained" onClick={submitTodo}>Add Todo NOW</Button>
            </form>
        </div>
    )
}

export default TodoForm
