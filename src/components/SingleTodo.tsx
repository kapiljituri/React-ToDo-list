import React from 'react'
import { Todo } from '../models'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdDoneOutline } from 'react-icons/md'
import './styles.css'

type Props = {
    todo: Todo;
    todos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setToDos}: Props) => {
  return (
    <form className='todos_single'>
      <span className='todos_single_text'>{todo.todo}</span>
      
      <div className='icon'><GrEdit/></div>
      <div className='icon'><MdDelete/></div>
      <div className='icon'><MdDoneOutline/></div>
    </form>
  )
}

export default SingleTodo
