import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

  // get active project
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get context task function
  const tasksContext = useContext(taskContext);
  const { selectedtask, taskerror, addTask, validateTask, getProjectTasks, editTask, cleanTask } = tasksContext;


  //Detect if there is a selected task
  useEffect(() => {
    if(selectedtask) {
      setTask(selectedtask);
    } else {
      setTask({
        name: ''
      })
    }
  }, [selectedtask])

  // Form State
  const [task, setTask] = useState({
    name: '',
  })

  const { name } = task;

    // Validate actualProject
  if(!project) {
    return (
      null
    )
  }

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  // Array destructuring to extract actual project
  const [actualProject] = project

  const onSubmit = e => {
    e.preventDefault();

    //Validate
    if(name.trim() === '') {
      validateTask();
      return;
    }

    // Edit or New Task?
    if(!selectedtask) {
      //Add new task to task state
      task.projectId = actualProject.id;
      task.state = false;
      addTask(task)
    } else {
      //Edit actual task
      editTask(task);
      cleanTask();
    }

    

    // Get and filter actual project tasks
    getProjectTasks(actualProject.id);

    //Reload form
    setTask({
      name: ''
    })
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input type="text" name="name" id="name" className="input-text" placeholder="Task Name" value={name} onChange={handleChange}/>
        </div>

        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-block" value={selectedtask ? 'Edit Task' : 'Add Task'}/>
        </div>
      </form>
      {taskerror && (
        <p className="mensaje error">
          The task name is required
        </p>
      )}
    </div>
  )
}

export default FormTask
