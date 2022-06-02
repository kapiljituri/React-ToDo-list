import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setToDo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input' onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
            <input
                type ='input'
                value={todo}
                onChange={(e) => setToDo(e.target.value)}
                className='input_box'
                placeholder='Enter a Task'/>
            <button type='submit' className='input_submit'>Go</button>
        </form>
    )
}

export default InputField
