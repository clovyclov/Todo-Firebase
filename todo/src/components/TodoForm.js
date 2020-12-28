import React from 'react'
import {Button, TextField, FormControl, InputLabel, Input } from '@material-ui/core'

const TodoForm = ({input, setInput, todos, setTodos}) => {

    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input])
    }
    
    return (
        <div>
            <form noValidate onSubmit={submitTodo}>
                <FormControl>
                    <InputLabel>✅ Write A ToDo</InputLabel>
                    <Input type="text" value={input} onChange={e => setInput(e.target.value)} />
                </FormControl>
                <Button color='primary' variant="contained" onClick={submitTodo}>Add Todo NOW</Button>
            </form>
        </div>
    )
}

export default TodoForm
