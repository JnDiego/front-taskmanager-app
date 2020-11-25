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
  const { deleteTask, getProjectTasks, changeStatusTask, setActualTask } = tasksContext;

  const changeStatus = task => {
    task.status = !task.status;
    changeStatusTask(task);
  }

  const deleteTaskButton = id => {
    deleteTask(id);
    getProjectTasks(actualProject.id)
  }

  const selectTask = task => {
    setActualTask(task);
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status && (
          <button
            type="button"
            className="completo"
            onClick={() => {changeStatus(task)}}
          >
            Finished
          </button>
        )}
        {!task.status && (
          <button
            type="button"
            className="incompleto"
            onClick={() => {changeStatus(task)}}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
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
