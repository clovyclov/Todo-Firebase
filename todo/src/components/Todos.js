import { List, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Todos.css'
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRounded from '@material-ui/icons/EditRounded'
import TodoModal from './TodoModal';

const Todos = ({todos, deleteTodoHandler}) => {

    const [currentTodo, setCurrentTodo] = useState({})
    const [openState, setOpenState] = useState(false)
    console.log(openState)

    return (
        <>
        <TodoModal currentTodo={currentTodo} openState={openState} setOpenStateHandler={setOpenState} />
        <List className="todoList">
            {todos.map(el => {
                return (
                    <ListItem key={el.id}>
                        <ListItemText primary={el.todo.todo} secondary="Deadline...">{el.todo.todo}</ListItemText>
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => {
                            setCurrentTodo({id: el.id, todo: el.todo.todo})
                            setOpenState(true)
                            }}>
                            <EditRounded />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodoHandler(el.id)}>
                            <DeleteIcon />
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}
        </List>
        </>
    )
}

export default Todos
