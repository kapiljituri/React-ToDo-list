import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({todo, setToDo}) => {
  return (
    <form className='input'>
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
