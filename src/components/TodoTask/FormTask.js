import FeatherIcon from 'feather-icons-react'
import React, { useState } from 'react'

function FormTask({activeTask, mode, addNewTask, filterTasks}) {

  const [title, setTitle] = useState(""),
        [renderEdit, setRenderEdit] = useState(false);

  const changeEventInput = (e) => {
    setTitle(e.target.value);
  }

  if(mode === "edit" && !renderEdit){
    setTitle(activeTask.title);
    setRenderEdit(true);
  }

  const handleNewTask = (e)=>{
    e.preventDefault();
    if(!title.trim()){
      return ;
    }
    addNewTask(title);
    setTitle("");
    setRenderEdit(false);
  }
  
  return (
    <div>
      <form className='d-flex w-100'>
          <button type='button' onClick={filterTasks} >
              <FeatherIcon icon='circle' />
          </button>

          <input
                className='w-100'
                style={{margin: "0 10px"}} 
                placeholder='Task...'
                value={title}
                onChange={changeEventInput}
          />

          <button type='submit' onClick={handleNewTask} >
              Add new
          </button>
      </form>
    </div>
  )
}

export default FormTask