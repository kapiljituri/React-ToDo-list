import React, { useEffect, useRef, useState } from 'react'
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
    // States
    const [edit, setEdit] = useState<boolean>(false); // Edit mode on/off
    // Text value in edit box to be ret to given todo
    const [editTodo, setEditTodo] = useState<string>(todo.todo); 

    // Functions
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

    const handleEditSave = (e: React.FormEvent, id: number) => {
        e.preventDefault(); // Avoid refresh of page on submit

        setToDos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editTodo}: todo
        )));
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    // Component
    return (
        <form className='todos_single' onSubmit={(e) => handleEditSave(e, todo.id)}>
            {
                edit ? (
                    <input
                        ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className='todos_single_text'
                    />
                ) : todo.isDone ? (
                    <s className='todos_single_text'>{todo.todo}</s>
                ) : (
                    <span className='todos_single_text'>{todo.todo}</span>
                )
            }
            
            <div className='icon' onClick={() => {
                if(!edit && !todo.isDone) {
                    setEdit(!edit); // Toggle edit mode
                }
            }}>
                <GrEdit/>
            </div>
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
