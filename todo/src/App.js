import './App.css';
import Todos from './components/Todos';
import {useState} from 'react'
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take ya moms for a walk'])
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
