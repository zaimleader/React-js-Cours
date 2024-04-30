import React, { useState } from 'react'
import BodyTodoList from '../components/TodoList/BodyTodoList'
import FormTodoList from '../components/TodoList/FormTodoList'
import "../asset/TodoList/TodoList.css"

const TodoList = () => {
  const initTodoList = [
    {
      id: 1, title: "Task 1", done: true
    },
    {
      id: 2, title: "Task 2", done: false
    },
    {
      id: 3, title: "Task 3", done: true
    },
    {
      id: 4, title: "Task 4", done: false
    },
  ];

  let getTodos = localStorage.getItem("todos");

  const [todoList, setTodoList] = useState(getTodos ? JSON.parse(getTodos) : []);
  const [mode, setMode] = useState("add");
  const [activeTodo, setActiveTodo] = useState(null);

  const setTasksToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }

  const toggleTodo = (id) =>{
    setTodoList((data) => {
      const newData = data.map((dt) => {
        if(dt.id === id){
          return {...dt, done : !dt.done}
        }
        return dt;
      })

      return newData;
    })
  }

  const deleteTodo = (id) => {
    setTodoList((data) => {
      const newData = data.filter(dt => dt.id !== id)

      return newData;
    }) 
  }

  const addNewTodo = (title) => {
    if(mode === "edit"){
      const newTodo = todoList.map(td => {
        if(td.id === activeTodo.id){
          td.title = title;
        }
        return td;
      })
      setTodoList(newTodo);
      setMode("add");

    }
    else{
      let newTodo = {
        id : new Date().getTime(),
        title: title,
        done : false
      }
  
      setTodoList(data => {
        const newData = [newTodo, ...data];
  
        return newData;
      })
    }
  }

  const filterTodoList = () =>{
    if(mode === "edit"){
      return;
    }
    if(mode === "filter"){
      setMode("add");
    }
    else{
      setMode("filter");
    }
  }

  const editTodo = (td) => {
    setActiveTodo(td);
    setMode("edit");
  }

  let currentTodo = [...todoList];

  if(mode === "filter"){
    currentTodo = todoList.filter(td => !td.done);
  }

  if(mode === "edit"){
    currentTodo = [activeTodo];
  }

  setTasksToLocal();

  return (
    <div className='card'>
        <FormTodoList 
                      addNewTodo={addNewTodo} 
                      filterTodoList={filterTodoList} 
                      mode={mode} 
                      activeTodo={activeTodo}
        />
        
        <BodyTodoList 
                      todoList={currentTodo} 
                      toggleTodo={toggleTodo} 
                      deleteTodo={deleteTodo} 
                      editTodo={editTodo} 
                      mode={mode} 
        />
    </div>
  )
}

export default TodoList