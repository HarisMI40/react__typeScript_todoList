import React, { useRef } from 'react'
import "./styles.css";

    interface Props {
        todo : string,
        setTodo : React.Dispatch<React.SetStateAction<string>>
        handleAdd : (e : React.FormEvent) => void;
    }

const InputFeild : React.FC <Props> = ({todo, setTodo, handleAdd}) => {
  
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
        }    
    }>
        <input ref={inputRef} type="text" name="" id="" placeholder='Enter a text' className='input__box' onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button className='input__submit'> GO </ button>
    </form>
  )
}

export default InputFeild