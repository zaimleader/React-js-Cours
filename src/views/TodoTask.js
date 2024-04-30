import React, { useState } from 'react'
import HeadTask from '../components/TodoTask/HeadTask'
import BodyTask from '../components/TodoTask/BodyTask'

function TodoTask() {
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
    let getTodos = localStorage.getItem("tasks");

    const [taskList, setTaskList] = useState(getTodos ? JSON.parse(getTodos) : []),
          [mode, setMode] = useState("add"),
          [activeTask, setActiveTask] = useState(null);
    
    const setTasksToLocal = () => {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }

    const deleteTask = (id) => {
      setTaskList(tasks => {
        let newTaskList = tasks.filter(task => task.id !== id);

        return newTaskList;
      })
    }

    const addNewTask = (title) => {
      if(mode === "edit"){
        setTaskList(tasks => {
          let newTasks = tasks.map(task => {
            if(task.id === activeTask.id){
              return {...activeTask, title: title}
            }
            return task;
          })
          setMode("add");
          return newTasks;
        })
      }
      else{
        setTaskList(tasks => {
          let task = {
            id : new Date().getTime(),
            title: title,
            done: false
          }
  
          let newTasksList = [task, ...tasks];
  
          return newTasksList;
        })
      }
    }

    const toggleCheck = (id) =>{
      setTaskList(tasks => {
        let newTasks = tasks.map(task => {
          if(task.id === id){
            return {...task, done: !task.done}
          }
          return task;
        })
        return newTasks;
      })
    }

    const filterTasks = () => {
      if(mode === "edit"){
        return;
      }

      if(mode === "filter"){
        setMode("add");
      }
      else
      {
        setMode("filter");
      }
    }

    const editTask = (task) => {
      setActiveTask(task)
      setMode("edit");
    } 

    let currentTask = [...taskList],
        len = currentTask.length;

    if(mode === "edit")
    {
      currentTask = [activeTask];
    }

    if(mode === "filter"){
      currentTask = taskList.filter(task => !task.done);
    }

    setTasksToLocal();

  return (
    <div>
        <HeadTask len={len} />

        <BodyTask 
                  mode={mode}
                  taskList={currentTask}
                  activeTask={activeTask}
                  addNewTask={addNewTask}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                  filterTasks={filterTasks}
                  editTask={editTask}
        />
    </div>
  )
}

export default TodoTask