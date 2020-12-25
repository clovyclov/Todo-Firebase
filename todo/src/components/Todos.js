import React from 'react'

const Todos = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => {
                return <li key={Math.random()}>{todo}</li>
            })}
        </ul>
    )
}

export default Todos
