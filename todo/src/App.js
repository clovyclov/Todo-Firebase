import './App.css';
import Todos from './components/Todos';
import {useState, useEffect} from 'react'
import TodoForm from './components/TodoForm';
import db from './models/config'

function App() {

  useEffect(() => {

    db.collection('todos').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        console.log(doc.data().todo)
        setTodos([...todos, doc.data().todo])
      })
      // setTodos(querySnapshot.docs.map((todo) => {
      //   setTodos(...todos, todo.data().todo)
      //   console.log("Here", todos)
      // })
      })

      // snapshot.forEach((todo) => {
      //   setTodos(...todos, todos.push({id: todo.id, text: todo.data()}))
      //   console.log("Here", todos)
      // })
  }, [])

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  


  return (
    <div className="App">
      <h1>TODO App</h1>
      <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
