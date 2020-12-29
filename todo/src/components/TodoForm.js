import React from 'react'
import {Button, TextField, FormControl, InputLabel, Input } from '@material-ui/core'
import db from '../models/config';

const TodoForm = ({input, setInput, todos, setTodos, submitTodoHandler}) => {
    
    return (
        <div>
            <form noValidate onSubmit={submitTodoHandler}>
                <FormControl>
                    <InputLabel>✅ Write A ToDo</InputLabel>
                    <Input type="text" value={input} onChange={e => setInput(e.target.value)} />
                </FormControl>
                <Button color='primary' variant="contained" onClick={submitTodoHandler}>Add Todo NOW</Button>
            </form>
        </div>
    )
}

export default TodoForm
