import React from 'react'

const TodoForm = ({input, setInput, todos, setTodos}) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setTodos([...todos, input])
            }}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
