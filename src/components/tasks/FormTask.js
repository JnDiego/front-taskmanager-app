import React, { useContext } from 'react'
import { useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

  // get active project
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get context task function
  const tasksContext = useContext(taskContext);
  const { addTask } = tasksContext;

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

    //Add new task to task state
    task.projectId = actualProject.id;
    task.state = false;
    addTask(task)

    //Reload form
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input type="text" name="name" id="name" className="input-text" placeholder="Task Name" value={name} onChange={handleChange}/>
        </div>

        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-block" value="Add Task"/>
        </div>
      </form>
    </div>
  )
}

export default FormTask
