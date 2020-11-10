import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import Task from './Task'

const TaskList = () => {

  // get state from projects
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Validate actualProject
  if(!project) {
    return (
      <h2>Select a project</h2>
    )
  }

  // Array destructuring to extract actual project
  const [actualProject] = project

  const projectTasks = [
    { name: 'Select platform', status: true },
    { name: 'Select colors', status: false },
    { name: 'Select payment platforms', status: true },
    { name: 'Select Hosting', status: false }
  ]

  return (
    <React.Fragment>
      <h2>Project: { actualProject.name }</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0
          ? (<li className="tarea"><p>There are no tasks on the project.</p></li>)
          : projectTasks.map(task => (
            <Task
              task={task}
            />
          ))
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
      >
        Delete Project &times;
      </button>
    </React.Fragment>
  )
}

export default TaskList
