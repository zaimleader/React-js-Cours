import React from 'react'
import FormTask from './FormTask'
import CmpTasks from './CmpTasks'

function BodyTask(props) {
  return (
    <div className='card'>
        <FormTask 
                  mode={props.mode}
                  activeTask={props.activeTask}
                  addNewTask={props.addNewTask}
                  filterTasks={props.filterTasks} />

        <CmpTasks 
                  taskList={props.taskList} 
                  deleteTask={props.deleteTask}
                  toggleCheck={props.toggleCheck}
                  editTask={props.editTask}
        />
    </div>
  )
}

export default BodyTask