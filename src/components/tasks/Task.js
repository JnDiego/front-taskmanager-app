import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

  // get active project
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Array destructuring to extract actual project
  const [actualProject] = project

  // Get context task function
  const tasksContext = useContext(taskContext);
  const { deleteTask, getProjectTasks } = tasksContext;

  const deleteTaskButton = id => {
    deleteTask(id);
    getProjectTasks(actualProject.id)
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status && (
          <button
            type="button"
            className="completo"
          >
            Finished
          </button>
        )}
        {!task.status && (
          <button
            type="button"
            className="incompleto"
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTaskButton(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Task
