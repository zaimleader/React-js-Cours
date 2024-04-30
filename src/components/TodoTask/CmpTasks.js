import React from 'react'
import SingleTask from './SingleTask'

function CmpTasks(props) {
  return (
    <div>
        {
          props.taskList.length > 0 ? (
            props.taskList.map(task => (
              <SingleTask 
                task={task}
                key={task.id}
                deleteTask={props.deleteTask}
                toggleCheck={props.toggleCheck}
                editTask={props.editTask}
              />
            ))
          ) : (<h4 style={{textAlign: "center"}}>No Task exist...</h4>)
        }
    </div>
  )
}

export default CmpTasks