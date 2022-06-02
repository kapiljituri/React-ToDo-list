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

    const handleDone = (id: number) => {
        setToDos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone }: todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setToDos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <form className='todos_single'>
            {
                todo.isDone ? (
                    <s className='todos_single_text'>{todo.todo}</s>
                ) : (
                    <span className='todos_single_text'>{todo.todo}</span>
                )
            }
            
            <div className='icon'><GrEdit/></div>
            <div className='icon' onClick={()=>handleDelete(todo.id)}>
                <MdDelete/>
            </div>
            <div className='icon' onClick={()=>handleDone(todo.id)}>
                <MdDoneOutline/>
            </div>
        </form>
    )
}

export default SingleTodo
