import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import Task from './Task'

const TaskList = () => {

  // get state from projects
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Get project tasks
  const tasksContext = useContext(taskContext);
  const { projecttasks } = tasksContext;

  // Validate actualproject
  if(!project) {
    return (
      <h2>Select a project</h2>
    )
  }

  // Array destructuring to extract actual project
  const [actualproject] = project

  const onClickDelete = () => {
    deleteProject(actualproject.id);
  }

  return (
    <React.Fragment>
      <h2>Project: { actualproject.name }</h2>
      <ul className="listado-tareas">
        {projecttasks.length === 0
          ? (<li className="tarea"><p>There are no tasks on the project.</p></li>)
          : projecttasks.map(task => (
            <Task
              key={task.id}
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
