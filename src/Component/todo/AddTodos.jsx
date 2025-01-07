import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../Features/todo/todoSlice';

function AddTodos() {

    const [input, setInput] = useState()
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault();
        console.log(input)
        dispatch(addTodo(input))
        setInput('');
    }

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text"
            placeholder='Enter todos...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodos
