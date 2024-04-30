import React from 'react'
import Todo from './Todo'

const BodyTodoList = (props) => {

  return (
    <div>
      {
        props.todoList.map(todo => (
          <Todo todo={todo} 
                key={todo.id} 
                toggleTodo={props.toggleTodo} 
                deleteTodo={props.deleteTodo} 
                editTodo={props.editTodo} 
                mode={props.mode} 
          />
        ))
      }

      {
        props.todoList.length === 0 && (<h4>No Todo...</h4>)
      }
    </div>
  )
}

export default BodyTodoList