import FeatherIcon from 'feather-icons-react'
import React from 'react'

const Todo = ({todo, toggleTodo, deleteTodo, editTodo, mode}) => {
  return (
    <div className={`d-flex w-100 todo ${todo.done && "done"}`}>
        <button type="button" className='icon' onClick={() => toggleTodo(todo.id)}>
          <FeatherIcon icon={todo.done ? "check-circle" : "circle" } />
        </button>

        <p className='text w-100'>{todo.title}</p>
        
        {
          mode !== "edit" && (
            <div className='d-flex' >
                <button type="button" className='icon-edit' onClick={() => editTodo(todo)}>
                  <FeatherIcon icon='edit' size="20" />
                </button>
            
                <button type="button" className='icon-delete' onClick={() => deleteTodo(todo.id)}>
                  <FeatherIcon icon='trash-2' size="20" /> 
                </button>
            </div>
          )
        }
    </div>
  )
}

export default Todo