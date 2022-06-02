import React from 'react'
import { Todo } from '../models'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((element: Todo) => (
        <SingleTodo
            todo={element}
            key={element.id}
            todos={todos}
            setToDos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList;
