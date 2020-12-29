import './App.css';
import Todos from './components/Todos';
import {useState, useEffect} from 'react'
import TodoForm from './components/TodoForm';
import db from './models/config'
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')


  useEffect(() => {
    db.collection('todos').get().then((querySnapshot) => {
      // querySnapshot.forEach(doc => {
      //   setTodos([...todos, doc.data().todo])
      // })
      /*The above doesn't work because its not mutating state (todos), so its basically just grabbing the same array then appending a single todo each time.*/
      
      //setTodos(querySnapshot.docs.map(doc => doc.data()))
      //Dont need this anymore because I'm listening to the snapshot below
    })
    db.collection('todos').onSnapshot(querySnapshot => setTodos(...todos, querySnapshot.docs.map(doc => ({id: doc.id, todo: doc.data()}))))
  }, [])

  const submitTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  const deleteTodo = (todoID) => {
    db.collection('todos').doc(todoID).delete().then(() => console.log("Todo Deleted"))
  }


  return (
    <div className="App">
      <h1>TODO App</h1>
      <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos} submitTodoHandler={submitTodo} />
      <Todos todos={todos} deleteTodoHandler={deleteTodo} />
    </div>
  );
}

export default App;
