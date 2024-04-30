import FeatherIcon from 'feather-icons-react'
import { useState } from 'react';

const FormTodoList = ({addNewTodo, filterTodoList, mode, activeTodo}) => {

  const [title, setTitle] = useState("");
  const [editRender, setEditRender] = useState(false);

  const changeEventInput = (e) => {
    setTitle(e.target.value);
  }

  if(mode === "edit" && !editRender){
    setTitle(activeTodo.title);
    setEditRender(true);
  }

  const submitNewAddTodo = (e) => {
    e.preventDefault();

    setEditRender(false);
    
    if(!title.trim()){
      return;
    }

    addNewTodo(title);
    setTitle("")
  }

  return (
    <div>
        <form className='w-100 d-flex'>
            <button style={mode === "filter" ? {color : "red"} : {}} type='button' onClick={filterTodoList}>
              <FeatherIcon icon='circle' />
            </button>
            
            <input 
                    placeholder='add new todo...' 
                    name='' 
                    style={{margin: "0 10px"}} 
                    className='w-100' 
                    value={title} 
                    onChange={changeEventInput}
            />
            
            <button type='submit' onClick={submitNewAddTodo} >
              {
                mode === "edit" ? "Edit" : "Add new"
              }
            </button>
        </form>
    </div>
  )
}

export default FormTodoList