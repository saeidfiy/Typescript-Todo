import React from 'react';



interface Props {
  todoKey:number;
  todo: Todo;
  toggleTodo:ToggleTodo;
  deleteTo:deleteTo
}

export const TodoListItem: React.FC<Props> = ({todo,toggleTodo,todoKey,deleteTo}) => {
  return(

          <li>
              <label
                style={{textDecoration: todo.complete ? 'line-through':undefined}}
              >
                  <input type="checkbox" 
                  checked={todo.complete}
                  onClick={()=>{toggleTodo(todo)}}
                  />
                  {todo.text}
                  <input type="button" value="X" onClick={()=>{deleteTo(todoKey)}} />
              </label>
          </li>

  )
};