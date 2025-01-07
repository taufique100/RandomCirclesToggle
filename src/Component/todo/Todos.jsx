import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { removeTodo } from '../../Features/todo/todoSlice';

function Todos() {
    const todosList = useSelector(state => state?.todos);
    const dispatch = useDispatch()
    console.log('todosList',todosList)
    return (
        <div>
            <h1>Todos</h1>
            {
                todosList?.map((todo, index) => (
                    <li key={todo?.id}>
                        {todo?.text}
                        <button onClick={() => dispatch(removeTodo(todo?.id))}>X</button>
                    </li>
                ))
            }
        </div>
    )
}

export default Todos
