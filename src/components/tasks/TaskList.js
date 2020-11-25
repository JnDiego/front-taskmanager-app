import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import Task from './Task'

const TaskList = () => {

  // get state from projects
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Validate actualproject
  if(!project) {
    return (
      <h2>Select a project</h2>
    )
  }

  // Array destructuring to extract actual project
  const [actualproject] = project

  const projectTasks = []

  const onClickDelete = () => {
    deleteProject(actualproject.id);
  }

  return (
    <React.Fragment>
      <h2>Project: { actualproject.name }</h2>
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
        onClick={onClickDelete}
      >
        Delete Project &times;
      </button>
    </React.Fragment>
  )
}

export default TaskList
