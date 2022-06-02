import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models';

const App: React.FC = () => {

  const [todo, setToDo] = useState<string>("");
  const [todos, setToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // Avoid refresh of page on submit
    
    if(todo){
      setToDos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setToDo("");
    }
    console.log(todos);
  }

  return (
    <div className="App">
      <span className='heading'>To Do</span>
      <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;

