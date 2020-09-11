import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props{
    deleteTo:deleteTo;
    todos:Todo[];
    toggleTodo:ToggleTodo;
}

export const TodoList:React.FC<Props> = ({todos,toggleTodo,deleteTo})=>{

    return(
        <ul>
            {
                todos.map((todo,key)=>(
                    <TodoListItem key={key} deleteTo={deleteTo} todoKey={key} todo={todo} toggleTodo={toggleTodo}  />
                ))
            }
        </ul>
    )
}