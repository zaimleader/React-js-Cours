import FeatherIcon from 'feather-icons-react'
import React from 'react'

function SingleTask({task, deleteTask, toggleCheck, editTask}) {
  return (
    <div 
        className= {task.done ? "d-flex w-100 todo done" : "d-flex w-100 todo"} 
        style={{margin: "10px 0"}} >
            
        <button type='button' onClick={() => toggleCheck(task.id)} >
            <FeatherIcon icon={task.done ? 'check-circle' : 'circle'} />
        </button>

        <p 
            className="text w-100"
            style={{margin: "0 10px"}} >
            {task.title}
        </p>

        <div className='d-flex'>
            <button type='button' onClick={() => editTask(task)} >
                <FeatherIcon icon='edit' />
            </button>
            
            <button type='button' onClick={() => deleteTask(task.id)} >
                <FeatherIcon icon='trash-2' />
            </button>
        </div>
    </div>
  )
}

export default SingleTask