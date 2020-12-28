import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todos.css'

const Todos = ({todos}) => {

    // const myPromise = new Promise((resolve, reject) => {
    //     resolve("We did it Joe!")

    //     if(1){
    //         reject("We did NOT do it Joe!")
    //     }
    // })

    console.log(todos)

    return (
        <List className="todoList">
            {todos.map(todo => {
                return (
                    <ListItem key={todo.id}>
                        <ListItemText primary={todo} secondary="Deadline...">{todo.text}</ListItemText>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default Todos
