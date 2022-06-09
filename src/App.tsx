import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom';
import TestDemo from './components/TestDemo';
import Input from './components/Input';

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
      {/* <span className='heading'>To Do</span> */}
      {/* <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setToDos}/> */}

      {/* <div className="test_demo"> */}

        <TestDemo/>
      {/* </div> */}
      

    </div>

  );
}

export default App;

